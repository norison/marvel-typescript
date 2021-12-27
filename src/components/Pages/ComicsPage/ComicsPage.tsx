import React from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import ComicBanner from "./ComicBanner/ComicBanner";

const ComicsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel comics" />
        <title>Marvel comics</title>
      </Helmet>
      <ComicBanner />
      <Outlet />
    </>
  );
};

export default ComicsPage;
