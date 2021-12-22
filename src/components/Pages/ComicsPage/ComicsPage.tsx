import React from "react";
import ComicBanner from "./ComicBanner/ComicBanner";
import ComicList from "./ComicList/ComicList";

const ComicsPage: React.FC = () => {
  return (
    <>
      <ComicBanner />
      <ComicList />
    </>
  );
};

export default ComicsPage;
