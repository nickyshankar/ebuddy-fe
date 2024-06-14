import { combineReducers } from 'redux';
import authReducer from './authSlice';
import apiReducer from './apiSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    api: apiReducer,
},);

export default rootReducer;
