import * as React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "react-navigation";
import { RootStackParamList } from "../../routes/app.routes";
import { getTypeColor } from "../../utils/colors";

interface PokeCardProps {
  id: string;
  name: string;
  image: string;
  type: string;
}

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  "detail",
  "poker_cards"
>;

const PokeCard: React.FC<PokeCardProps> = ({ id, name, image, type }) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: getTypeColor(type) }]}
      onPress={() => navigation.navigate("detail", { id, name, image })}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
  },
  image: {
    width: 105,
    height: 105,
    marginRight: 34,
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    flexDirection: "row",
    textAlign: "left",
  },
});

export default PokeCard;
