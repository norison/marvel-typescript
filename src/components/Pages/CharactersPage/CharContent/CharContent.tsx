import React, { useState } from "react";
import { MarvelCharacter } from "../../../../services/MarvelService";
import SearchForm from "../../../SearchForm/SearchForm";
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
      <div>
        <CharInfo character={character!} />
        <SearchForm />
      </div>
    </section>
  );
};

export default CharContent;
