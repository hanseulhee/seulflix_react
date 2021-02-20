import React from "react";
import "../styles/Login.css";
import logo from "../logo.png";

const Login = ({ history }) => {
  return (
    <div>
      <div className="back">
        <img
          className="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/399d6794-b770-4b21-992d-a3326710a170/c65f1708-f0e9-45b6-8482-3365ca37439d/KR-ko-20210215-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>

      <div>
        <img src={logo} alt="Logo" className="signinlogo" />

        <form id="form" className="form">
          <div className="signinbox">
            <div className="inform">Sign In</div>

            <div className="form-control">
              <input
                type="text"
                className="name input"
                placeholder="Enter username"
              />

              <small>Error message</small>
            </div>

            <div className="form-control">
              <input
                type="password"
                className="password input"
                placeholder="Enter password"
              />
              <small>Error message</small>
            </div>

            <button
              type="submit"
              className="signinbutton"
              onClick={() => {
                history.push("/movie");
              }}
            >
              Sign In
            </button>
            <a href="#d" className="help">
              Need help?
            </a>
            <div className="explain">
              <div className="plus">
                Forgot your password?&nbsp;
                <p>Change Password</p>
              </div>
              <div className="plus2">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. &nbsp;
                <p>Learn more.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
