import { FILTER_SERVICE } from './actionTypes'
const initialState = { filter: '' };

export default function serviceFilterReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_SERVICE:
            const { value } = action.payload;
            //  console.log("____");
            //  console.log(value);
            return {...state, filter: value };
        default:
            return state;
    }
}