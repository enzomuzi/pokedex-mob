import { useInfiniteQuery } from "react-query";
import { PokemonClient } from "./client";

const usePaginationList = (offset = 0) => {
  const pokemonClient = new PokemonClient();
  const { data, isFetching, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(["usePaginationList", offset], ({ pageParam }) =>
      pokemonClient.getPaginationPokemon(pageParam?.offset)
    );

  return {
    pokemons: data,
    isFetching,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  };
};
