import React from "react";
import CharContent from "../CharContent/CharContent";
import Header from "../Header/Header";
import RandomChar from "../RandomChar/RandomChar";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <RandomChar />
        <CharContent />
      </div>
    </div>
  );
};

export default App;
