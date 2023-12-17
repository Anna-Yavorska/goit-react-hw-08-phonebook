import { Button, Wrapper } from "./AuthNav.styled";

export const AuthNav = () => {
    return (
      <Wrapper>
        <Button to="/register">Register</Button>
        <Button to="/login">Log in</Button>
      </Wrapper>
    );
}