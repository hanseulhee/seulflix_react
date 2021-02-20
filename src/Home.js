import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./routes/styles/Home.css";

function Home({ id, year, title, poster, rating, summary, background_image }) {
  return (
    <Link
      className="b"
      to={{
        pathname: `/home/${id}`,
        state: {
          year,
          title,
          rating,
          poster,
          summary,
          background_image,
        },
      }}
    >
      <div className="movie">
        <div className="movie__data">
          <div className="rate">
            {" "}
            <img src={poster} alt={title} title={title} className="img" />
            <span className="star" role="img">
              ⭐ {rating} / 10
            </span>
          </div>

          <div className="content">
            <img src={background_image} alt={title} className="no" />

            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}

Home.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
};

export default Home;
