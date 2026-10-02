import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import test from "node:test";
import { z } from "zod";
import { loadEnv } from "./load-env.js";

test("standalone apps never load a parent repository environment", (context) => {
  const root = mkdtempSync(resolve(tmpdir(), "codexsun-env-test-"));
  const originalDirectory = process.cwd();
  const key = "CODEXSUN_ENV_BOUNDARY_TEST";
  const originalValue = process.env[key];
  context.after(() => {
    process.chdir(originalDirectory);
    if (originalValue === undefined) delete process.env[key];
    else process.env[key] = originalValue;
    rmSync(root, { recursive: true, force: true });
  });
  const app = resolve(root, "app");
  mkdirSync(resolve(app, "api/src"), { recursive: true });
  writeFileSync(resolve(root, ".env"), `${key}=parent\n`);
  writeFileSync(resolve(app, "package.json"), '{"name":"standalone-app"}\n');
  process.chdir(resolve(app, "api/src"));
  delete process.env[key];
  const schema = z.object({ CODEXSUN_ENV_BOUNDARY_TEST: z.string() });
  assert.throws(() => loadEnv(schema), /root .env file is required/);
  assert.equal(process.env[key], undefined);
  writeFileSync(resolve(app, ".env"), `${key}=app\n`);
  assert.equal(loadEnv(schema).CODEXSUN_ENV_BOUNDARY_TEST, "app");
});
