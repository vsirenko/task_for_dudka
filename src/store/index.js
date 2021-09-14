import {createStore, combineReducers} from 'redux'
import {composeWithDevTools } from 'redux-devtools-extension'
import { ClientReducer } from './reducers/ClientReducer'

const rootReducer = combineReducers({
    ClientReducer
})

export const store = createStore(rootReducer, composeWithDevTools())