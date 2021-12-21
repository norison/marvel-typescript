import React from "react";
import CharContent from "../CharContent/CharContent";
import Header from "../Header/Header";
import RandomChar from "../RandomChar/RandomChar";
import ComicBanner from "../ComicBanner/ComicBanner";

import vision from "../../img/vision.png";

import "./App.scss";
import ComicList from "../ComicList/ComicList";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <ComicBanner />
        <ComicList />
        {/* <RandomChar />
        <CharContent />
        <img src={vision} alt="vision" className="app__img" /> */}
      </div>
    </div>
  );
};

export default App;
