import React from 'react';

import './topbar.scss';

const styles = {
  container: 'topbar__container',
  searchBar: 'topbar__search-bar',
}

type Props = {
  onSearch: (event: React. ChangeEvent<HTMLInputElement>) => void;
  onAddClick: () => void ;
}

const TopBar = ({onSearch, onAddClick} : Props) => {
  return (
    <div className={styles.container}>
      <div>Home > Dashboard</div>
      <div>
        <input
          type="search"
          name="search-form"
          id="search-form"
          className={styles.searchBar}
          onChange={onSearch}
          placeholder="Search Anything"
        />
        <button onClick={onAddClick}>Add Widget +</button>
      </div>
    </div>
  );
};

export default TopBar;
