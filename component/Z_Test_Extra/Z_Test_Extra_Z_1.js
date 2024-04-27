import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Searchbar } from "react-native-paper";

export default function Z_Test_Extra_Z_1() {
  // Search Bar useState
  const [SearchQuery, setSearchQuery] = useState('');
  // Fonts
  const [fontsLoaded, setFontsLoaded] = useState(false);
  let [loaded] = useFonts({
    Archivo: require("../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
    Kanit: require("../../assets/fonts/My_Soul/Kanit-Light.ttf"),
    Heebo: require("../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
    HeeboExtra: require("../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
    KanitBold: require("../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
    KanitBlack: require("../../assets/fonts/My_Soul/Kanit-Black.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
    }
  }, [loaded]);
  if (!fontsLoaded) {
    return null;
  }
  // Main Body
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#EB2F06"} />
      <Text style={styles.Txt1}>Search Bar</Text>
      {/* Search Bar Code Starts Here */}
      <View style={styles.Search_Parent}>
        <Searchbar
          style={styles.Search_Input}
          placeholder=" Search Courses "
          onChangeText={setSearchQuery}
          value={SearchQuery}
          inputStyle={styles.Input_Style} 
          placeholderTextColor="#888"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Txt1: {
    paddingVertical: 10,
    backgroundColor: "yellow",
    borderWidth: 0.5,
    fontSize: 20,
    fontFamily: "KanitBold",
    textAlign: "center",
    letterSpacing: 1,
  },
  Search_Parent: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 20,
    borderWidth: 0.5,
    width: "100%",
  },
  Search_Input: {
    borderColor: "#FFE0DA",
    backgroundColor: "#FFE0DA",
    borderWidth: 0.5,
    paddingHorizontal: 0,
    width: "100%",
    borderRadius: 40,
    color: "black",
    letterSpacing: 1.5,
  },
  Input_Style: {
    fontSize: 16,
    fontFamily: "Kanit",
    letterSpacing: 1.5,
    color: "black",
  },
});
