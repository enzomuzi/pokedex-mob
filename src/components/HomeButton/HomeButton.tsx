import React from "react";
import { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface HomeButtonProps {
  onPress: () => void;
  title: string;
}

export default class HomeButton extends Component<HomeButtonProps> {
  render() {
    const { onPress, title } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#C22E28",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
