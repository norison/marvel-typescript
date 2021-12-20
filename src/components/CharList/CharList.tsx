import React from "react";

import loki from "../../img/loki.png";
import "./CharList.scss";

const CharList: React.FC = () => {
  const getLiItems = () => {
    const items: React.ReactNode[] = [];

    for (let i = 0; i < 9; i++) {
      items.push(
        <li key={Math.random()} className="char-list__item">
          <img src={loki} alt="loki" className="char-list__img" />
          <div className="char-list__name">loki</div>
        </li>
      );
    }
    return items;
  };

  return (
    <div className="char-list">
      <ul className="char-list__list">{getLiItems()}</ul>
      <button className="char-list__btn button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;
