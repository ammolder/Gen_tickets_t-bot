import { Markup, Telegraf } from 'telegraf';
import { Command } from './command.class';
import { IBotContext } from '../context/context.interface';

export class StartCommand extends Command{
    constructor(bot: Telegraf<IBotContext>) {
        super(bot)
    }
    handle(): void {
        this.bot.start((ctx) => {
            ctx.reply("Do you like it?", Markup.inlineKeyboard([Markup.button.callback("👍","it_like"),Markup.button.callback("👎","it_dislike")]))

        })
        this.bot.action("it_like", (ctx) => {
            ctx.editMessageText("💥 Це правильний вибір!!!")
            ctx.session.isLike = true
        console.log('ctx.ddddd:', ctx.session);
        })

        this.bot.action("it_dislike", (ctx) => {
            ctx.session.isLike = false
            ctx.editMessageText("😤 Geys...Жми щось нормальне")
        console.log('ctx.sessionFalse:', ctx.session);

})
    }

}