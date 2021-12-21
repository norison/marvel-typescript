import React, { useState } from "react";
import MarvelService, { MarvelCharacter } from "../../services/MarvelService";
import CharInfo from "../CharInfo/CharInfo";
import CharList from "../CharList/CharList";

import "./CharContent.scss";

interface CharContentProps {
  service: MarvelService;
}

const CharContent: React.FC<CharContentProps> = ({ service }) => {
  const [character, setCharacter] = useState<MarvelCharacter>();

  const characterSelectHandler = (character: MarvelCharacter) => {
    setCharacter(character);
  };

  return (
    <section className="char-content">
      <CharList service={service} onCharacterSelect={characterSelectHandler} />
      <CharInfo character={character!} />
    </section>
  );
};

export default CharContent;
