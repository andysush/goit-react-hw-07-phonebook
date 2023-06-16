import { Item, DeleteBtn } from './ConatactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, selectFilter } from 'redux/selectors';
import { deleteContactThunk } from 'redux/thunks';

export const ContactItem = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const onClickHandler = id => dispatch(deleteContactThunk(id));

  return (
    <>
      {filterContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <DeleteBtn
            type="button"
            onClick={() => {
              onClickHandler(id);
            }}
          >
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </>
  );
};
