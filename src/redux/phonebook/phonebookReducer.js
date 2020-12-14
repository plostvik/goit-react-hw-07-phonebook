import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  filterChange,
  setMessageToNull,
} from './phonebookActions.js';
import { createReducer } from '@reduxjs/toolkit';

// const getStorageContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const initialState = {
  contacts: [],
  filter: '',
};

const addContactFn = (state, action) => [...state, action.payload];
const removeContactFn = (state, action) =>
  state.filter(item => item.id !== action.payload);

const contactsReducer = createReducer(initialState.contacts, {
  [getContactsSuccess]: (state, action) => action.payload,
  [addContactSuccess]: addContactFn,
  [removeContactSuccess]: removeContactFn,
});

const loadingReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const errorReducer = createReducer(false, {
  [addContactRequest]: () => null,
  [getContactsRequest]: () => null,
  [removeContactRequest]: () => null,
  [setMessageToNull]: () => null,
  [addContactError]: (state, action) => action.payload,
  [getContactsError]: (state, action) => action.payload,
  [removeContactError]: (state, action) => action.payload,
});

const filterReducer = createReducer(initialState.filter, {
  [filterChange]: (state, action) => action.payload,
});
export { contactsReducer, filterReducer, loadingReducer, errorReducer };
