/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import mjolnir from "../../img/mjolnir.png";
import MarvelService, { MarvelCharacter } from "../../services/MarvelService";
import ErrorMessage from "../ErrorMessage/ErrorMessge";
import Spinner from "../Spinner/Spinner";

import "./RandomChar.scss";

interface RandomCharProps {
  service: MarvelService;
}

const RandomChar: React.FC<RandomCharProps> = ({ service }) => {
  const [character, setCharacter] = useState<MarvelCharacter>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    updateCharacterHandler();
  }, []);

  const enableError = () => {
    setError(true);
    setLoading(false);
  };

  const enableLoading = () => {
    setError(false);
    setLoading(true);
  };

  const enableView = (character: MarvelCharacter) => {
    setError(false);
    setLoading(false);
    setCharacter(character);
  };

  const updateCharacterHandler = async () => {
    try {
      enableLoading();
      const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
      const character = await service.getCharacter(id);
      enableView(character);
    } catch {
      enableError();
    }
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
