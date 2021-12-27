import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ErrorMessage from "../../ErrorMessage/ErrorMessge";

import "./Page404.scss";

const Page404: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="404 Not Found" />
        <title>404 Not Found</title>
      </Helmet>
      <div className="not-found">
        <ErrorMessage />
        <p className="not-found__text">Page does not exist</p>
        <Link to="/" className="not-found__link">
          Back to main page
        </Link>
      </div>
    </>
  );
};

export default Page404;
