import React from "react";
import CharInfo from "../CharInfo/CharInfo";
import CharList from "../CharList/CharList";

import "./CharContent.scss";

const CharContent: React.FC = () => {
  return (
    <section className="char-content">
      <CharList />
      <CharInfo />
    </section>
  );
};

export default CharContent;
