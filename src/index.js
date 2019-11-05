import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk'; 
import { Provider } from 'react-redux'; 

import { reduxFirestore, getFirestore } from 'redux-firestore'; 
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'; 
import firebaseConfig from './firebaseConfig'; 

import AddTodoReducer from './containers/reducers/addTodoReducer'; 
import ArticleReducer from './containers/reducers/articleReducer'; 
import LogginReducer from './containers/reducers/loggInReducer'; 



const rootReducers = combineReducers({
    AddTodoReducer: AddTodoReducer,
    ArticleReducer: ArticleReducer, 
    LogginReducer: LogginReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
        rootReducers, 
        composeEnhancer(
            applyMiddleware(thunk.withExtraArgument({ getFirebase,getFirestore })), 
            // reduxFirestore(firebaseConfig), 
            // reactReduxFirebase(firebaseConfig)       
        )
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
