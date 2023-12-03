import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper } from './Filter.styled';
import { changeFilter } from 'components/redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </FilterWrapper>
  );
};
