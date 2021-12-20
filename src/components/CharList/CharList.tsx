/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import MarvelService, { MarvelCharacter } from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner";

import "./CharList.scss";

interface CharListProps {
  service: MarvelService;
}

const CharList: React.FC<CharListProps> = ({ service }) => {
  const [characters, setCharacters] = useState<MarvelCharacter[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(() => true);
        const characters = await service.getAllCharacters();
        setCharacters(() => characters);
        setLoading(() => false);
      } catch {
        console.log("Error");
      }
    }

    fetchData();
  }, []);

  let content: React.ReactFragment;

  if (loading) {
    content = <Spinner />;
  } else {
    content = (
      <>
        <ul className="char-list__list">
          {characters?.map((character) => {
            return (
              <li key={character.id} className="char-list__item">
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
  }

  return <div className="char-list">{content}</div>;
};

export default CharList;
