import React from "react";

const Search = (props) => {
  const { Search, onInputChange, onSearchClick } = props;
  return (
    <div>
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="search your favourite items..."
          value={Search}
          onChange={onInputChange}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />

        <button className="btn btn-dark" onClick={onSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
