import React from "react";
import { MarvelCharacter } from "../../services/MarvelService";
import Skeleton from "../Skeleton/Skeleton";

import "./CharInfo.scss";

interface CharInfoProps {
  character: MarvelCharacter;
}

const CharInfo: React.FC<CharInfoProps> = ({ character }) => {
  let content;

  if (character) {
    content = <View character={character} />;
  } else {
    content = <Skeleton />;
  }

  return <div className="char-info">{content}</div>;
};

const View: React.FC<CharInfoProps> = ({ character }) => {
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
        <li className="char-info__item">
          <a href="#" className="char-info__link-comics">
            All-Winners Squad: Band of Heroes (2011) #3
          </a>
        </li>
        <li className="char-info__item">
          <a href="#" className="char-info__link-comics">
            Alpha Flight (1983) #50
          </a>
        </li>
      </ul>
    </>
  );
};

export default CharInfo;
