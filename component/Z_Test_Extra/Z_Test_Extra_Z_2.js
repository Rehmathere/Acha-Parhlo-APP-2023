import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firestore";
// Fonts Header File
import { useFonts } from "expo-font";

export default function Z_Test_Extra_Z_2({ route }) {
  // Navigation
  const navigation = useNavigation();
  const [noteImage, setNoteImage] = useState(route.params.item.MyImage);
  const [noteTitle, setNoteTitle] = useState(route.params.item.name1);
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
      {/* StatusBar */}
      <StatusBar backgroundColor={"red"} />
      {/* Main */}
      <Image source={{ uri: noteImage }} style={styles.image} />
      <Text style={styles.label}>University : </Text>
      <Text style={styles.text}>{noteTitle}</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Z_Test_Extra_Z_1")}
        >
          <Text style={styles.btnTxt}>Move Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  label: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
  text: {
    borderWidth: 0.3,
    fontSize: 15,
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginVertical: 10,
    textAlign: "center",
    letterSpacing: 2,
    fontFamily: "KanitBold",
  },
  btn: {
    borderColor: "blue",
    paddingVertical: 6,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "blue",
    marginVertical: 10,
    marginHorizontal: 11,
    width: "90%",
  },
  btnTxt: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontFamily: "Heebo",
    letterSpacing: 1.5,
  },
  buttonView: {
    flexDirection: "column",
  },
  image: {
    borderColor: "white",
    borderWidth: 1,
    width: "50%",
    height: 105,
    marginVertical: 0,
    marginLeft: 70,
  },
});
