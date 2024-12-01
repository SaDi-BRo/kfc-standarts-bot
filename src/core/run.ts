import { webhookCallback, serve, config } from './lib.ts';
import { bot } from './bot.ts';

config().MODE === 'development' && bot.start();

config().MODE === 'production' &&
  serve(async req => {
    const handleUpdate = webhookCallback(bot, 'std/http');
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
