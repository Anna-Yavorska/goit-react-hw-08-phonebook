import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { GlobalStyle } from '../GlobalStyle';
import { Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper style={{}}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <Toaster position="bottom-right" reverseOrder={false} />
    </Wrapper>
  );
};
