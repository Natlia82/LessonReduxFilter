import { nanoid } from 'nanoid';
import { CHANGE_SERVICE_FIELD, EDIT_SERVICE_FIELD, CANCEL_SERVICE_FIELD } from './actionTypes'
const initialState = { name: '', price: '', id: 0 };

export default function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const { name, value } = action.payload;
            return {...state, [name]: value };
        case EDIT_SERVICE_FIELD:
            const { id, nazv, price } = action.payload;
            return { name: nazv, price: price, id: id };
        case CANCEL_SERVICE_FIELD:
            return { name: '', price: '', id: 0 };
        default:
            return state;
    }
}