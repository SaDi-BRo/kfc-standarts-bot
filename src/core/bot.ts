import { Bot } from './lib.ts';

const bot = new Bot(Deno.env.get('BOT_TOKEN')!);

export { bot };
