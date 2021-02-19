import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import Animation from "./Animation";
import Movieanother from "./Movieanother";




function Home({ id, year, title, poster, rating }) {
  return (
    <Link className="b"
    to ={{
      pathname: `/movie/${id}`,
      state: {
        year,
        title,
        poster,

      }
    }}
  >


      <div className="movie">
        <div className="movie__data">
          <div className="rate">          <img src={poster} alt={title} title={title} className="img"/>
          <span className="star" role="img">
            ⭐ {rating} / 10 
            </span>
            </div>

          <div className="content">
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
};


export default Home;
