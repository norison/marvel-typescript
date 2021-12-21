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

interface ViewProps {
  character: MarvelCharacter;
}

const RandomChar: React.FC<RandomCharProps> = ({ service }) => {
  const [character, setCharacter] = useState<MarvelCharacter>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    updateCharacterHandler();
  }, []);

  const enableError = () => {
    setError(() => true);
    setLoading(() => false);
  };

  const enableLoading = () => {
    setError(() => false);
    setLoading(() => true);
  };

  const enableView = (character: MarvelCharacter) => {
    setError(() => false);
    setLoading(() => false);
    setCharacter(() => character);
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

  let content;

  if (loading) {
    content = <Spinner />;
  } else if (error) {
    content = <ErrorMessage />;
  } else if (character) {
    content = <View character={character} />;
  }

  return (
    <section className="random">
      <div className="random__char">{content}</div>
      <div className="random__choose">
        <div className="random__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </div>
        <div className="random__title">Or choose another one</div>
        <button
          onClick={updateCharacterHandler}
          className="random__btn button button__main"
        >
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="random__decoration" />
      </div>
    </section>
  );
};

const View: React.FC<ViewProps> = ({ character }) => {
  return (
    <>
      <img src={character.thumbnail} alt="thor" className="random__img" />
      <div className="random__wrapper">
        <div className="random__name">{character.name}</div>
        <div className="random__descr">{character.description}</div>
        <div className="random__links">
          <a
            href={character.homepage}
            className="random__link button button__main"
          >
            <div className="inner">homepage</div>
          </a>
          <a
            href={character.wiki}
            className="random__link button button__secondary"
          >
            <div className="inner">wiki</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default RandomChar;
