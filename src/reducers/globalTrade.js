import {map} from "redux-data-structures";

const globalTrade = map({
    addActionTypes: ['ADD_GLOBAL_TRADE_SETTING'],
    removeActionTypes: ['REMOVE_GLOBAL_TRADE_SETTING'],
    changeActionTypes: ["EDIT_GLOBAL_TRADE_SETTING"]
});

export default globalTrade
