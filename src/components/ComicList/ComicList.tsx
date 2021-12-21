/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useMarvelService } from "../../hooks/marvel.hook";
import { MarvelComic } from "../../services/MarvelService";
import ErrorMessage from "../ErrorMessage/ErrorMessge";
import Spinner from "../Spinner/Spinner";

import "./ComicList.scss";

const ComicList: React.FC = () => {
  const { loading, error, getComics } = useMarvelService();
  const [offset, setOffset] = useState<number>(0);
  const [comics, setComics] = useState<MarvelComic[]>();
  const [newLoading, setNewLoading] = useState<boolean>();

  useEffect(() => {
    loadComics(true);
  }, []);

  const loadComics = async (initial: boolean) => {
    initial ? setNewLoading(false) : setNewLoading(true);
    const newComics = await getComics(8, offset);
    if (newComics) {
      setComics((comics) => {
        if (comics) {
          return [...comics, ...newComics];
        }
        return newComics;
      });
      setOffset((offset) => offset + 8);
    }
    setNewLoading(false);
  };

  const getContent = () => {
    return (
      <>
        <ul className="comic-list__items">
          {comics?.map((comic, index) => {
            const price =
              comic.price === 0 ? "not available" : `${comic.price}$`;

            return (
              <li key={index} className="comic-list__item">
                <a href={comic.url} className="comic-list__link">
                  <img
                    src={comic.thumbnail}
                    alt="comic"
                    className="comic-list__img"
                  />
                  <div className="comic-list__name">{comic.title}</div>
                  <div className="comic-list__price">{price}</div>
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={loadComics.bind(null, false)}
          disabled={newLoading}
          className="comic-list__btn button button__main button__long"
        >
          <div className="inner">load more</div>
        </button>
      </>
    );
  };

  let content;

  if (loading && !newLoading) {
    content = <Spinner />;
  } else if (error) {
    content = <ErrorMessage />;
  } else {
    content = getContent();
  }

  return <div className="comic-list">{content}</div>;
};

export default ComicList;
