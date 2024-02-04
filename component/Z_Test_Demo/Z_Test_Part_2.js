import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function Z_Test_Part_2() {
  // Navigation
  const navigation = useNavigation();
  const route = useRoute();
  // ---------- Font Family ----------
  // 1 - useState
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // Expo Font Logic
  let [loaded] = useFonts({
    Archivo: require("../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
    Kanit: require("../../assets/fonts/My_Soul/Kanit-Light.ttf"),
    Heebo: require("../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
    HeeboExtra: require("../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
    KanitBold: require("../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
    KanitBlack: require("../../assets/fonts/My_Soul/Kanit-Black.ttf"),
  });
  // It Will Load Font
  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
    }
  }, [loaded]);
  // It Tells If Font Is Loaded Or If Not Loaded Then Nothing Will Show,
  if (!fontsLoaded) {
    return null;
  }
  // ---------- Font Family ----------
  // Main Body
  return (
    <View style={styles.container}>
      <Text>Admission - ( Part 2 ) </Text>
      {/* Showing Data */}
      <Text style={styles.MyTxt}>Courses Offered: {route.params.noteRoom}</Text>
      <Text style={styles.MyTxt}>Semester Fee: {route.params.noteAmount}</Text>
      <Text style={styles.MyTxt}>Degree Duration: {route.params.noteDuration}</Text>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  MyTxt: {
    // borderWidth: 0.5,
    textAlign: "center",
    fontSize: 15,
    paddingTop: 40,
    fontFamily: "Heebo"
  },
});
