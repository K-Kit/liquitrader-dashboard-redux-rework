const generalSettings =   {
    byId: {
        exchange: {
            id: 'exchange',
            text: 'binance'
        },
        paper_trading: {
            id: 'paper_trading',
            text: true
        },
        starting_balance: {
            id: 'starting_balance',
            text: 3
        },
        market: {
            id: 'market',
            text: 'ETH'
        },
        timezone: {
            id: 'timezone',
            text: 'US/Pacific'
        },
        start_delay: {
            id: 'start_delay',
            text: 0
        },
        host: {
            id: 'host',
            text: 'localhost'
        },
        port: {
            id: 'port',
            text: '7007'
        },
        use_ssl: {
            id: 'use_ssl',
            text: false
        },
        sell_only_mode: {
            id: 'sell_only_mode',
            text: false
        },
        trading_enabled: {
            id: 'trading_enabled',
            text: true
        }
    },
    allIds: [
        'exchange',
        'paper_trading',
        'starting_balance',
        'market',
        'timezone',
        'start_delay',
        'host',
        'port',
        'use_ssl',
        'sell_only_mode',
        'trading_enabled'
    ]
}
export default generalSettings
