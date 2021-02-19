import React from "react";
import { Link } from "react-router-dom";
import "../styles/Movie.css";
import PropTypes from "prop-types";

function Movie({ id, year, title, poster, summary, rating }) {
  return (
    <Link
    to={{
      pathname: `/movie/${id}`,
      state: {
        year,
        title,
        poster,
        summary
      }
    }}
  >
      <div className="movie">
        <div className="movie__data">
          <img src={poster} alt={title} title={title} />

          <div className="content">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <span className="star" role="img">
              10 / {rating} ⭐
            </span>
            <p className="movie__summary">{summary}</p>
          </div>
        </div>
      </div>
      </Link>
  );
}



Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
