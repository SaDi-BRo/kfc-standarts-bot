import { webhookCallback, serve } from './lib.ts';
import { bot } from './bot.ts';

if (Deno.env.get('MODE') === 'development') bot.start();
if (Deno.env.get('MODE') === 'production') {
  const handleUpdate = webhookCallback(bot, 'std/http');
  serve(async req => {
    if (req.method === 'POST') {
      const url = new URL(req.url);
      if (url.pathname.slice(1) === bot.token) {
        try {
          return await handleUpdate(req);
        } catch (err) {
          console.error(err);
        }
      }
    }
    return new Response();
  });
}
