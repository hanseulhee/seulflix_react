import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from '../logo.png';

function Navbar (){
  return (
    <div className="navbar">
      <img src={logo} alt="Logo"/>
      <div className="nav">
        <Link to="/" className="a">
          홈
        </Link>
        <Link to="/" className="a">
          TV프로그램
        </Link>
        <Link to="/movie" className="a">
          영화
        </Link>
        <Link to="/" className="a">
          최신 콘텐츠
        </Link>
        <Link to="/" className="a">
          내가 찜한 콘텐츠
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
