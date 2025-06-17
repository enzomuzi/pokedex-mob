import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Home } from "../pages/Home";
import { Poke } from "../pages/Poke";
import Detail from "../pages/Detail/Detail";
import { RouteProp } from "@react-navigation/native";

type AppRoutes = {
  home: undefined;
  poker_cards: undefined;
  detail: undefined;
};

export type AppNavigationProps = NativeStackNavigationProp<AppRoutes>;

export type RootStackParamList = {
  home: undefined;
  poker_cards: { name: string; id: string; image: string };
  detail: {
    name: string;
    image: string;
    type: string;
    id: string;
    results: any;
  };
};

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="poker_cards" component={Poke} />
      <Screen
        name="detail"
        component={Detail}
        options={({
          route,
        }: {
          route: RouteProp<RootStackParamList, "detail">;
        }) => {
          const title = route.params?.name || "Detalhes";
          return {
            headerShown: true,
            headerBackTitle: "Voltar",
            headerBackTitleStyle: { fontSize: 30 },
            headerTitle: title,
          };
        }}
      />
    </Navigator>
  );
}
