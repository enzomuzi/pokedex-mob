import React from "react";
import { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function SearchInput({ pokemonFilter }) {
  return (
    <TextInput
      style={style.txtBckgrd}
      placeholder="Search..."
      onChangeText={(text) => pokemonFilter(text)}
    />
  );
}

const style = StyleSheet.create({
  txtBckgrd: {
    height: 40,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
    margin: 5,
  },
});
