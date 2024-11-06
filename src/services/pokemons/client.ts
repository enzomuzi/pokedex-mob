import api from "../api";
import { PokemonApiResult } from "./types";

class PokemonClient {
  getPaginationPokemon = async (
    offset = 0,
    limit = 1300
  ): Promise<PokemonApiResult> => {
    return new Promise((resolve, reject) => {
      api
        .get(`pokemon?offset=${offset}&limit=${limit}`)
        .then((res) => resolve(res.data))
        .catch((res) => {
          reject(res);
        });
    });
  };

  getPokemon = async (id: string): Promise<PokemonApiResult> => {
    return new Promise((resolve, reject) => {
      api
        .get(`/pokemon/${id}`)
        .then((res) => resolve(res.data))
        .catch((res) => {
          reject(res);
        });
    });
  };

  getImagePokemon = (id: string): string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };
}

export { PokemonClient };
