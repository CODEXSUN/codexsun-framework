import { existsSync } from "node:fs";
import { dirname, join, parse, resolve } from "node:path";
import dotenv from "dotenv";
import type { z } from "zod";

export function loadEnv<TSchema extends z.ZodTypeAny>(schema: TSchema): z.infer<TSchema> {
  const envPath = loadNearestEnvFile();
  if (!envPath) {
    showMissingEnvBanner();
    throw new Error("An application root .env file is required.");
  }

  const result = schema.safeParse(process.env);
  if (!result.success) {
    showInvalidEnvBanner();
    throw result.error;
  }

  return result.data;
}

function loadNearestEnvFile() {
  const envPath = findNearestEnvFile(process.cwd());

  if (envPath) {
    const result = dotenv.config({ override: false, path: envPath, quiet: true });
    if (result.error) {
      throw result.error;
    }
  }

  return envPath;
}

function findNearestEnvFile(startPath: string) {
  let currentPath = resolve(startPath);
  const rootPath = parse(currentPath).root;

  while (true) {
    const envPath = join(currentPath, ".env");

    if (existsSync(envPath)) {
      return envPath;
    }

    if (existsSync(join(currentPath, "package.json")) || currentPath === rootPath) {
      return undefined;
    }

    currentPath = dirname(currentPath);
  }
}

function showMissingEnvBanner() {
  console.warn(`
CODEXSUN environment file was not found.

Create one before starting the app:
  Copy-Item .env.example .env

Configure the keys required by the application's environment schema.
`);
}

function showInvalidEnvBanner() {
  console.error(`
CODEXSUN environment is incomplete or invalid.

Check .env against the application's environment schema.
Start from:
  Copy-Item .env.example .env
`);
}
