import {loadLS} from '../../utils/LocalStorage'

const defaultState = {
    clients: loadLS('clients')
}

export const ClientReducer = (state = defaultState, action) => {
    switch (action.type) {
        case  'ADD_ORDER':  {
            return {...state, clients: [...state.clients, action.payload]}  
        }
        default: return state
    }
}