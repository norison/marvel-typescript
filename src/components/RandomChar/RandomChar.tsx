/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import thor from "../../img/thor.png";
import mjolnir from "../../img/mjolnir.png";
import "./RandomChar.scss";

const RandomChar: React.FC = () => {
  return (
    <section className="random">
      <div className="random__char">
        <img src={thor} alt="thor" className="random__img" />
        <div className="random__wrapper">
          <div className="random__name">THOR</div>
          <div className="random__descr">
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </div>
          <div className="random__links">
            <a href="#" className="random__link button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href="#" className="random__link button button__secondary">
              <div className="inner">wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="random__choose">
        <div className="random__title">
          Random character for today!<br/>
          Do you want to get to know him better?
        </div>
        <div className="random__title">Or choose another one</div>
        <button className="random__btn button button__main">
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="random__decoration" />
      </div>
    </section>
  );
};

export default RandomChar;
