import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { message } from 'antd';
import { TOASTER_MSG } from "../utils/constants";
import { BASE_URL, API_KEY } from "../utils/constants";
import { SYMBOL_LIST } from "../utils/endpoints";


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
message.loading(TOASTER_MSG.progress, 0);
export const getStockList = ({ symbol }) => async dispatch => {
  try {
    const res = await axios.get(`${BASE_URL}${SYMBOL_LIST}`, {
      params: {
        token: API_KEY,
        symbol,
      },
    });
    message.destroy();
    message.info(TOASTER_MSG.success, 1);
    return dispatch(setStockList(res.data))
  }  catch (e) {
    message.destroy();
    message.info(e.message, 1);
    return console.error(e.message);
  }
}
