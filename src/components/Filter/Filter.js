import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper } from './Filter.styled';
import { changeFilter } from 'components/redux/filterSlice';
import { selectFilters } from 'components/redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilters);
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
