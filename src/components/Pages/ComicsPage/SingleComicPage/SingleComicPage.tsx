/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import "./SingleComicPage.scss";

import { Link, useParams } from "react-router-dom";
import { useMarvelService } from "../../../../hooks/marvel.hook";
import { MarvelComic } from "../../../../services/MarvelService";
import Spinner from "../../../Spinner/Spinner";
import ErrorMessage from "../../../ErrorMessage/ErrorMessge";

const SingleComicPage: React.FC = () => {
  const { id } = useParams();
  const { loading, error, getComic } = useMarvelService();
  const [comic, setComic] = useState<MarvelComic>();

  useEffect(() => {
    if (id) {
      getComic(+id).then((comic) => {
        setComic(comic);
      });
    }
  }, []);

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const item = comic ? getContent(comic) : null;

  return (
    <section className="single">
      {spinner}
      {errorMessage}
      {item}
    </section>
  );
};

const getContent = (comic: MarvelComic) => {
  const description = comic.description
    ? comic.description
    : "There is no description";

  const price = comic.price === 0 ? "not available" : `${comic.price}$`;

  const pages =
    comic.pageCount === 0 ? "There is no pages" : `${comic.pageCount} pages`;

  return (
    <div className="single__grid">
      <img src={comic.thumbnail} alt="comic" className="single__img"></img>
      <div className="single__info">
        <div className="single__title">{comic.title}</div>
        <div className="single__descr">{description}</div>
        <div className="single__pages">{pages}</div>
        <div className="single__lang">Language: en-us</div>
        <div className="single__price">{price}</div>
      </div>
      <Link to="/comics" className="single__link">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComicPage;
