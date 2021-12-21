import axios, { AxiosInstance } from "axios";

interface MarvelCharactersResponse<TResults> {
  data: {
    results: TResults[];
  };
}

interface BaseResult {
  id: number;
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

interface MarvelCharacterResult extends BaseResult {
  name: string;
  comics: {
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
}

interface MarvelComicResult extends BaseResult {
  title: string;
  pageCount: number;
  prices: [
    {
      type: string;
      price: number;
    }
  ];
}

export interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comics: [
    {
      resourceURI: string;
      name: string;
    }
  ];
}

export interface MarvelComic {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  thumbnail: string;
  price: number;
  url: string;
}

export default class MarvelService {
  private readonly _baseUrl = "https://gateway.marvel.com:443/v1/public/";
  private readonly _apiKey = "3dc495ebcbabdb1d1c769df20ae5fc6d";

  private readonly _charactersUrl = "characters";
  private readonly _comicsUrl = "comics";

  private readonly _axios: AxiosInstance = axios.create({
    baseURL: this._baseUrl,
  });

  public async getAllCharacters(
    limit: number = 9,
    offset: number = 0
  ): Promise<MarvelCharacter[]> {
    const response = await this._axios.get<
      MarvelCharactersResponse<MarvelCharacterResult>
    >(this._charactersUrl, {
      params: { apikey: this._apiKey, limit, offset },
    });
    return this.mapCharactersResponse(response.data);
  }

  public async getCharacter(id: number): Promise<MarvelCharacter> {
    const response = await this._axios.get<
      MarvelCharactersResponse<MarvelCharacterResult>
    >(this._charactersUrl, {
      params: {
        apikey: this._apiKey,
        id,
      },
    });
    return this.mapCharactersResponse(response.data)[0];
  }

  public async getComics(
    limit: number = 9,
    offset: number = 0
  ): Promise<MarvelComic[]> {
    const response = await this._axios.get<
      MarvelCharactersResponse<MarvelComicResult>
    >(this._comicsUrl, {
      params: {
        apikey: this._apiKey,
        limit,
        offset,
      },
    });
    return this.mapComicsResponse(response.data);
  }

  private mapCharactersResponse(
    response: MarvelCharactersResponse<MarvelCharacterResult>
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
      comics: item.comics.items,
    }));
  }

  private mapComicsResponse(
    response: MarvelCharactersResponse<MarvelComicResult>
  ): MarvelComic[] {
    return response.data.results.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      pageCount: item.pageCount,
      price: item.prices[0].price,
      thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
      url: item.urls[0].url,
    }));
  }
}
