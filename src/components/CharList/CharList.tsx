/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import MarvelService, { MarvelCharacter } from "../../services/MarvelService";
import ErrorMessage from "../ErrorMessage/ErrorMessge";
import Spinner from "../Spinner/Spinner";

import "./CharList.scss";

interface CharListProps {
  service: MarvelService;
  onCharacterSelect: (character: MarvelCharacter) => void;
}

interface ViewProps {
  characters: MarvelCharacter[];
  onCharacterSelect: (id: number) => void;
}

const CharList: React.FC<CharListProps> = ({ service, onCharacterSelect }) => {
  const [characters, setCharacters] = useState<MarvelCharacter[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        enableLoading();
        const characters = await service.getAllCharacters();
        enableView(characters);
      } catch {
        enableError();
      }
    }

    fetchData();
  }, []);

  const characterSelectedHandler = (id: number) => {
    const char = characters?.find((item) => item.id === id);
    if (char) {
      onCharacterSelect(char);
    }
  };

  const enableError = () => {
    setError(() => true);
    setLoading(() => false);
  };

  const enableLoading = () => {
    setError(() => false);
    setLoading(() => true);
  };

  const enableView = (characters: MarvelCharacter[]) => {
    setError(() => false);
    setLoading(() => false);
    setCharacters(() => characters);
  };

  let content;

  if (loading) {
    content = <Spinner />;
  } else if (error) {
    content = <ErrorMessage />;
  } else if (characters) {
    content = (
      <View
        characters={characters}
        onCharacterSelect={characterSelectedHandler}
      />
    );
  }

  return <div className="char-list">{content}</div>;
};

const View: React.FC<ViewProps> = ({ characters, onCharacterSelect }) => {
  return (
    <>
      <ul className="char-list__list">
        {characters.map((character) => {
          return (
            <li
              onClick={onCharacterSelect.bind(null, character.id)}
              key={character.id}
              className="char-list__item"
            >
              <img
                src={character.thumbnail}
                alt="character"
                className="char-list__img"
              />
              <div className="char-list__name">{character.name}</div>
            </li>
          );
        })}
      </ul>
      <button className="char-list__btn button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </>
  );
};

export default CharList;
