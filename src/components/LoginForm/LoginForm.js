import { ErrorMessage, Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';

const quizSchema = Yup.object().shape({
  email: Yup.string().min(3, 'Too Short!').trim().required('Required'),
  password: Yup.string().min(3, 'Too Short!').trim().required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={quizSchema}
      onSubmit={(values, actions) => {
        dispatch(
          register({
            email: values.email,
            password: values.pa,
          })
        );
        actions.resetForm();
      }}
      
    >
      <Form>

        <label htmlFor="email">Email</label>
        <Field id="email" name="email" />
        <ErrorMessage name="email" component="span" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" />
        <ErrorMessage name="password" component="span" />

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};
