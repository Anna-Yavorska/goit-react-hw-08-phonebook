import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactsList/ContactList";
import { Filter } from "components/Filter/Filter";
import { PhoneFormWrapper } from "./ContactsPage.styled";

export default function ContactPage() {
  return (
    <PhoneFormWrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </PhoneFormWrapper>
  );
}
