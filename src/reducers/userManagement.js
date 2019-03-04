
import { map } from 'redux-data-structures';
import generalDefaults from '../constants/generalDefaults'

const users = map({
    addActionTypes: ['ADD_USER'],
    removeActionTypes: ['REMOVE_USER'],
    changeActionTypes: ["EDIT_USER"]
});

export default users
