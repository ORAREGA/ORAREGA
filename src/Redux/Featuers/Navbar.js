 import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dropdownOpen: null,
  mobileMenuOpen: false,
  scrolling: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    setDropdownOpen: (state, action) => {
      state.dropdownOpen = action.payload;
    },
    closeDropdown: (state) => {
      state.dropdownOpen = null;
    },
    setScrolling: (state, action) => {
      state.scrolling = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  setDropdownOpen,
  closeDropdown,
  setScrolling,
} = navbarSlice.actions;

export default navbarSlice.reducer;
