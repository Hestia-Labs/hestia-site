import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    dialect: "sqlite",
    schema: "./src/db/schema.ts",
    out: "./src/db",
    dbCredentials: {
        //@ts-ignore
        dbName: "crvdb",
        wranglerConfigPath: ".",
        url: "file:.wrangler/state/v3/d1/miniflare-D1DatabaseObject/bf4e4f1be5c9b3fef953e8583e5ba12cef80ebd0fa792e7231e2ab931877c7c2.sqlite",
    },
});