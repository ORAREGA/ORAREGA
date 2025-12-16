// src/Redux/Featuers/contactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    customerName: '',
    organizationName: '',
    email: '',
    contactNumber: '',
    services: [],
    message: '',
  },
  formErrors: {},
  showPopup: false,
  selectedState: '',
  selectedBranch: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setFormErrors(state, action) {
      state.formErrors = action.payload;
    },
    setShowPopup(state, action) {
      state.showPopup = action.payload;
    },
    setSelectedState(state, action) {
      state.selectedState = action.payload;
      // Clear selected branch when state changes
      state.selectedBranch = '';
    },
    setSelectedBranch(state, action) {
      state.selectedBranch = action.payload;
    },
    resetForm(state) {
      state.formData = initialState.formData;
      state.formErrors = {};
      state.showPopup = false;
      state.selectedState = '';
      state.selectedBranch = '';
    },
  },
});

export const {
  setFormData,
  setFormErrors,
  setShowPopup,
  setSelectedState,
  setSelectedBranch,
  resetForm,
} = contactSlice.actions;

export default contactSlice.reducer;
