import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import stock from './stock';
import timeSeries from './timeSeries';
import selectedParams from './selectedParams';

const reducer = combineReducers({
    stock,
    timeSeries,
    selectedParams    
})
const store = configureStore({
  reducer,
})
export default store;