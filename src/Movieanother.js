import React from "react";
import "./routes/styles/Movie.css";

import Home from "./Home";
import axios from "axios";
import "./routes/styles/Navbar.css";

class Movieanother extends React.Component {
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
      "https://yts-proxy.now.sh/list_movies.json?genre=COMEDY&limit=9&sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;
    return(

            <div className="main">
           
            
            <div className="movietitle">
            <h2>Comedy</h2>
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
   
  }


export default Movieanother;
