export const typesColors = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  unknown: "#A8A8A8",
  shadow: "#606060",
};

export const getTypeColor = (type: string) => {
  return typesColors[type as keyof typeof typesColors] || "#A8A8A8";
};

export const formatNumber = (num: number) => {
  return num.toString().padStart(3, "0");
};
