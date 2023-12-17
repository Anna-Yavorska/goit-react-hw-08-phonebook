import { useAuth } from 'hooks/useAuth';
import { Link, MainNav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <MainNav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </MainNav>
  );
};
