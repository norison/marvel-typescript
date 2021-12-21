/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { useMarvelService } from "../../../hooks/marvel.hook";
import { MarvelCharacter } from "../../../services/MarvelService";
import ErrorMessage from "../../ErrorMessage/ErrorMessge";
import Spinner from "../../Spinner/Spinner";

import "./CharList.scss";

interface CharListProps {
  onCharacterSelect: (character: MarvelCharacter) => void;
}

const CharList: React.FC<CharListProps> = ({ onCharacterSelect }) => {
  const { loading, error, getCharacters } = useMarvelService();
  const [newLoading, setNewLoading] = useState<boolean>();
  const [charactersEnded, setCharactersEnded] = useState<boolean>();
  const [characters, setCharacters] = useState<MarvelCharacter[]>();
  const [offset, setOffset] = useState<number>(0);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    requestCharactersHandler(true);
  }, []);

  const requestCharactersHandler = (initial: boolean) => {
    initial ? setNewLoading(false) : setNewLoading(true);
    getCharacters(9, offset).then((newCharacters) => {
      if (newCharacters) {
        setCharacters((characters) => {
          if (characters) {
            return [...characters, ...newCharacters];
          }
          return newCharacters;
        });
        setOffset((offset) => offset + 9);
        if (newCharacters.length < 9) {
          setCharactersEnded(true);
        }
      }

      setNewLoading(false);
    });
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
        <button
          disabled={newLoading}
          style={{ display: charactersEnded ? "none" : "block" }}
          onClick={requestCharactersHandler.bind(null, false)}
          className="char-list__btn button button__main button__long"
        >
          <div className="inner">load more</div>
        </button>
      </>
    );
  };

  let content;

  if (loading && !newLoading) {
    content = <Spinner />;
  } else if (error) {
    content = <ErrorMessage />;
  } else if (characters) {
    content = getContent(characters);
  }

  return <div className="char-list">{content}</div>;
};

export default CharList;
