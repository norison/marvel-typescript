import React from "react";
import MarvelService from "../../services/MarvelService";
import CharInfo from "../CharInfo/CharInfo";
import CharList from "../CharList/CharList";

import "./CharContent.scss";

interface CharContentProps {
  service: MarvelService;
}

const CharContent: React.FC<CharContentProps> = ({ service }) => {
  return (
    <section className="char-content">
      <CharList service={service} />
      <CharInfo />
    </section>
  );
};

export default CharContent;
