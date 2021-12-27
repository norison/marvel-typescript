import React from "react";
import CharContent from "./CharContent/CharContent";
import RandomChar from "./RandomChar/RandomChar";
import Helmet from "react-helmet";

const CharactersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel infomation portal" />
        <title>Marvel information</title>
      </Helmet>
      <RandomChar />
      <CharContent />
    </>
  );
};

export default CharactersPage;
