import { legacy_createStore, combineReducers } from 'redux';
import serviceListReducer from '../redux/serviceListReducer';
import serviceAddReducer from '../redux/serviceAddReducer';

const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
});

const store = legacy_createStore(reducer);
export default store;