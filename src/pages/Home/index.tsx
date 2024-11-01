import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";
import { AppNavigationProps } from "../../routes/app.routes";
import HomeButton from "../../components/HomeButton";

export function Home() {
  const navigation = useNavigation<AppNavigationProps>();

  function handleNavigate() {
    navigation.navigate("poker_cards");
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <Text style={{ color: "white", fontSize: 70, fontWeight: "bold" }}>
          Olá!
        </Text>
        <Text style={styles.textUpper}>
          É um prazer recebê-lo na Pokédex! Explore e descubra tudo sobre seus
          Pokémon favoritos.
        </Text>
        <Image
          source={require("../../assets/homegif/pokeball.gif")}
          style={styles.poke}
        />
      </View>
      <View style={styles.lowerView}>
        <Text style={styles.textLower}>
          Para acessar as informações sobre os Pokémon, clique no botão abaixo:
        </Text>
        <HomeButton title="Continuar" onPress={handleNavigate} />
      </View>
    </View>
  );
}

// Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cd5c5c",
  },
  upperView: {
    flex: 1,
    backgroundColor: "#cd5c5c",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  lowerView: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  poke: {
    height: 150,
    width: 150,
    justifyContent: "center",
  },
  textLower: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
    marginBottom: 10,
    paddingBottom: 10,
  },
  textUpper: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginTop: 35,
    paddingBottom: 20,
  },
});
