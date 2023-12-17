import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 500;
`;

export const Button = styled.button`
  padding: 2px 4px;
  background-color: blue;
  color: white;
  border: 2px solid black;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: orange;
  }
`;