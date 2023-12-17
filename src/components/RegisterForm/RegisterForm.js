import { ErrorMessage, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';

const quizSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too Short!').trim().required('Required'),
  email: Yup.string().min(3, 'Too Short!').trim().required('Required'),
  password: Yup.string().min(3, 'Too Short!').trim().required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
        dispatch(
          register({
            name: values.username,
            email: values.email,
            password: values.pa,
          })
        );
        actions.resetForm();
      }}
      
    >
      <Form>
        <label htmlFor="username">Username</label>
        <Field id="username" name="Username" />
        <ErrorMessage name="username" component="span" />

        <label htmlFor="email">Email</label>
        <Field id="email" name="email" />
        <ErrorMessage name="email" component="span" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" />
        <ErrorMessage name="password" component="span" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
