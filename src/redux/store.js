import { legacy_createStore, combineReducers } from 'redux';
import serviceListReducer from '../redux/serviceListReducer';
import serviceAddReducer from '../redux/serviceAddReducer';
import serviceFilterReducer from '../redux/serviseFilterReducer';


const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceAdd: serviceAddReducer,
    serviceFilter: serviceFilterReducer,
});

const store = legacy_createStore(reducer);
export default store;