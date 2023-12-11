import { useDispatch, useSelector } from 'react-redux';
import { Item, Button, IconWrapper } from './ContactList.styled';
import { IoMdContact } from 'react-icons/io';
import { selectContacts, selectError, selectFilters, selectIsLoading } from 'components/redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'helpers/operations';
import toast from 'react-hot-toast';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  const filteredContacts = filter
    ? contacts.filter(contact =>
 contact.text.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <>
      {isLoading && !error && <div>Request in progress...</div>}
      {error && toast.error("Something went wrong! Try to reload this page")}
      <ul>
        {filteredContacts.map(contact => {
          const { id, text } = contact;
          const { name, number } = text;
          
          return (
            <Item key={id}>
              <IconWrapper>
                <IoMdContact size="24" />
              </IconWrapper>
              <p>
                {name}: {number}
              </p>
              <Button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </Item>
          );
        })}
      </ul>
    </>
  );
};
