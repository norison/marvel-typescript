import React from "react";
import { Link } from "react-router-dom";
import { MarvelCharacter } from "../../../../services/MarvelService";
import Skeleton from "../../../Skeleton/Skeleton";

import "./CharInfo.scss";

interface CharInfoProps {
  character: MarvelCharacter;
}

const CharInfo: React.FC<CharInfoProps> = ({ character }) => {
  const getContent = (character: MarvelCharacter) => {
    return (
      <>
        <div className="char-info__header">
          <img
            src={character.thumbnail}
            alt="character"
            className="char-info__img"
          />
          <div className="char-info__wrapper">
            <div className="char-info__name">{character.name}</div>
            <a
              href={character.homepage}
              className="char-info__link button button__main"
            >
              <div className="inner">homepage</div>
            </a>
            <a
              href={character.wiki}
              className="char-info__link button button__secondary"
            >
              <div className="inner">wiki</div>
            </a>
          </div>
        </div>
        <div className="char-info__descr">{character.description}</div>
        <div className="char-info__title">Comics:</div>
        <ul className="char-info__list">
          {character.comics.map((comic, index) => {
            const comicId = comic.resourceURI.split("/").slice(-1);
            return (
              <li key={index} className="char-info__item">
                <Link
                  to={`/comics/${comicId}`}
                  className="char-info__link-comics"
                >
                  {comic.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  let content;

  if (character) {
    content = getContent(character);
  } else {
    content = <Skeleton />;
  }

  return <div className="char-info">{content}</div>;
};

export default CharInfo;
