/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

const Header: React.FC = () => {
  const getNavLinkStyle = (isActive: boolean) => {
    return isActive ? "header__link header__link_active" : "header__link";
  };

  return (
    <header className="header">
      <Link to="/" className="header__home">
        <span>Marvel</span> information portal
      </Link>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__item">
            <NavLink
              end
              to="/"
              className={({ isActive }) => getNavLinkStyle(isActive)}
            >
              Characters
            </NavLink>
          </li>
          <div className="header__divider">/</div>
          <li className="header__item">
            <NavLink
              end
              to="/comics"
              className={({ isActive }) => getNavLinkStyle(isActive)}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
