import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import {
  ErrorMessage,
  Field,
  Form,
  Button,
} from './RegisterForm.styled';

const quizSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').trim().required('Required'),
  email: Yup.string().min(3, 'Too Short!').trim().required('Required'),
  password: Yup.string().min(3, 'Too Short!').trim().required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
        dispatch(
          register({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        );
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Username</label>
        <Field id="name" name="name" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor="email">Email</label>
        <Field id="email" name="email" />
        <ErrorMessage name="email" component="span" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" />
        <ErrorMessage name="password" component="span" />

        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
};
