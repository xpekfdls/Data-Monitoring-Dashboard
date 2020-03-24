import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Dashboard/Home';
import * as serviceWorker from './serviceWorker';
import combineReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combineReducers, devTools);
ReactDOM.render(
	<Provider store={store}>
	<Home />
	</Provider>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

