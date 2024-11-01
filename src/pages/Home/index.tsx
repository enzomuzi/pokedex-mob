import { useNavigation } from "@react-navigation/native";
import { Button, StatusBar, Text, View } from "react-native";
import { AppNavigationProps } from "../../routes/app.routes";

export function Home(){
    const navigation = useNavigation<AppNavigationProps>();

    function handleNavigate(){
        navigation.navigate('poker_cards')
    }
    return(
        <View style={{flex:1 }}>
            <Text>Home</Text>
            <Button title="Navigate"  onPress={handleNavigate} />
        </View>
    )
}