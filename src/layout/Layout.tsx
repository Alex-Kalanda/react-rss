import Header from './Header/Header';
import Footer from './Footer/Footer';
import React from 'react';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
