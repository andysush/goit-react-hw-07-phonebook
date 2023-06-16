import { useDispatch } from 'react-redux';
import { Label, Input } from './SearchForm.styled';
import { filter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = ev => {
    dispatch(filter(ev.currentTarget.value));
  };
  return (
    <Label>
      Find
      <Input
        type="text"
        placeholder="Find contacts..."
        onChange={handleFilter}
      />
    </Label>
  );
};
