import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import * as serviceWorker from './serviceWorker';

const initialState = [];

const preloadedState = window.__PRELOADED_STATE__ || initialState;

const store = configureStore(preloadedState);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
