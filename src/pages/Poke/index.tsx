import * as React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Modal,
  Button,
  ImageBackground,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { PokemonClient } from "../../services/pokemons/client";
import PokeCard from "../../components/PokeCard/PokeCard";
import SearchInput from "../../components/SearchInput/Search";
import { Result } from "../../services/pokemons/types";

export function Poke() {
  const [pokemons, setPokemons] = useState<Result[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<any | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [pokemonTypes, setPokemonTypes] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemons = async () => {
    setIsLoading(true);
    const client = new PokemonClient();
    const response = await client.getPaginationPokemon(0, 1300);
    setPokemons(response.results);

    const types = await Promise.all(
      response.results.map(async (pokemon) => {
        const id = pokemon.url.split("/").slice(-2, -1)[0];
        const details = await client.getPokemon(id);
        return { id, type: details.types[0].type.name };
      })
    );

    const typesMap = Object.fromEntries(types.map((t) => [t.id, t.type]));
    setPokemonTypes(typesMap);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const pokemonFilter = (name) => {
    if (name === "") {
      fetchPokemons();
    } else {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.includes(name)
      );
      setPokemons(filteredPokemons);
    }
  };

  return (
    <View style={styles.viewBckgrd}>
      <SearchInput pokemonFilter={pokemonFilter} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          margin: 5,
          padding: 5,
        }}
      >
        Pokedéx
      </Text>
      <ImageBackground
        source={require("../../assets/images/bg-poke.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        {isLoading ? (
          <View style={styles.spinnerContainer}>
            <Image
              source={require("../../assets/homegif/pokeball.gif")}
              style={styles.spinnerImage}
            />
          </View>
        ) : (
          <ScrollView>
            {pokemons.map((pokemon) => {
              const id = pokemon.url.split("/").slice(-2, -1)[0];
              const imgUrl = new PokemonClient().getImagePokemon(id);
              const type = pokemonTypes[id];

              const capitalizeFirstLetter = (name) => {
                return name.charAt(0).toUpperCase() + name.slice(1);
              };
              const formattedName = capitalizeFirstLetter(pokemon.name);

              return (
                <View style={styles.container} key={id}>
                  {type && (
                    <PokeCard
                      id={id}
                      name={formattedName}
                      image={imgUrl}
                      type={type}
                    />
                  )}
                </View>
              );
            })}
          </ScrollView>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBckgrd: {
    flex: 1,
    backgroundColor: "#f8f8ff",
  },
  container: {
    margin: 5,
    padding: 5,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
