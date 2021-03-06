import { useState, useMemo } from "react";
import MarvelService, {
  MarvelCharacter,
  MarvelComic,
} from "../services/MarvelService";

export const useMarvelService = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const marvelService = useMemo<MarvelService>(() => {
    return new MarvelService();
  }, []);

  const getCharacters = async (limit: number, offset: number) => {
    let characters: MarvelCharacter[] = [];

    try {
      enableLoading();
      characters = await marvelService.getAllCharacters(limit, offset);
      disableLoading();
    } catch {
      enableError();
    }

    return characters;
  };

  const getCharacterByName = async (name: string) => {
    let character: MarvelCharacter | null = null;

    try {
      enableLoading();
      character = await marvelService.getCharacterByName(name);
      disableLoading();
    } catch {
      enableError();
    }

    return character;
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

  const getComics = async (limit: number, offset: number) => {
    let comics: MarvelComic[] | undefined;

    try {
      enableLoading();
      comics = await marvelService.getComics(limit, offset);
      disableLoading();
    } catch {
      enableError();
    }

    return comics;
  };

  const getComic = async (id: number) => {
    let comic: MarvelComic | undefined;

    try {
      enableLoading();
      comic = await marvelService.getComic(id);
      disableLoading();
    } catch {
      enableError();
    }

    return comic;
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

  return { loading, error, getCharacters, getCharacter, getCharacterByName, getComics, getComic };
};
