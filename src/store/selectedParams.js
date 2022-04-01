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
      console.log("action.payload", action.payload);
      const newPayload = [...state.selectedSymbols];
        newPayload.push(action.payload)
        state.selectedSymbols = newPayload;
        console.log("state.selectedSymbols", state.selectedSymbols);

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
  console.log("selectedSymbols", selectedSymbols);
  dispatch(setSelectedSymbols(selectedSymbols));
}
export const updateDateSelected = ({ dateSelected }) => async dispatch => {
  dispatch(setDateSelected(dateSelected));
}
export const updatePriceType = ({ priceType }) => async dispatch => {
  dispatch(setPriceType(priceType));
}
