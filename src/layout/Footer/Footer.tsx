import React from 'react';
import cn from 'classnames';
import styles from './Footer.module.css';

const Footer = ({ className }: { className: string }): JSX.Element => {
  return <div className={cn(className, styles.footer)}>footer</div>;
};

export default Footer;
