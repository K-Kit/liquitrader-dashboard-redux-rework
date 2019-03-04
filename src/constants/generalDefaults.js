const generalSettings =   {
    byId: {
        exchange: {
            id: 'exchange',
            value: 'binance'
        },
        paper_trading: {
            id: 'paper_trading',
            value: true
        },
        starting_balance: {
            id: 'starting_balance',
            value: 3
        },
        market: {
            id: 'market',
            value: 'ETH'
        },
        timezone: {
            id: 'timezone',
            value: 'US/Pacific'
        },
        start_delay: {
            id: 'start_delay',
            value: 0
        },
        host: {
            id: 'host',
            value: 'localhost'
        },
        port: {
            id: 'port',
            value: '7007'
        },
        use_ssl: {
            id: 'use_ssl',
            value: false
        },
        sell_only_mode: {
            id: 'sell_only_mode',
            value: false
        },
        trading_enabled: {
            id: 'trading_enabled',
            value: true
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
