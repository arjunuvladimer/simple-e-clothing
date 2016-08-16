import {createStore, applyMiddleware} from 'redux'

import logger from 'redux-logger'

import rootReducer from './root-reducer'

// Middlewares that the store is expecting from redux is generally an array
const middlewares = [logger]

const store = createStore(rootReducer,applyMiddleware(...middlewares))

export default store;