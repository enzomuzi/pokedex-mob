import * as React from "react";
import { Button } from "react-native-paper";

const MyComponent = () => (
  <Button
    icon="magnify-plus-outline"
    mode="contained"
    onPress={() => console.log}
  >
    Ver Mais
  </Button>
);

export default MyComponent;
