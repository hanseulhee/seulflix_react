import React from "react";
import logo from "./routes/logo.png";
import "./routes/styles/Freemonth.css";
import { Link } from "react-router-dom";


function Freemonth() {
  return (
    <div>
      <img src={logo} alt="Logo" className="signinlogo" />
      <div className="freetool">
        <div className="deviceLogo"></div>
        <h5>1/2단계</h5>
        <h2>계정 설정을 마무리하세요.</h2>
        <h4>
         맞춤형 콘텐츠 서비스, 넷플릭스!
         비밀번호를 설정해 다양한 디바이스에서
          Netflix를 시청하세요.
        </h4>
        <Link to="/signup" className="free">Next</Link>
      </div>
    </div>
  );
}

export default Freemonth;
