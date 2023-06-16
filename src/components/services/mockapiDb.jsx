import axios from 'axios';

axios.defaults.baseURL = 'https://648889e60e2469c038fdf3cd.mockapi.io';

export async function getAllContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', {
    createdAt: new Date().toISOString(),
    name: contact.name,
    number: contact.number,
  });
  return data;
}
export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
