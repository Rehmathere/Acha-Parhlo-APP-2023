import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Z_Extra_A() {
  // Main Body
  return (
    <View style={styles.container}>
      {/* Image Slider */}
      <View style={styles.parent_img}>
        {/* Text */}
        <Text style={styles.img_text}>Image Slider</Text>
      </View>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  parent_img: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    margin: 20,
    padding: 10,
  },
  img_text: {
    backgroundColor: "red",
    color: "white",
    padding: 5,
    textAlign: "center",
    fontSize: 20,
    marginVertical: 10,
  },
});
