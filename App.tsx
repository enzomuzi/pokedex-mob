import { StatusBar, Text, View } from "react-native";
import ReactQueryProvider from "./src/services/react-query";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <ReactQueryProvider>
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar />
        <Routes />
      </View>
    </ReactQueryProvider>
  );
}
