import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: {
    name: '',
    mobile: '',
    email: '',
    organization: '',
    altMobile: '',
    gst: ''
  },
  address: {
    address: '',
    city: '',
    state: '',
    landmark: '',
    pincode: ''
  },
  product: {
    productType: '',
    productMake: '',
    productModel: '',
    productDescription: '',
    productNumber: '',
    productSerialNumber: ''
  },
};

const bookServiceSlice = createSlice({
  name: "bookService",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { section, field, value } = action.payload;
      state[section][field] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = bookServiceSlice.actions;
export default bookServiceSlice.reducer;
