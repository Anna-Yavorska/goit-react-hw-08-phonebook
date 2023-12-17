import { useDispatch, useSelector } from 'react-redux';
import { Item, Button, IconWrapper } from './ContactList.styled';
import { IoMdContact } from 'react-icons/io';
import {
  selectError,
  selectIsLoading,
  selectfilteredContacts,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import toast from 'react-hot-toast';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectfilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <div>Request in progress...</div>}
      {error && toast.error('Something went wrong! Try to reload this page')}
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
