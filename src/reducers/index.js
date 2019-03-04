import { combineReducers } from 'redux'
import strategies from './strategies'
import generalSettings from './generalSettings'
import globalTrade from './globalTrade'
import pairSpecific from './pairSpecific'
import userManagement from './userManagement'

console.log(pairSpecific)

export default combineReducers({
    strategies,
    generalSettings,
    globalTrade,
    pairSpecific,
    userManagement
})
