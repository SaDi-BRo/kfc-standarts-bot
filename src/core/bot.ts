import { Bot, config } from './lib.ts';

Deno.env.set('BOT_TOKEN', Deno.env.get('BOT_TOKEN') || config().BOT_TOKEN);

const bot = new Bot(Deno.env.get('BOT_TOKEN')!);

export { bot };
