/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import loki from "../../img/loki.png";
import "./CharInfo.scss";

const CharInfo: React.FC = () => {
  return (
    <div className="char-info">
      <div className="char-info__header">
        <img src={loki} alt="loki" className="char-info__img" />
        <div className="char-info__wrapper">
          <div className="char-info__name">loki</div>
          <a href="#" className="char-info__link button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href="#" className="char-info__link button button__secondary">
            <div className="inner">wiki</div>
          </a>
        </div>
      </div>
      <div className="char-info__descr">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </div>
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
    </div>
  );
};

export default CharInfo;
