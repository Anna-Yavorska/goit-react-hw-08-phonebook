import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { GlobalStyle } from "./GlobalStyle";

export const Layout = () => {
  return (
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
          <AppBar />
          <Suspense fallback={null}>
              <Outlet/>
      </Suspense>
      <GlobalStyle />
          <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};
