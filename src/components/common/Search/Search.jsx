import React from "react";
import "./Search.scss";


const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="search for products,brands and more" />
      <img
        className="searchicon"
        src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
        alt="search logo"
      ></img>
    </div>
  );
};

export default Search;
