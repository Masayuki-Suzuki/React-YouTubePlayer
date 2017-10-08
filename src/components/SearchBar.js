import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="col-md-12 col-sm-12 search-bar">
      <input onChange={ (e) => { props.onInputText(e.target.value) } } />
    </div>
  );
}

export default SearchBar;