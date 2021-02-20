import React from "react";
import "../styles/Detail.css";

import Navbar from "../js/Navbar";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return (
        <div>
          <Navbar />
          <div className="backimage">
            <img src={location.state.background_image} alt="background_image" />
          </div>
          <div className="detail__tool">
            <div className="posterimage">
              <img src={location.state.poster} alt="poster" />
            </div>
            <div className="detail">
              <div className="detail__intro">
                <h2>{location.state.title}</h2>
                <h4>{location.state.year}</h4>
              </div>
              <h5> ⭐ {location.state.rating} / 10</h5>

              <span className="summary">{location.state.summary}</span>
              <div className="detail__button">
                <button className="startbutton">
                  {" "}
                  <div className="like">▶ </div> Start{" "}
                </button>
                <button className="likebutton">
                  {" "}
                  <div className="like">➕</div> Contents I'd like{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
