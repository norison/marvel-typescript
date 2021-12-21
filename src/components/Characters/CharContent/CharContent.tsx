import React, { useState } from "react";
import { MarvelCharacter } from "../../../services/MarvelService";
import CharInfo from "../CharInfo/CharInfo";
import CharList from "../CharList/CharList";

import "./CharContent.scss";

const CharContent: React.FC = () => {
  const [character, setCharacter] = useState<MarvelCharacter>();

  const characterSelectHandler = (character: MarvelCharacter) => {
    setCharacter(character);
  };

  return (
    <section className="char-content">
      <CharList onCharacterSelect={characterSelectHandler} />
      <CharInfo character={character!} />
    </section>
  );
};

export default CharContent;
