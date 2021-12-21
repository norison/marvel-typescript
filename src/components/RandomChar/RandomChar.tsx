/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useMarvelService } from "../../hooks/marvel.hook";
import mjolnir from "../../img/mjolnir.png";
import { MarvelCharacter } from "../../services/MarvelService";
import ErrorMessage from "../ErrorMessage/ErrorMessge";
import Spinner from "../Spinner/Spinner";

import "./RandomChar.scss";

const RandomChar: React.FC = () => {
  const [character, setCharacter] = useState<MarvelCharacter>();
  const { loading, error, getCharacter } = useMarvelService();

  useEffect(() => {
    updateCharacterHandler();
  }, []);

  const updateCharacterHandler = async () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    setCharacter(await getCharacter(id));
  };

  const getContent = (character: MarvelCharacter) => {
    return (
      <div className="randomchar__block">
        <div className="randomchar__img">
          <img src={character?.thumbnail} alt="character" />
        </div>
        <div className="randomchar__info">
          <div className="randomchar__name">{character?.name}</div>
          <div className="randomchar__descr">{character?.description}</div>
          <div className="randomchar__links">
            <a
              href={character?.homepage}
              className="randomchar__link button button__main"
            >
              <div className="inner">homepage</div>
            </a>
            <a
              href={character?.wiki}
              className="randomchar__link button button__secondary"
            >
              <div className="inner">wiki</div>
            </a>
          </div>
        </div>
      </div>
    );
  };

  const getSpinner = () => {
    return (
      <div className="randomchar__spinner">
        <Spinner />
      </div>
    );
  };

  let content;

  if (loading) {
    content = getSpinner();
  } else if (error) {
    content = <ErrorMessage />;
  } else if (character) {
    content = getContent(character);
  }

  return (
    <section className="randomchar">
      {content}
      <div className="randomchar__static">
        <div className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </div>
        <div className="randomchar__title">Or choose another one</div>
        <button
          onClick={updateCharacterHandler}
          className="randomchar__btn button button__main"
        >
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </section>
  );
};

export default RandomChar;
