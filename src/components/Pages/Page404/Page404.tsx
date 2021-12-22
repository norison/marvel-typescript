import React from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../../ErrorMessage/ErrorMessge";

import "./Page404.scss";

const Page404: React.FC = () => {
  return (
    <div className="not-found">
      <ErrorMessage />
      <p className="not-found__text">Page does not exist</p>
      <Link to="/" className="not-found__link">
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;