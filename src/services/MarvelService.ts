import axios, { AxiosInstance, AxiosResponse } from "axios";
import MarvelApiData from "./models/MarvelApiData";
import MarvelCharacter from "./models/MarvelCharacter";

interface MarvelApiCharactersResponse {
  code: string;
  status: string;
  data: MarvelApiData;
  results: MarvelCharacter[];
}

class MarvelCharactersRequestConfig {
  constructor(public params: MarvelParamsBase) {}
}

class MarvelParamsBase {
  constructor(public apikey: string) {}
}

class MarvelCharactersParams extends MarvelParamsBase {
  constructor(
    public apikey: string,
    public limit?: number,
    public offset?: number
  ) {
    super(apikey);
  }
}

class MarvelCharacterParams extends MarvelParamsBase {
  constructor(
    public apikey: string,
    public limit?: number,
    public offset?: number
  ) {
    super(apikey);
  }
}

export default class MarvelService {
  private readonly _baseUrl = "https://gateway.marvel.com:443/v1/public/";
  private readonly _apiKey = "3dc495ebcbabdb1d1c769df20ae5fc6d";
  private readonly _charactersUrl = "characters";
  private readonly _axios: AxiosInstance = axios.create({
    baseURL: this._baseUrl,
  });

  public async getAllCharacters(): Promise<MarvelCharacter[]> {
    const params = new MarvelCharactersParams(this._apiKey, 9, 0);
    const requestConfig = new MarvelCharactersRequestConfig(params);
    const response = await this._axios.get<
      AxiosResponse<MarvelApiCharactersResponse>
    >(this._charactersUrl, requestConfig);
    return response.data.data.results;
  }

  public async getCharacter(id: number): Promise<MarvelCharacter> {
    const params = new MarvelCharacterParams(this._apiKey, id);
    const requestConfig = new MarvelCharactersRequestConfig(params);
    const response = await this._axios.get<
      AxiosResponse<MarvelApiCharactersResponse>
    >(this._charactersUrl, requestConfig);
    return response.data.data.results[0];
  }
}
