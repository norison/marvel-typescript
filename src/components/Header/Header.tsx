/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="header__home">
        <span>Marvel</span> information portal
      </Link>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__item">
            <NavLink exact activeClassName="header__link_active" to="/" className="header__link">
              Characters
            </NavLink>
          </li>
          <div className="header__divider">/</div>
          <li className="header__item">
            <NavLink exact activeClassName="header__link_active" to="/comics" className="header__link">
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
