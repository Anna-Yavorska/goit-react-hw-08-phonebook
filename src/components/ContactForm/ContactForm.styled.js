import {
  Field as ContactInfo,
  Form as FormWrapper,
  ErrorMessage as Error,
} from 'formik';
import styled from 'styled-components';

export const Form = styled(FormWrapper)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 2px solid blue;
  max-width: 320px;
  padding: 12px;
  background-color: cornsilk;
`;

export const Field = styled(ContactInfo)`
  max-width: 100%;
  font-size: 20px;
  font-weight: 500;
`;

export const ErrorMessage = styled(Error)`
  color: red;
  font-size: 12px;
`;

export const Button = styled.button`
  padding: 2px 4px;
  background-color: blue;
  color: white;
  border: 2px solid black;
  border-radius: 4px;
  text-decoration: none;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
`;
