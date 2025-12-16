import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showEnquiryPopup: false,
  showWarrantyForm: false,
  selectedServices: [],
};

const supportSlice = createSlice({
  name: 'support',
  initialState,
  reducers: {
    openEnquiryPopup: (state, action) => {
      state.selectedServices = action.payload || [];
      state.showEnquiryPopup = true;
    },
    openWarrantyForm: (state) => {
      state.showWarrantyForm = true;
    },
    closeAllPopups: (state) => {
      state.showEnquiryPopup = false;
      state.showWarrantyForm = false;
      state.selectedServices = [];
    },
    toggleServiceSelection: (state, action) => {
      const title = action.payload;
      if (state.selectedServices.includes(title)) {
        state.selectedServices = state.selectedServices.filter(
          (s) => s !== title
        );
      } else {
        state.selectedServices.push(title);
      }
    },
  },
});

export const {
  openEnquiryPopup,
  openWarrantyForm,
  closeAllPopups,
  toggleServiceSelection,
} = supportSlice.actions;

export default supportSlice.reducer;
