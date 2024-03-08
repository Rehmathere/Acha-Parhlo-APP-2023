import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native'
// Vector Header File
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Parent_Counselling() {
  // Constant Navigatiom
  const navigation = useNavigation();
  // Main Body
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"orange"} />
      <Text style={styles.fir}>Floating Button</Text>
      {/* Floating Button Pressed */}
      <View style={styles.ext}>
        <TouchableOpacity 
        style={styles.butt}
        onPress={() => navigation.navigate('Virtual_Counselling')}
        >
          <MaterialCommunityIcons name="chat" size={39} color={"black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    paddingHorizontal: 15,
  },
  fir: {
    borderColor: "yellow",
    borderWidth: 1,
    color: "black",
    fontSize: 30,
    marginTop: 3,
    marginBottom: 30,
    backgroundColor: "yellow",
    textAlign: "center",
    fontWeight: "bold",
  },
  ext:{
    position: "absolute",
    right: 30,
    bottom: 30,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  butt: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: "red",
    shadowRadius: 20,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});