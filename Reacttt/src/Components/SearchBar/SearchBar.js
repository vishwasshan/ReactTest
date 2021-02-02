import React, { useState } from "react";


import "./SearchBar.scss";


const SearchBar = ({getQuery}) => {
  const [term, setTerm] = useState("");

  const onChange = (q) => {
    setTerm(q)
    getQuery(q)
  };


  return (
    <div className="searchbar">
      <form>
        <div className="form-group ">
          <input
            className="searchbar__input form-control"
            type="text"
            value={term}
            onChange={(e)=>onChange(e.target.value)}
            autoFocus
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
