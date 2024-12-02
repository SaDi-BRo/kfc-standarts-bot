import { webhookCallback, serve } from './lib.ts';
import { bot } from './bot.ts';
import { Application } from 'https://deno.land/x/oak@v17.1.3/mod.ts';

const app = new Application();

Deno.env.get('MODE') === 'development' && bot.start();
Deno.env.get('MODE') === 'production' && app.use(webhookCallback(bot, 'oak'));
