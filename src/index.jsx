import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';

import * as reducers from './store/reducers';

//redux-form
import { reducer as formReducer } from 'redux-form'
reducers.form = formReducer;

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));


ReactDOM.render(
    (<Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/(:cadastro)" component={App} />
        </Router>
    </Provider>),
    document.getElementById('app')
);
