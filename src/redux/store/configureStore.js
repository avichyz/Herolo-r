import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'

const loggerMiddleware = createLogger();
const reduxRouterMiddleware = routerMiddleware(createHashHistory());
const middleware = [thunkMiddleware, promiseMiddleware, loggerMiddleware, reduxRouterMiddleware];

const configureStore = (preloadedState) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  )
);

export default configureStore
