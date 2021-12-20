import axios, { AxiosInstance } from "axios";

interface MarvelCharactersResponse {
  data: {
    results: [
      {
        id: number;
        name: string;
        description: string;
        thumbnail: {
          path: string;
          extension: string;
        };
        urls: [
          {
            type: string;
            url: string;
          },
          {
            type: string;
            url: string;
          }
        ];
      }
    ];
  };
}

export interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
}

export default class MarvelService {
  private readonly _baseUrl = "https://gateway.marvel.com:443/v1/public/";
  private readonly _apiKey = "3dc495ebcbabdb1d1c769df20ae5fc6d";
  private readonly _charactersUrl = "characters";
  private readonly _axios: AxiosInstance = axios.create({
    baseURL: this._baseUrl,
  });

  public async getAllCharacters(): Promise<MarvelCharacter[]> {
    const response = await this._axios.get<MarvelCharactersResponse>(
      this._charactersUrl,
      {
        params: { apikey: this._apiKey, limit: 9, offset: 0 },
      }
    );
    return this.mapResponseToCharacters(response.data);
  }

  public async getCharacter(id: number): Promise<MarvelCharacter> {
    const response = await this._axios.get<MarvelCharactersResponse>(
      this._charactersUrl,
      { params: { apikey: this._apiKey, id } }
    );
    return this.mapResponseToCharacters(response.data)[0];
  }

  private mapResponseToCharacters(
    response: MarvelCharactersResponse
  ): MarvelCharacter[] {
    return response.data.results.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description
        ? `${item.description.slice(0, 210)}...`
        : "There is no description",
      thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
      homepage: item.urls[0].url,
      wiki: item.urls[1].url,
    }));
  }
}
