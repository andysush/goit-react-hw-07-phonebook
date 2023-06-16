import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getAllContacts,
} from 'components/services/mockapiDb';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await getAllContacts();
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    return await addContact(contact);
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContact(id);
  }
);
