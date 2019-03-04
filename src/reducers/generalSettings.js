import { map, set, value } from 'redux-data-structures';
import generalDefaults from '../constants/generalDefaults'

const generalSettings = map({
    initialState: generalDefaults,
    addActionTypes: ['ADD_GENERAL_SETTING'],
    removeActionTypes: ['REMOVE_GENERAL_SETTING'],
    changeActionTypes: ["EDIT_GENERAL_SETTING"]
});

export default generalSettings;
