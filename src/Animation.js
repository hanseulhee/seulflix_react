import React from "react";
import "./routes/styles/Movie.css";

import Home from "./Home";
import axios from "axios";
import Navbar from "./routes/js/Navbar";
import "./routes/styles/Navbar.scss";

class Animation extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?quality=3D&limit=18&sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="main">
        <section className="container">
          
          {isLoading ? (
            <div className="loader">
              
            
              <span className="loader__text">Loading ...</span>
             
            </div>
            
          ) : 
   (
      <div className="main">
        <Navbar />

        <div className="movietitle">
            <h2>3D Movies</h2>
          <div className="movies">
            {movies.map((movie) => (
              <Home
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                poster={movie.medium_cover_image}
                rating={movie.rating}
                summary={movie.summary}
                background_image={movie.background_image}
              />
            ))}
          </div>
        </div>
      </div>
        )}
        </section>
      </div>
    );
  }
}

export default Animation;
