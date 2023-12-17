import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import * as Yup from 'yup';
import { Button, ErrorMessage, Field, Form } from './LoginForm.styled';

const quizSchema = Yup.object().shape({
  email: Yup.string().min(3, 'Too Short!').trim().required('Required'),
  password: Yup.string().min(8, 'Too Short!').trim().required('Required'),
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
          logIn({
            email: values.email,
            password: values.password,
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
        <Field id="password" name="password" type="password" />
        <ErrorMessage name="password" component="span" />

        <Button type="submit">Log in</Button>
      </Form>
    </Formik>
  );
};
