import axios, { AxiosInstance, AxiosResponse } from "axios";
import MarvelApiData from "./models/MarvelApiData";
import MarvelApiCharacter from "./models/MarvelCharacter";

interface MarvelApiCharactersResponse {
  code: string;
  status: string;
  data: MarvelApiData;
  results: MarvelApiCharacter[];
}

export default class MarvelService {
  private readonly _baseUrl = "https://gateway.marvel.com:443/v1/public/";
  private readonly _apiKey = "3dc495ebcbabdb1d1c769df20ae5fc6d";
  private readonly _charactersUrl = "characters";
  private readonly _axios: AxiosInstance = axios.create({
    baseURL: this._baseUrl,
  });

  public async getAllCharacters(): Promise<MarvelApiCharacter[]> {
    const response = await this._axios.get<
      AxiosResponse<MarvelApiCharactersResponse>
    >(this._charactersUrl, {
      params: { apikey: this._apiKey, limit: 9, offset: 0 },
    });
    return response.data.data.results;
  }

  public async getCharacter(id: number): Promise<MarvelApiCharacter> {
    const response = await this._axios.get<
      AxiosResponse<MarvelApiCharactersResponse>
    >(this._charactersUrl, { params: { apikey: this._apiKey, id } });
    return response.data.data.results[0];
  }
}
