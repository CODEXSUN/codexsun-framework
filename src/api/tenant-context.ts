import type { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyRequest {
    correlationId?: string;
    tenantId?: string;
  }
}

export type TenantContextOptions = {
  headerName?: string;
};

export function registerTenantContext(app: FastifyInstance, options?: TenantContextOptions): void {
  const headerName = options?.headerName ?? "x-tenant-id";

  app.decorateRequest("tenantId", undefined);
  app.decorateRequest("correlationId", undefined);

  app.addHook("onRequest", async (request, reply) => {
    // A caller-supplied tenant header is never an authenticated client context.
    void headerName;

    const correlationHeader = request.headers["x-correlation-id"];
    if (typeof correlationHeader === "string" && correlationHeader.trim().length > 0) {
      request.correlationId = correlationHeader.trim();
    } else {
      request.correlationId = request.id;
    }
    reply.header("x-correlation-id", request.correlationId);
  });
}
