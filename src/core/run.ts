import { webhookCallback, config } from './lib.ts';
import { bot } from './bot.ts';

Deno.env.set('MODE', Deno.env.get('MODE') || config().MODE);

Deno.env.get('MODE') === 'development' && bot.start();

import { Application } from 'https://deno.land/x/oak@v17.1.3/mod.ts';

const app = new Application(); // or whatever you're using

// Make sure to specify the framework you use.
Deno.env.get('MODE') === 'production' && app.use(webhookCallback(bot, 'oak'));
