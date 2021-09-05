import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo"/>
      <div className="navbar__nav">
        <Link to="/" className="navbar__nav__a">
          홈
        </Link>
        <Link to="/" className="navbar__nav__a">
          TV프로그램
        </Link>
        <Link to="/movie" className="navbar__nav__a">
          영화
        </Link>
        <Link to="/" className="navbar__nav__a">
          슬테고리
        </Link>
        <Link to="/Catagory" className="navbar__nav__a">
          내가 찜한 콘텐츠
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
