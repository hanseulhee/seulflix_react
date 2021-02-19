import React from "react";
import "./routes/styles/Movie.css";

import Home from "./Home";
import axios from "axios";
import "./routes/styles/Navbar.css";
import Animation from "./Animation";
import Movieanother from "./Movieanother";


class Movie extends React.Component {
  state = {
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?genre=ADVENTURE&limit=18&sort_by=rating"
    );
    this.setState({ movies });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="main">
       

            <div className="main">
         
              <Animation />
              <Movieanother />
      
            
            <div className="movietitle">
            <h2>Adventure</h2>
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
            </div>
            
       
    );
  }
}

export default Movie;
