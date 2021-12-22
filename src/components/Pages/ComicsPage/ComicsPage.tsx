import React from "react";
import { Outlet } from "react-router-dom";
import ComicBanner from "./ComicBanner/ComicBanner";

const ComicsPage: React.FC = () => {
  return (
    <>
      <ComicBanner />
      <Outlet />
    </>
  );
};

export default ComicsPage;
