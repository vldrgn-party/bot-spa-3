const TelegramBot = require('node-telegram-bot-api');

const token = '7343494680:AAHNFOG-gVacehyYRC_bkxmQqVqmJR7_s0E';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Играть сейчас",
                            web_app: {url: "https://dragon-slide.site/dm6hBc"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - версия",
                            url: "https://dragon-slide.site/dm6hBc",
                        },
                    ],
                    [
                        {
                            text: "🐉 Официальный канал",
                            url: "https://t.me/dragonmoney",
                        },
                    ],
                    [
                        {
                            text: "💰 Бонусы",
                            url: "https://t.me/dragonmoney",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendPhoto(chatId, './img/home.jpg');
            await bot.sendMessage(chatId, "💰 Добро пожаловать в Dragon money! 🐉 \n\n Теперь вы можете играть прямо в \n телеграм!", menu_game)
        }
    }
    startBot()

    function activatePush() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Играть сейчас",
                            web_app: {url: "https://dragon-slide.site/76bjy6"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - версия",
                            url: "https://dragon-slide.site/76bjy6",
                        },
                    ],
                    [
                        {
                            text: "🐉 Официальный канал",
                            url: "https://t.me/dragonmoney",
                        },
                    ],
                    [
                        {
                            text: "💰 Бонусы",
                            url: "https://t.me/dragonmoney",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }
        setInterval( async () => {
            await bot.sendMessage(chatId, 'Пришло время побеждать и зарабатывать с Dragon money! \n\n Заходи в игру и забирай свои бонусы', menu_game)
        }, 18000000);
    }
    activatePush()
})
  