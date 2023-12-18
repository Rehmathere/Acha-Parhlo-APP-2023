import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.fir}>{props.name}</Text>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  fir: {
    borderColor: "transparent",
    borderWidth: 1,
    color: "black",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "green",
    textShadowRadius: 2,
  },
});
