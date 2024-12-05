import { MyContext } from '../core/bot.ts';

const startController = async (ctx: MyContext) => {
  await ctx.reply(ctx.t('start'));
};

export { startController };
