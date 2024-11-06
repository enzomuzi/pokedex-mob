import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { PokemonClient } from "../../services/pokemons/client";
import pokeApi from "../../services/api";
import { PokemonApiResult, Result } from "../../services/pokemons/types";

export function Poke() {
  const [pokemons, setPokemons] = useState<Result[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<any | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const client = new PokemonClient();
      const response = await client.getPaginationPokemon(0, 1300);

      setPokemons(response.results);
    };
    fetchPokemons();
  }, []);

  async function handleGetPokemon(url: string) {
    const splitedURL = url.split("/");
    const id = splitedURL[splitedURL.length - 2];

    const client = new PokemonClient();
    const response = await client.getPokemon(id);
    const imgPoke = await client.getImagePokemon(id);

    setPokemonDetails(response);
  }

  return (
    <View style={style.viewBckgrd}>
      <TextInput style={style.txtBckgrd} placeholder="Pesquisar" />
      <ScrollView>
        {pokemons.map((pokemon) => {
          const id = pokemon.url.split("/").slice(-2, -1)[0];
          const imgUrl = new PokemonClient().getImagePokemon(id);

          const capitalizeFirstLetter = (name) => {
            return name.charAt(0).toUpperCase() + name.slice(1);
          };
          const formattedName = capitalizeFirstLetter(pokemon.name);

          return (
            <View key={`${pokemon.name}-${Math.random()}`}>
              <Text>{`${formattedName}`}</Text>
              <Image
                source={{ uri: imgUrl }}
                style={{ width: 100, height: 100 }}
              />
              <Button
                title={`Detalhes de ${pokemon.name}`}
                onPress={() => handleGetPokemon(pokemon.url)}
              />
            </View>
          );
        })}
      </ScrollView>

      {/* modal com detalhes do pokemon*/}
      {pokemonDetails && (
        <View>
          <Text>Detalhes do Pokémon:</Text>
          <Text>ID: {pokemonDetails.id}</Text>
          <Text>Nome: {pokemonDetails.name}</Text>
          <Text>Altura: {pokemonDetails.height}</Text>
          <Text>Peso: {pokemonDetails.weight}</Text>
          <Text>Experiência Base: {pokemonDetails.base_experience}</Text>
          {/* listando habilidades e tipo */}
          <Text>Habilidades:</Text>
          {pokemonDetails.abilities.map((ability) => (
            <Text key={ability.ability.name}>- {ability.ability.name}</Text>
          ))}
          {pokemonDetails.types.map((type) => (
            <Text key={type.type.name}>- {type.type.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  viewBckgrd: {
    flex: 1,
    backgroundColor: "#f8f8ff",
  },
  txtBckgrd: {
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    color: "black",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    margin: 10,
  },
});
