import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { message } from 'antd';
import { TOASTER_MSG } from "../utils/constants";
import { BASE_URL, API_KEY } from "../utils/constants";
import { TIME_SERIES } from "../utils/endpoints";

// Slice
const slice = createSlice({
  name: 'timeSeries',
  initialState: {
    timeSeries: []
  },
  reducers: {
    setTimeSeries: (state, action) => {
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
    message.loading(TOASTER_MSG.progress, 0);
    const res = await axios.get(`${BASE_URL}${TIME_SERIES}`, {
      params: {
        token: API_KEY,
        symbol,
        resolution,
        from,
        to
      },
    });
    let financialItem;
    message.destroy();

    if(res.data.s === 'no_data'){
      financialItem = {};
      message.info(TOASTER_MSG.noData,1);
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
    message.info(TOASTER_MSG.success,1);
    return dispatch(setTimeSeries(financialItem));
  } catch (e) {
    message.info(e.message,1);
    return console.error(e.message);
  }
}