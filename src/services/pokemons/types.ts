export type Result = {
  id: number;
  name: string;
  url: string;
};

export type PokemonApiResult = {
  count: number;
  next?: string;
  previous?: string;
  results: Result[];
};
