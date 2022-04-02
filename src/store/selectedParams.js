import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'selectedParams',
  initialState: {
    selectedSymbols: [],
    dateSelected:[],
    priceType:''
  },
  reducers: {
    setSelectedSymbols: (state, action) => {
        state.selectedSymbols = action.payload;
    },
    setDateSelected: (state, action) => {
      state.dateSelected = action.payload;
    },
    setPriceType: (state, action) => {
      state.priceType = action.payload;
    }
  },
});
export default slice.reducer
// Actions
const { setSelectedSymbols, setDateSelected, setPriceType} = slice.actions;
export const updateSelectedSymbols = ({ selectedSymbols }) => async dispatch => {
  dispatch(setSelectedSymbols(selectedSymbols));
}
export const updateDateSelected = ({ dateSelected }) => async dispatch => {
  dispatch(setDateSelected(dateSelected));
}
export const updatePriceType = ({ priceType }) => async dispatch => {
  dispatch(setPriceType(priceType));
}
