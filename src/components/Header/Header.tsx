/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="#" className="header__home">
        <span>Marvel</span> information portal
      </a>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__item">
            <a href="#" className="header__link header__link_active">
              Characters
            </a>
          </li>
          <div className="header__divider">/</div>
          <li className="header__item">
            <a href="#" className="header__link">
              Comics
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
