import React, { useEffect, useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/app.routes";
import { PokemonClient } from "../../services/pokemons/client";
import {
  PokemonDescription,
  PokemonDetail,
} from "../../services/pokemons/types";
import { getTypeColor } from "../../utils/colors";

type DetailScreenRouteProp = RouteProp<RootStackParamList, "detail">;

export default function Detail() {
  const route = useRoute<DetailScreenRouteProp>();
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail | null>(
    null
  );
  const [pokemonDescription, setPokemonDescription] =
    useState<PokemonDescription | null>(null);
  const client = new PokemonClient();

  const fetchPokemonDetails = async () => {
    try {
      const response = await client.getPokemon(route.params.id);
      setPokemonDetails(response);
    } catch (error) {
      console.error("Erro ao buscar os detalhes do Pokémon:", error);
    }
  };

  const fetchPokemonDescription = async () => {
    try {
      const response = await client.getPokemonDescription(route.params.id);
      setPokemonDescription(response);
    } catch (error) {
      console.error("Erro ao buscar os detalhes do Pokémon:", error);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
    fetchPokemonDescription();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon Details:</Text>
      {pokemonDetails ? (
        <View
          style={[
            styles.detailsContainer,
            {
              backgroundColor: getTypeColor(
                pokemonDetails.types[0]?.type.name || "default"
              ),
            },
          ]}
        >
          <Image
            source={{ uri: client.getImagePokemon(route.params.id) }}
            style={styles.image}
          />
          <View style={styles.nameIdContainer}>
            <Text style={styles.pokemonId}>ID: {pokemonDetails.id}</Text>
            <Text style={styles.pokemonName}>
              {" "}
              {pokemonDetails.name.charAt(0).toUpperCase() +
                pokemonDetails.name.slice(1)}
            </Text>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      {pokemonDetails ? (
        <View>
          <View style={styles.types}>
            {pokemonDetails.types.map((type) => (
              <Text
                key={type.type.name}
                style={[
                  styles.typeContainer,
                  { backgroundColor: getTypeColor(type.type.name) },
                ]}
              >
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </Text>
            ))}
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              Height: {pokemonDetails.height}
            </Text>
            <Text style={styles.descriptionText}>
              Weight: {pokemonDetails.weight}
            </Text>
            <Text style={styles.descriptionText}>
              Base Experience: {pokemonDetails.base_experience}
            </Text>
            <Text style={styles.descriptionHability}>Skills:</Text>
            {pokemonDetails.abilities.map((ability) => (
              <Text
                style={styles.descriptionHability}
                key={ability.ability.name}
              >
                *{" "}
                {ability.ability.name.charAt(0).toUpperCase() +
                  ability.ability.name.slice(1)}
              </Text>
            ))}
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      {pokemonDescription && pokemonDescription.flavor_text_entries ? (
        <View>
          <Text style={styles.pokeDescription}>
            {pokemonDescription.flavor_text_entries[0]?.flavor_text}
          </Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  detailsContainer: {
    borderRadius: 8,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 350,
    marginBottom: 16,
  },
  nameIdContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  pokemonName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 10,
  },
  pokemonId: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  types: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    padding: 10,
  },
  typeContainer: {
    padding: 8,
    borderRadius: 4,
    marginHorizontal: 10,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 16,
  },
  descriptionText: {
    fontSize: 20,
    marginBottom: 10,
  },
  descriptionHability: {
    fontSize: 20,
  },
  pokeDescription: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 20,
  },
});
