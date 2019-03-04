import { map, set, value } from 'redux-data-structures';

const pairSettings = map({
    addActionTypes: ['ADD_PAIR_SETTING'],
    removeActionTypes: ['REMOVE_PAIR_SETTING'],
    changeActionTypes: ["EDIT_PAIR_SETTING"]
});
export default pairSettings
