import { Context } from '../core/lib.ts';

const startController = (ctx: Context) => {
  ctx.reply('starts');
};

export { startController };
