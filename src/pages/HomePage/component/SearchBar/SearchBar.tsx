import React from 'react';
import styles from './SearchBar.module.css';
import { SearchBarProps } from './SearchBar.props';

class SearchBar extends React.Component<SearchBarProps, Record<string, never>> {
  render() {
    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor="SearchInput" />
        <input className={styles.input} type="text" />
      </div>
    );
  }
}

export default SearchBar;
