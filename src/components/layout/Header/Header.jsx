import React, { Component } from "react";
import { useState } from "react";
import Search from "../../common/Search";
import Cart from "../../page/Cart";
import "./Header.scss";
import Login from "../../page/Login";

const Header = () => {
  return (
    <div className="header">
      <div className="flipkartlogo">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="flipkart logo"
        />
        <div className="headerlogo">
          <span className="explore">Explore</span>
          <span className="plus">plus</span>
          <span classname="pluslogo">
            <img
              classname="star"
              width="11"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="plus logo"
            />
          </span>
        </div>
      </div>
      <Search />
      <div className="loginbtn">
        <button onClick={Login}>Login</button>
      </div>

      <div className="more_btn">
        <span>More</span>
        <img
          classname="more"
          src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_expand_more_48px-512.png"
          alt="more"
        />
      </div>
      <Cart />
    </div>
  );
};

export default Header;
