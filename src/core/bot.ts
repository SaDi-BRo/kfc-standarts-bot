import { Bot } from './lib.ts';
import { Context, I18n, I18nFlavor } from './lib.ts';

export type MyContext = Context & I18nFlavor;

const bot = new Bot<MyContext>(Deno.env.get('BOT_TOKEN')!);

const i18n = new I18n<MyContext>({
  defaultLocale: 'uz', // see below for more information
  // Load all translation files from locales/. (Not working in Deno Deploy.)
  directory: 'src/locales',
});

bot.use(i18n);

export { bot };
