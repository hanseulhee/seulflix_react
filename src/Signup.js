import React from "react";
import logo from "./routes/logo.png";
import { Link } from "react-router-dom";
import "./routes/styles/Signup.css";

function Signup() {
  return (
    <div>
      <img src={logo} alt="Logo" className="signinlogo" />
      <div className="signup__tool">
        <h5>2/2단계</h5>
        <h2>비밀번호를 설정하고 한 달 무료 이용을 <p>시작해 보세요. </p></h2>
        <div className="form-control_signup">
          <input
            type="text"
            className="name input"
            placeholder="Enter email"
          />

          <small>Error message</small>
        </div>

        <div className="form-control_signup">
          <input
            type="password"
            className="password input"
            placeholder="Enter password"
          />
          <small>Error message</small>
        </div>
        <div className="rule__tool">
        <div className="rule">
        <input type="checkbox" className="checkbox" id="cb1" />

            <h4>예, 저는 <div className="blue">개인정보 처리방침</div>에 따른 <p>개인정보 수집 및 활용에 동의합니다.</p></h4>
        </div>
        
        <div className="rule">
        <input type="checkbox" className="checkbox" />
        <h4>예, 넷플릭스 특별 할인 알림 이메일을 보내주세요.</h4>
        </div>
        </div>
        <Link to="/movie" className="signup__button">
        Next
      </Link>
      </div>
     
    </div>
  );
}

export default Signup;
