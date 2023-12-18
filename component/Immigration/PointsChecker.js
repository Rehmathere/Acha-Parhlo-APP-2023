import React from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function PointsChecker() {
  // Navigation
  const navigation = useNavigation();
  // Main Body
  return (
    <View style={styles.container}>
      {/* Text */}
      <Text style={styles.fir}>Apply For Test</Text>
      <View style={styles.category_parent}>
        {/* Option 1 */}
        <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate('Playground', {category: 'World-Affais'})}
        >
          <Text style={styles.category_title}>World Affairs</Text>
        </TouchableOpacity>
        {/* Option 2 */}
        <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate('Playground', {category: "science"})}
        >
          <Text style={styles.category_title}>Science</Text>
        </TouchableOpacity>
        {/* Option 3 */}
        <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate('Playground', {category: 'technology'})}
        >
          <Text style={styles.category_title}>Technology</Text>
        </TouchableOpacity>
        {/* Option 4 */}
        <TouchableOpacity
        style={styles.category}
        onPress={() => navigation.navigate('Playground', {category: 'sports'})}
        >
          <Text style={styles.category_title}>Sports</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  fir:{
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "red",
    color: "white",
    paddingVertical: 10,
    marginVertical: 5,
  },
  category_parent:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  category:{
    borderColor: "orange",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor:"orange",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 5,
    width: 125,
    height: 100,
    elevation: 5,
  },
  category_title:{
    fontSize: 20,
    color: "black",
    textAlign:"center",
    paddingTop: 25.5,
    fontWeight: "bold",
  }
});
