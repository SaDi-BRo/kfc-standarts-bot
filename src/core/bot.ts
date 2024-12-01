import { Bot, config } from './lib.ts';

const bot = new Bot(config().BOT_TOKEN);

export { bot };
