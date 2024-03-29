import React from "react";

import "./App.css";
import Navbar from "./routes/js/Navbar";
import Main from "./Main";
import "./Main.css";

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
