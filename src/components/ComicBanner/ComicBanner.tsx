import React from "react";
import avengers from "../../img/avengers.png";
import logo from "../../img/avengers_logo.png";

import "./ComicBanner.scss";

const ComicBanner: React.FC = () => {
  return (
    <div className="comic-banner">
      <img src={avengers} alt="avengers" className="comic-banner__img" />
      <div className="comic-banner__text">
        New comics every week!<br/>
        Stay tuned!
      </div>
      <img src={logo} alt="avengers logo" className="comic-banner__logo" />
    </div>
  );
};

export default ComicBanner;
