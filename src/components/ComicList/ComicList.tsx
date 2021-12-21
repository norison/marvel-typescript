import React from "react";
import comic from "../../img/comic.png";

import "./ComicList.scss";

const ComicList: React.FC = () => {
  return (
    <div className="comic-list">
      <ul className="comic-list__items">
        <li className="comic-list__item">
          <a href="#" className="comic-list__link">
            <img src={comic} alt="comic" className="comic-list__img" />
            <div className="comic-list__name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comic-list__price">9.99$</div>
          </a>
        </li>
        <li className="comic-list__item">
          <a href="#" className="comic-list__link">
            <img src={comic} alt="comic" className="comic-list__img" />
            <div className="comic-list__name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comic-list__price">9.99$</div>
          </a>
        </li>
        <li className="comic-list__item">
          <a href="#" className="comic-list__link">
            <img src={comic} alt="comic" className="comic-list__img" />
            <div className="comic-list__name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comic-list__price">9.99$</div>
          </a>
        </li>
        <li className="comic-list__item">
          <a href="#" className="comic-list__link">
            <img src={comic} alt="comic" className="comic-list__img" />
            <div className="comic-list__name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comic-list__price">9.99$</div>
          </a>
        </li>
        <li className="comic-list__item">
          <a href="#" className="comic-list__link">
            <img src={comic} alt="comic" className="comic-list__img" />
            <div className="comic-list__name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comic-list__price">9.99$</div>
          </a>
        </li>
        <li className="comic-list__item">
          <a href="#" className="comic-list__link">
            <img src={comic} alt="comic" className="comic-list__img" />
            <div className="comic-list__name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comic-list__price">9.99$</div>
          </a>
        </li>
        <li className="comic-list__item">
          <a href="#" className="comic-list__link">
            <img src={comic} alt="comic" className="comic-list__img" />
            <div className="comic-list__name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comic-list__price">9.99$</div>
          </a>
        </li>
        <li className="comic-list__item">
          <a href="#" className="comic-list__link">
            <img src={comic} alt="comic" className="comic-list__img" />
            <div className="comic-list__name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comic-list__price">9.99$</div>
          </a>
        </li>
      </ul>
      <button className="comic-list__btn button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicList;
