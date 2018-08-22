var token = process.env.TOKEN;

var Bot = require('node-telegram-bot-api');
var bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.onText(/^/, function (msg) {
  var name = msg.from.first_name;
  bot.sendMessage({
    layout: 2,
    method: 'sendMessage',
    params: ['Hi There! I Am A *Real-Time* Bot That Fetches The Latest CryptoCurrency Statistics And Market Prices.I Work In Both *Groups* And In *Private* ', {
        parse_mode: 'Markdown'
    }],
    menu: [
        {
            text: '🔰Help',
            callback: (callbackQuery) => {
                $.runInlineMenu({
                    layout: 3,
                    method: 'sendMessage', //here you must pass the method name
                    params: ['*Use The Commands As Is*', {
                        parse_mode: 'Markdown'
                    }],
                    menu: [
                        {
                            text: '🔌Stats Help', //text of the button
                            callback: (callbackQuery) => {
                                $.sendMessage('_BitCoin Mining Statistics_\n\nThis section relates to the BitCoin Mining network. Halving is a phenomnon where the reward per block will be halved from 25 BitCoins to 12.5 Bitcoins.\n\n/halving : *Returns number of blocks remaining to the "halving".*\n/blocktime : *Returns estimated time taken to mine a block.*\n/blocksmined : *Returns the number of blocks mined today.*\n/hashrate : *Returns estimated BTC network hash rate in GH/s.*\n/difficulty : *Returns the current BitCoin difficulty target.*', {
                                    parse_mode: 'Markdown'
                                })
                                tg.api.answerCallbackQuery(callbackQuery.id, {
                                    text: '🔌Stats Help',
                                    show_alert: false
                                })
                            }
                                     },
                        {
                            text: '💰Markets Help',
                            callback: (callbackQuery) => {
                                $.sendMessage('_Market Prices In Realtime_\n\n/btcusd : *Returns the current BitCoin market price in US Dollars.*\n/btcgbp : *Returns the current BitCoin market price in Sterling Pounds.*\n/btcrub : *Returns the current BitCoin market price in Russian Roubles.*\n/btceur : *Returns the current BitCoin market price in Euros.*\n/btccny : *Returns the current BitCoin market price in Chinese Yuan.*\n/ltcusd : *Returns the current LiteCoin market price in US Dollars.*\n/ethusd : *Returns the current Ethereum market price in US Dollars.*', {
                                    parse_mode: 'Markdown'
                                })
                                tg.api.answerCallbackQuery(callbackQuery.id, {
                                    text: '💰Markets Help',
                                    show_alert: false
                                })
                            }
                                    },
                        {
                            text: '📈Charts Help',
                            callback: (callbackQuery) => {
                                $.sendMessage('_Charts_\n\nThe bot fetches charts in real-time every single time.The charts exhibit a line which is the BitCoin market price and Red/Green bars which indicate a +/- in the net volume traded on BitFinex, where volume is the amount of amount of bitcoin traded in either selling of it or buying.\n\n/chartdaily : *Returns The Daily Trading Chart.*\n/chartweekly : *Returns The Weekly Trading Chart.*\n/chartmonthly : *Returns The Monthly Trading Chart.*\n/chartquarterly : *Returns The Quarterly Trading Chart.*\n/chartyearly : *Returns The Yearly Trading Chart.*\n/chartalltime : *Returns The All-Time Trading Chart.*\n/charthashrate : *Reurns The Bitcoin Network Chart*', {
                                    parse_mode: 'Markdown'
                                })
                                tg.api.answerCallbackQuery(callbackQuery.id, {
                                    text: '📈Charts Help',
                                    show_alert: false
                                })
                            }
                                    }
                                  ]
                })
                tg.api.answerCallbackQuery(callbackQuery.id, {
                    text: '🔰Showing Help',
                    show_alert: false
                })

            }
      },
        {
            text: '🌀About',
            callback: (callbackQuery) => {
                $.sendMessage('`v 1.3`\n\n⚒*Made By :* @kamikazechaser\n\n❤️*Made With :* NodeJS\n\n⚡️*Powered By :* baum.xyz\n\n`Report Any Bugs Directly To Me!`', {
                    parse_mode: 'Markdown'
                })
                tg.api.answerCallbackQuery(callbackQuery.id, {
                    text: '🌀Showing About',
                    show_alert: false
                })
            }

        },
        {
            text: '😺GitHub',
            url: 'https://github.com/AntarSidgi'

            }

    ]
})
};

masterhelpHandler($) {
$.runInlineMenu({
    layout: 3,
    method: 'sendMessage', //here you must pass the method name
    params: ['*Use The Commands As Is*', {
        parse_mode: 'Markdown'
    }],
    menu: [
        {
            text: '🔌Stats Help', //text of the button
            callback: (callbackQuery) => {
                $.sendMessage('_BitCoin Mining Statistics_\n\nThis section relates to the BitCoin Mining network. Halving is a phenomnon where the reward per block will be halved from 25 BitCoins to 12.5 Bitcoins.\n\n/halving : *Returns number of blocks remaining to the "halving".*\n/blocktime : *Returns estimated time taken to mine a block.*\n/blocksmined : *Returns the number of blocks mined today.*\n/hashrate : *Returns estimated BTC network hash rate in GH/s.*\n/difficulty : *Returns the current BitCoin difficulty target.*', {
                    parse_mode: 'Markdown'
                })
                tg.api.answerCallbackQuery(callbackQuery.id, {
                    text: '🔌Stats Help',
                    show_alert: false
                })
            }
                                     },
        {
            text: '💰Markets Help',
            callback: (callbackQuery) => {
                $.sendMessage('_Market Prices In Realtime_\n\n/btcusd : *Returns the current BitCoin market price in US Dollars.*\n/btcgbp : *Returns the current BitCoin market price in Sterling Pounds.*\n/btcrub : *Returns the current BitCoin market price in Russian Roubles.*\n/btceur : *Returns the current BitCoin market price in Euros.*\n/btccny : *Returns the current BitCoin market price in Chinese Yuan.*\n/ltcusd : *Returns the current LiteCoin market price in US Dollars.*\n/ethusd : *Returns the current Ethereum market price in US Dollars.*', {
                    parse_mode: 'Markdown'
                })
                tg.api.answerCallbackQuery(callbackQuery.id, {
                    text: '💰Markets Help',
                    show_alert: false
                })
            }
                                    },
        {
            text: '📈Charts Help',
            callback: (callbackQuery) => {
                $.sendMessage('_Charts_\n\nThe bot fetches charts in real-time every single time.The charts exhibit a line which is the BitCoin market price and Red/Green bars which indicate a +/- in the net volume traded on BitFinex, where volume is the amount of amount of bitcoin traded in either selling of it or buying.\n\n/chartdaily : *Returns The Daily Trading Chart.*\n/chartweekly : *Returns The Weekly Trading Chart.*\n/chartmonthly : *Returns The Monthly Trading Chart.*\n/chartquarterly : *Returns The Quarterly Trading Chart.*\n/chartyearly : *Returns The Yearly Trading Chart.*\n/chartalltime : *Returns The All-Time Trading Chart.*', {
                    parse_mode: 'Markdown'
                })
                tg.api.answerCallbackQuery(callbackQuery.id, {
                    text: '📈Charts Help',
                    show_alert: false
                })
            }
                                    }
                                  ]
})
tg.api.answerCallbackQuery(callbackQuery.id, {
    text: '🔰Showing Help',
    show_alert: false
})
};


get routes() {
return {
    '/start': 'startHandler',
    '/help': 'masterhelpHandler'


}
}
}

module.exports = bot;
