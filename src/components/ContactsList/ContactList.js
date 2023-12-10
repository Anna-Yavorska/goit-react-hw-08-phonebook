import { useDispatch, useSelector } from 'react-redux';
import { Item, Button, IconWrapper } from './ContactList.styled';
import { IoMdContact } from 'react-icons/io';
import { deleteContact } from 'components/redux/contactsSlice';
import { selectContacts, selectFilters } from 'components/redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  
  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  const dispatch = useDispatch();
  return (
    <ul>
      {filteredContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            <IconWrapper>
              <IoMdContact size="24" />
            </IconWrapper>
            <p>
              {name}: {number}
            </p>
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </Item>
        );
      })}
    </ul>
  );
};
