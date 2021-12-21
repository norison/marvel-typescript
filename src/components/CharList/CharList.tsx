/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import MarvelService, { MarvelCharacter } from "../../services/MarvelService";
import ErrorMessage from "../ErrorMessage/ErrorMessge";
import Spinner from "../Spinner/Spinner";

import "./CharList.scss";

interface CharListProps {
  service: MarvelService;
  onCharacterSelect: (character: MarvelCharacter) => void;
}

const CharList: React.FC<CharListProps> = ({ service, onCharacterSelect }) => {
  const [characters, setCharacters] = useState<MarvelCharacter[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const itemsRef = useRef<HTMLLIElement[]>([]);

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

  const enableError = () => {
    setError(true);
    setLoading(false);
  };

  const enableLoading = () => {
    setError(false);
    setLoading(true);
  };

  const enableView = (characters: MarvelCharacter[]) => {
    setError(false);
    setLoading(false);
    setCharacters(characters);
  };

  const characterSelectHandler = (
    character: MarvelCharacter,
    index: number
  ) => {
    itemsRef.current.forEach((item) =>
      item.classList.remove("char-list__item_selected")
    );
    itemsRef.current[index].classList.add("char-list__item_selected");
    itemsRef.current[index].focus();
    onCharacterSelect(character);
  };

  const getContent = (characters: MarvelCharacter[]) => {
    return (
      <>
        <ul className="char-list__list">
          {characters.map((character, index) => {
            return (
              <li
                onClick={characterSelectHandler.bind(null, character, index)}
                key={character.id}
                className="char-list__item"
                ref={(item) => (itemsRef.current[index] = item!)}
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

  let content;

  if (loading) {
    content = <Spinner />;
  } else if (error) {
    content = <ErrorMessage />;
  } else if (characters) {
    content = getContent(characters);
  }

  return <div className="char-list">{content}</div>;
};

export default CharList;
