import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './thunks';
import {
  handleAddContact,
  handleDeleteContact,
  handleRejected,
  handlePending,
  handleAllContactSuccess,
} from './handlers';

const initialState = {
  contacts: [],
  isLoading: false,
  error: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleAllContactSuccess)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContact)
      .addCase(deleteContactThunk.rejected, handleRejected);
    // .addMatcher(action => {
    //   action.type.endsWith('/pending');
    // }, handlePending);
    // .addMatcher(action => {
    //   action.type.endsWith('/rejected');
    // }, handleError);
  },
});

export const contactReducer = contactSlice.reducer;
