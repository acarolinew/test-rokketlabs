import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchPosts, fetchPostsByTag } from '../actions/posts';

const Header = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  
  const handleSearchInputChange = (event) => {
    setSearch(event.currentTarget.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (!search) dispatch(fetchPosts())
    else dispatch(fetchPostsByTag(search))
    
  };

  return (
    <div className="header">
      <span>Rokket DummyPosts</span>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search by tag..."
          value={search}
          onChange={handleSearchInputChange}
          className="search-input"
        />
      </form>
    </div>
  );
};

export default Header;