import {
    ADD_STRATEGY,
    DELETE_STRATEGY,
    EDIT_STRATEGY,
    ADD_CONDITION,
    DELETE_CONDITION,
    EDIT_CONDITION
} from '../constants/actionTypes'

const initialState = {
    buy: [],
    sell: [],
    dca: []
};

const getDefaultStrategy = strategyType => {
    if (strategyType === 'dca'){
        return {conditions: [], dca_strategies: {}}
    }
    else if (strategyType === 'buy'){
        return {conditions: []}
    }
    else {
        return {conditions: []}
    }
}

/*
* strategies is a dict of 3 lists, one for each "strategy type" (buy, sell, or dca)
* each strategy is an object with 3-4 text fields and a list of condition objects
* condition objects are something like:
* {
*   left: indicator,
*   op: operation,
*   right: indicator/number/price
* }
* */
export default function strategies(state = initialState, action) {
    let targetStrategies = state[action.strategyType] !== undefined ? state[action.strategyType].slice(): state[action.strategyType];
    switch (action.type) {
        case ADD_STRATEGY:
            targetStrategies = [...targetStrategies, getDefaultStrategy(action.strategyType)];
            return Object.assign({}, state, {[action.strategyType]: targetStrategies});

        case DELETE_STRATEGY:
            targetStrategies = targetStrategies.splice(action.id,1)
            return Object.assign({}, state, {[action.strategyType]: targetStrategies});

        case EDIT_STRATEGY:
            targetStrategies[action.id][action.field] = action.value;
            return Object.assign({}, state, {[action.strategyType]: targetStrategies});

        case ADD_CONDITION:
            targetStrategies[action.id].conditions =
                [
                    ...targetStrategies[action.id].conditions,
                    action.value
                ];
            return Object.assign({}, state, {[action.strategyType]: targetStrategies});

        case EDIT_CONDITION:
            targetStrategies[action.id].conditions[action.conditionID] = action.value;
            return Object.assign({}, state, {[action.strategyType]: targetStrategies});

        case DELETE_CONDITION:
            delete targetStrategies[action.id].conditions[action.conditionID]
            return Object.assign({}, state, {[action.strategyType]: targetStrategies});

        default:
            return state
    }
}
