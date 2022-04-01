import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { message } from 'antd';

export const FINNHUB_API_URL = "https://finnhub.io/api/v1/";
export const API_KEY = 'c935612ad3ic89vi9bi0';

// Slice
const slice = createSlice({
  name: 'stock',
  initialState: {
    stock: []
  },
  reducers: {
    setStockList: (state, action) => {
      state.stock = action.payload;
    }
  },
});
export default slice.reducer
// Actions
const { setStockList } = slice.actions;
message.loading('Action in progress..', 0);
export const getStockList = ({ symbol }) => async dispatch => {
  try {
    const res = await axios.get(`${FINNHUB_API_URL}/stock/symbol?exchange=US`, {
      params: {
        token: API_KEY,
        symbol,
      },
    });
    message.destroy();
    return dispatch(setStockList(res.data))
  }  catch (e) {
    message.info(e.message);
    message.destroy();
    return console.error(e.message);
  }
}
