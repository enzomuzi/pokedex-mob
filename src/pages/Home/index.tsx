import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";
import { AppNavigationProps } from "../../routes/app.routes";
import HomeButton from "../../components/HomeButton/HomeButton";
import { useFonts } from "expo-font";

export function Home() {
  const navigation = useNavigation<AppNavigationProps>();

  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../../assets/fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Font is loading...</Text>;
  }
  function handleNavigate() {
    navigation.navigate("poker_cards");
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <Text
          style={{
            color: "white",
            fontSize: 70,
            fontWeight: "bold",
            fontFamily: "Roboto-Black",
          }}
        >
          Hello!
        </Text>
        <Text style={styles.textUpper}>
          It's a pleasure to welcome you to the Pokédex! Explore and discover
          everything about your Favorite Pokémon.
        </Text>
        <Image
          source={require("../../assets/images/pikachu.png")}
          style={styles.poke}
        />
      </View>
      <View style={styles.lowerView}>
        <Text style={styles.textLower}>
          To access information about Pokémon, click the button below:
        </Text>
        <HomeButton title="Continue" onPress={handleNavigate} />
      </View>
    </View>
  );
}

// Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C22E28",
  },
  upperView: {
    flex: 1,
    backgroundColor: "#C22E28",
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
  pokeball: {
    height: 100,
    width: 100,
    margin: 70,
    justifyContent: "center",
  },
  textLower: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    margin: 20,
    paddingBottom: 30,
    fontFamily: "Roboto-Black",
  },
  textUpper: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    margin: 10,
    paddingBottom: 20,
    fontFamily: "Roboto-Black",
  },
});
