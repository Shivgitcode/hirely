import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL as string
  },
  schema: './src/database/schema.ts',
  out: './src/database',
  verbose: true,
  strict: true
});
