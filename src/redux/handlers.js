export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
export const handleAllContactSuccess = (state, { payload }) => {
  state.contacts = payload;
  state.isLoading = false;
  state.error = '';
};
export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error;
};

export const handleAddContact = (state, { payload }) => {
  state.contacts.push(payload);
  state.isLoading = false;
  state.error = '';
};

export const handleDeleteContact = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
  state.isLoading = false;
  state.error = '';
};
