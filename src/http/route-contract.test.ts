import assert from "node:assert/strict";
import test from "node:test";
import { z } from "zod";
import { createApiApp } from "../api/create-api-app.js";
import { registerContractRoute } from "./route-contract.js";

test("request errors remain 400 and response failures return a sanitized 500", async () => {
  const app = await createApiApp({
    appName: "Contract test",
    environment: "test",
    cookieSecret: "a".repeat(32),
    corsOrigins: []
  });
  registerContractRoute(app, {
    method: "POST",
    url: "/contract",
    schemas: { body: z.object({ name: z.string() }), response: z.string() },
    handler: ({ body }) => body.name
  });
  registerContractRoute(app, {
    method: "GET",
    url: "/broken",
    schemas: { response: z.string().email() },
    handler: () => "server-private-invalid-value"
  });
  try {
    const valid = await app.inject({ method: "POST", url: "/contract", payload: { name: "ok" } });
    assert.equal(valid.statusCode, 200);
    const invalid = await app.inject({ method: "POST", url: "/contract", payload: { name: 3 } });
    assert.equal(invalid.statusCode, 400);
    const malformed = await app.inject({
      method: "POST",
      url: "/contract",
      headers: { "content-type": "application/json" },
      payload: "{"
    });
    assert.equal(malformed.statusCode, 400);
    const broken = await app.inject({ method: "GET", url: "/broken" });
    assert.equal(broken.statusCode, 500);
    assert.equal(broken.json().error.code, "RESPONSE_CONTRACT_INVALID");
    assert(!broken.body.includes("server-private-invalid-value"));
    assert(!broken.body.includes("issues"));
  } finally {
    await app.close();
  }
});
