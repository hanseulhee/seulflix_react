import React from "react";

import "./App.css";
import Navbar from "./components/js/Navbar";
import Main from "./Main";
import "./Main.css";
import Movie from "./Movie";
import "./routes/styles/Movie.css";

function App() {
  return(
  <div className="main">
    <Navbar />
    <Main />
  </div>
  );
}

export default App;
