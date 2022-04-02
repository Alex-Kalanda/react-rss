import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.content}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
