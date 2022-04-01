import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { message } from 'antd';


export const FINNHUB_API_URL = "https://finnhub.io/api/v1/";
export const API_KEY = 'c935612ad3ic89vi9bi0';

// Slice
const slice = createSlice({
  name: 'timeSeries',
  initialState: {
    timeSeries: []
  },
  reducers: {
    setTimeSeries: (state, action) => {
      console.log("Object.keys(action.payload).length", Object.keys(action.payload).length)
      if(Object.keys(action.payload).length !== 0){
        const newPayload = [...state.timeSeries];
        newPayload.push(action.payload)
        state.timeSeries = newPayload;
      }
    }
  },
});
export default slice.reducer
// Actions
const { setTimeSeries } = slice.actions
export const getTimeSeries = ({ symbol = 'AAPL', resolution = 'D', 
from = parseInt((new Date().getTime() / 1000).toFixed(0)), to = parseInt((new Date().getTime() / 1000).toFixed(0))
}) => async dispatch => {
  try {
    message.loading('Action in progress..', 1);
    const res = await axios.get(`${FINNHUB_API_URL}stock/candle`, {
      params: {
        token: API_KEY,
        symbol,
        resolution,
        from,
        to
      },
    });
    let financialItem;

    if(res.data.s === 'no_data'){
      financialItem = {};
      message.info("No Data",1);
      return dispatch(setTimeSeries(financialItem));
    }
    financialItem = {
      symbol: symbol,
      financialChartXValues: res.data.t,
      financialChartCloseValues: res.data.c,
      financialChartOpenValues: res.data.o,
      financialChartHighValues: res.data.h,
      financialChartLowValues: res.data.l,
    };
    message.info('Successfully Data Retrived',1);
    return dispatch(setTimeSeries(financialItem));
  } catch (e) {
    message.info(e.message,1);
    return console.error(e.message);
  }
}