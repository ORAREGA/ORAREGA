import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './Featuers/Navbar.js';
import aboutReducer from './Featuers/Aboutus.js';
import blogReducer from './Featuers/BlogSlice.js';
import jobReducer from './Featuers/jobSlice';
import supportReducer from './Featuers/supportSlice';
import bookServiceReducer from "./Featuers/bookServiceSlice";
import contactReducer from './Featuers/contactSlice';
import amcReducer from "./Featuers/amcSlice";
export const store = configureStore({  
  reducer: {
    navbar: navbarReducer,
    about: aboutReducer,
    blogs: blogReducer, 
    jobs: jobReducer,
    support: supportReducer, 
    bookService: bookServiceReducer,
    contact: contactReducer,
    amc: amcReducer,
    
  },
});
