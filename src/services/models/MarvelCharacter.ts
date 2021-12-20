import MarvelThumbnail from "./MarvelThumbnail";

export default interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: MarvelThumbnail;
}