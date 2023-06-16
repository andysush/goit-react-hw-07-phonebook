import { useState } from 'react';
import { FormBox, Label, Input, AddBtn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { selectContact } from 'redux/selectors';
import { addContactThunk } from 'redux/thunks';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error(`No options for ${name}`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!name.trim() || !number.trim()) {
      alert('Please input correct name or number');
      resetForm();
      return;
    }
    const isExistName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isExistNumber = contacts.find(contact => contact.number === number);
    if (isExistName) {
      return alert(`${name} is already in contacts`);
    }
    if (isExistNumber) {
      return alert(`${number} is already in contacts`);
    }
    const contact = {
      id: nanoid(6),
      name,
      number,
    };

    dispatch(addContactThunk(contact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormBox onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Phone
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <AddBtn type="submit">Add Contact</AddBtn>
    </FormBox>
  );
}
