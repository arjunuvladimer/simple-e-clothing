import {createStore, applyMiddleware} from 'redux'

import logger from 'redux-logger'

import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist'


// Middlewares that the store is expecting from redux is generally an array
const middlewares = []

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(rootReducer,applyMiddleware(...middlewares))

const persistor = persistStore(store)

export {store, persistor};