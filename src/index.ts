import { Elysia } from 'elysia';
import { db } from './db';
import { users } from './db/schema';

const app = new Elysia()
  .get('/', async () => {
    try {
      // Test querying from users table to verify db integration
      await db.select().from(users).limit(1);
      return {
        status: 'ok',
        message: 'Hello World',
        database: 'connected',
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Hello World',
        database: 'disconnected',
        error: (error as Error).message,
      };
    }
  })
  .listen(Number(process.env.PORT) || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
