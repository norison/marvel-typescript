import React from "react";
import Header from "../Header/Header";
import RandomChar from "../RandomChar/RandomChar";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <RandomChar />
      </div>
    </div>
  );
};

export default App;
