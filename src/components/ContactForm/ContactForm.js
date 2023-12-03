import { Formik } from 'formik';
import { Form, Field, ErrorMessage, Button } from './ContactForm.styled';
import * as Yup from 'yup';
import { addContact } from 'components/redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { findDuplicates } from 'helpers/findDuplicates';

const phonePattern = /^\d{3}-\d{2}-\d{2}$/;
const quizSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(phonePattern, 'Enter the phone number in the format 222-22-22')
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
        if (!findDuplicates(contacts, values)) {
          dispatch(addContact(values));
        }
        actions.resetForm();
      }}
      s
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" placeholder="Jane" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor="number">Number</label>
        <Field id="number" name="number" placeholder="222-22-22" />
        <ErrorMessage name="number" component="span" />

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
