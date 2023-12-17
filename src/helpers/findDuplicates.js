import toast from 'react-hot-toast';

export const findDuplicates = (contacts, newContact) => {
  const isDuplicateName = contacts.some(
    contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  );

  const isDuplicateNumber = contacts.some(
    contact => contact.number === newContact.number
  );

  if (isDuplicateName) {
    toast.error(`'${newContact.name}' is already in contacts.`);
    return newContact;
  }

  if (isDuplicateNumber) {
    toast.error(
      `Number '${newContact.number}' is already saved under the name '${newContact.name}'`
    );
    return newContact;
  }
};
