import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Home } from "../pages/Home"
import { Poke } from "../pages/Poke"

type AppRoutes = {
    home:undefined,
    poker_cards:undefined
  }

export type AppNavigationProps = NativeStackNavigationProp<AppRoutes>;

 
export function AppRoutes(){
    const { Navigator,Screen } = createNativeStackNavigator<AppRoutes>();

    return(
        <Navigator initialRouteName="home"  screenOptions={{
            headerShown:false
        }}>
            <Screen name="home" component={Home} />
            <Screen name="poker_cards" component={Poke} />
        </Navigator>
    )
}