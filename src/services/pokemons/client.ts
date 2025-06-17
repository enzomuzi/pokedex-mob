// PokemonClient.ts
import api from "../api";
import {
  PokemonApiResult,
  Result,
  PokemonDetail,
  PokemonDescription,
} from "./types";

class PokemonClient {
  getPaginationPokemon = async (
    offset = 0,
    limit = 1015
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

  getPokemon = async (id: string): Promise<PokemonDetail> => {
    return new Promise((resolve, reject) => {
      api
        .get(`/pokemon/${id}`)
        .then((res) => resolve(res.data as PokemonDetail))
        .catch((res) => {
          reject(res);
        });
    });
  };

  getPokemonDescription = async (name: string): Promise<PokemonDescription> => {
    return new Promise((resolve, reject) => {
      api
        .get(`/pokemon-species/${name}`)
        .then((res) => resolve(res.data as PokemonDescription))
        .catch((res) => {
          reject(res);
        });
    });
  };

  getIdPokemon = async (id: string): Promise<Result> => {
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
