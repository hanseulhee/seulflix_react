import React from "react";
import "./Main.css";

function Main() {
  return (
      <div className="tool">
          <div className="login__button">
              <button>login</button>
          </div>
    <div className="back">
      <img
        className="background"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/399d6794-b770-4b21-992d-a3326710a170/c65f1708-f0e9-45b6-8482-3365ca37439d/KR-ko-20210215-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
      </div>
      <div className="title">
        <h1>See What's next.</h1>
        <h4>WATCH ANYWHERE, CANCEL ANYTIME.</h4>
        <button>JOIN FREE FOR A MONTH</button>
      </div>
    </div>
  );
}

export default Main;
