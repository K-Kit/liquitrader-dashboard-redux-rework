import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import * as actionTypes from './constants/actionTypes'


console.log(rootReducer)
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({type:actionTypes.ADD_STRATEGY, strategyType: "buy" })
store.dispatch({type:actionTypes.ADD_STRATEGY, strategyType: "buy" })
store.dispatch({type:actionTypes.EDIT_STRATEGY, strategyType: "buy", id: 1, field: 'buyValue', value: 10 })
store.dispatch({type:actionTypes.DELETE_STRATEGY, strategyType: "buy", id: 0 })


ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
