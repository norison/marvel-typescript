import { useState, useMemo } from "react";
import MarvelService, { MarvelCharacter } from "../services/MarvelService";

export const useMarvelService = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const marvelService = useMemo<MarvelService>(() => {
    return new MarvelService();
  }, []);

  const getCharacters = async (limit: number, offset: number) => {
    let characters: MarvelCharacter[] | undefined;

    try {
      enableLoading();
      characters = await marvelService.getAllCharacters(limit, offset);
      disableLoading();
    } catch {
      enableError();
    }

    return characters;
  };

  const getCharacter = async (id: number) => {
    let character: MarvelCharacter | undefined;

    try {
      enableLoading();
      character = await marvelService.getCharacter(id);
      disableLoading();
    } catch {
      enableError();
    }

    return character;
  };

  const enableLoading = () => {
    setLoading(true);
    setError(false);
  };

  const enableError = () => {
    setLoading(false);
    setError(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  return { loading, error, getCharacters, getCharacter };
};
