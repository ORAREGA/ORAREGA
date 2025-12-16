import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showEnquiryPopup: false,
  selectedServices: [],
};

const amcSlice = createSlice({
  name: 'amc',
  initialState,
  reducers: {
    openPopup: (state) => {
      state.showEnquiryPopup = true;
    },
    closePopup: (state) => {
      state.showEnquiryPopup = false;
    },
    toggleService: (state, action) => {
      const service = action.payload;
      if (state.selectedServices.includes(service)) {
        state.selectedServices = state.selectedServices.filter((s) => s !== service);
      } else {
        state.selectedServices.push(service);
      }
    },
    resetServices: (state) => {
      state.selectedServices = [];
    },
  },
});

export const { openPopup, closePopup, toggleService, resetServices } = amcSlice.actions;
export default amcSlice.reducer;