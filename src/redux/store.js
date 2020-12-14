import {
  filterReducer,
  loadingReducer,
  contactsReducer,
  errorReducer,
} from './phonebook/phonebookReducer.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    loading: loadingReducer,
    message: errorReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
