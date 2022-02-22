import React, { Component } from "react";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import Search from "../../common/Search";
import Cart from "../../page/Cart";
import "./Header.scss";
import Login from "../../page/Login";

const Header = () => {
  const [token, setToken] = useState(null);
  console.log(token);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("hello");
    let token = JSON.parse(localStorage.getItem("token")) || null;
    setToken(token);
  }, []);

  const local = {
    name: "mohit",
    token: " ",
  };
  const loginUser = () => {
    let token = uuid();
    let obj = { token };
    localStorage.setItem("token", JSON.stringify(local));
    setToken(local);
    navigate("/login");
  };

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
      {!token && (
        <div className="loginbtn">
          <button onClick={loginUser}>Login</button>
        </div>
      )}
      {token && (
        <div className="loginbtn">
          <p>Mohit</p>
        </div>
      )}
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
