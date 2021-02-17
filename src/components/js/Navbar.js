import React from "react";
import "../styles/Navbar.css";
import logo from '../logo.png';

function Navbar(){
    return(
        <div className="navbar">
        <img src={logo} alt="Logo" />
        <div className="nav">
        <a href="/">홈</a>
        <a href="/">TV프로그램</a>
        <a href="/">영화</a>
        <a href="/">최신 콘텐츠</a>
        <a href="/">내가 찜한 콘텐츠</a>
      </div>
      </div>
    );
}

export default Navbar;