import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
// Fonts Header File
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ Title, icon, onClick }) {
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
  // Main Body
  return (
    <View style={styles.header}>
      {/* Start */}
      {/* 1 - Header Back Button */}
      <TouchableOpacity
        style={styles.img_parent}
        onPress={() => {
          onClick();
        }}
      >
        {/* <Image source={icon} style={styles.img} /> */}
        <View
          style={{
            marginLeft: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              // backgroundColor: "#E0E0E0",
              backgroundColor: "#FFD5CB",
              borderRadius: 50,
              borderWidth: 0.5,
              borderColor: "#FFD5CB",
              paddingHorizontal: 7,
              paddingVertical: 6.5,
            }}
          >
            <Text style={{ color: "black", borderRadius: 5 }}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* 2 - Header Text Title */}
      <Text style={styles.title}>{Title}</Text>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    elevation: 13,
    alignItems: "center",
    paddingHorizontal: 5,
    // borderWidth: 1,
  },
  img_parent: {
    // borderWidth: 1,
    borderColor: "black",
    padding: 0,
    width: 42,
    height: 42,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    // borderWidth: 1,
    // borderColor: "black",
    width: 35,
    height: 35,
  },
  title: {
    marginLeft: 10,
    fontFamily: "Heebo",
    letterSpacing: 1.5,
    fontSize: 15,
  },
});
