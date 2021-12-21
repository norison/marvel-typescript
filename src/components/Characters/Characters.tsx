import React from "react";
import CharContent from "./CharContent/CharContent";
import RandomChar from "./RandomChar/RandomChar";
import vision from "../../img/vision.png";

const Characters: React.FC = () => {
  return (
    <>
      <RandomChar />
      <CharContent />
      <img src={vision} alt="vision" className="app__img" />
    </>
  );
};

export default Characters;
