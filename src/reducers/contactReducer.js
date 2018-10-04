import {GET_ALL,GET_ONE,DELETE,ADD,EDIT} from '../actions/types'

const initialState = {
    contacts: [{name:'Loading...', id: '98'}], // []
    contact: {}
}
export default function(state = initialState, action){
    switch (action.type) {
        case GET_ALL : 
        return {
            ...state,
            contacts: action.payload
        }
        case GET_ONE:
        return {
            ...state,
            contact: action.payload
        };
        case DELETE:
        return {
            ...state,
            contacts: state.contacts.filter(
            contact => contact.id !== action.payload
            )
        }
        case ADD:
        return {
            ...state,
            contacts: [action.payload, ...state.contacts]
        }
        case EDIT:
        return {
            ...state,
            contacts: state.contacts.map(
            contact =>
                contact.id === action.payload.id
                ? (contact = action.payload)
                : contact
            )
        }
        default: return state
    }
}