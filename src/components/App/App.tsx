import React from "react";
import CharContent from "../CharContent/CharContent";
import Header from "../Header/Header";
import RandomChar from "../RandomChar/RandomChar";

import vision from "../../img/vision.png";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <RandomChar />
        <CharContent />
        <img src={vision} alt="vision" className="app__img" />
      </div>
    </div>
  );
};

export default App;
