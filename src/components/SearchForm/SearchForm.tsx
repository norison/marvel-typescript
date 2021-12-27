import React, { useState } from "react";
import {
  ErrorMessage as FormikErrorMessage,
  Field,
  Form,
  Formik,
} from "formik";
import * as Yup from "yup";

import { useMarvelService } from "../../hooks/marvel.hook";
import { MarvelCharacter } from "../../services/MarvelService";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessge";

import "./SearchForm.scss";

const SearchForm: React.FC = () => {
  const [char, setChar] = useState<MarvelCharacter | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  const { loading, error, getCharacterByName } = useMarvelService();

  const onCharLoaded = (char: MarvelCharacter | null) => {
    setLoaded(true);
    setChar(char);
  };

  const updateChar = (name: string) => {
    getCharacterByName(name).then(onCharLoaded);
  };

  const errorMessage = error ? (
    <div className="char__search-critical-error">
      <ErrorMessage />
    </div>
  ) : null;

  const results = char ? (
    <div className="char__search-wrapper">
      <div className="char__search-success">
        There is! Visit {char.name} page?
      </div>
      <Link to={`/characters/${char.id}`} className="button button__secondary">
        <div className="inner">To page</div>
      </Link>
    </div>
  ) : loaded ? (
    <div className="char__search-error">
      The character was not found. Check the name and try again
    </div>
  ) : null;

  return (
    <div className="char__search-form">
      <Formik
        initialValues={{
          charName: "",
        }}
        validationSchema={Yup.object({
          charName: Yup.string().required("This field is required"),
        })}
        onSubmit={({ charName }) => {
          updateChar(charName);
        }}
      >
        <Form>
          <label className="char__search-label" htmlFor="charName">
            Or find a character by name:
          </label>
          <div className="char__search-wrapper">
            <Field
              id="charName"
              name="charName"
              type="text"
              placeholder="Enter name"
            />
            <button
              type="submit"
              className="button button__main"
              disabled={loading}
            >
              <div className="inner">find</div>
            </button>
          </div>
          <FormikErrorMessage
            component="div"
            className="char__search-error"
            name="charName"
          />
        </Form>
      </Formik>
      {results}
      {errorMessage}
    </div>
  );
};

export default SearchForm;
