export type PokemonDetail = {
  id: string;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: Array<{ ability: { name: string } }>;
  types: Array<{ type: { name: string } }>;
};

export type PokemonDescription = {
  flavor_text_entries: {
    flavor_text: string;
  };
};

export type Result = {
  id: string;
  name: string;
  url: string;
  type: string;
};

export type PokemonApiResult = {
  count: number;
  next?: string;
  previous?: string;
  results: Result[];
};
