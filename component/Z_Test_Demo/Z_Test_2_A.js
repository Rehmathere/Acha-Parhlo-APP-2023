import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Z_Test_Part_1 from "./Z_Test_Part_1";
import Z_Test_Part_2 from "./Z_Test_Part_2";

const top = createMaterialTopTabNavigator();

export default function Z_Test_2_A({ route }) {

  const navigation = useNavigation();
  const [noteImage, setNoteImage] = useState(route.params.item.MyImage);
  const [noteTitle, setNoteTitle] = useState(route.params.item.name1);
  const [noteText, setNoteText] = useState(route.params.item.name2);
  const [noteRoom, setNoteRoom] = useState(route.params.item.name3);
  const [noteAmount, setNoteAmount] = useState(route.params.item.name4);
  const [noteDuration, setNoteDuration] = useState(route.params.item.name5);
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

  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
    }
  }, [loaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: noteImage }} style={styles.image} />
      <Text style={styles.label}>University: </Text>
      <Text style={styles.text}>{noteTitle}</Text>

      {/* Drawer */}
      <top.Navigator>
        {/* Screen 1 */}
        <top.Screen
          name="Z_Test_Part_1"
          component={Z_Test_Part_1}
          initialParams={{
            noteTitle,
            noteText,
            // Add other data to pass here
          }}
          options={{
            tabBarLabel: "Overview",
            tabBarLabelStyle: {
              fontFamily: "Heebo",
              letterSpacing: 0.8,
            },
            tabBarInactiveTintColor: "grey",
            tabBarIndicatorStyle: {
              backgroundColor: "#EB2F06",
              borderWidth: 1.4,
              borderColor: "#EB2F06",
            },
            tabBarActiveTintColor: "#EB2F06",
          }}
        />

        {/* Screen 2 */}
        <top.Screen
          name="Z_Test_Part_2"
          component={Z_Test_Part_2}
          initialParams={{
            noteRoom,
            noteAmount,
            noteDuration,
            // Add other data to pass here
          }}
          options={{
            tabBarLabel: "Admission",
            tabBarLabelStyle: {
              fontFamily: "Heebo",
              letterSpacing: 0.8,
            },
            tabBarInactiveTintColor: "grey",
            tabBarIndicatorStyle: {
              backgroundColor: "#EB2F06",
              borderWidth: 1.4,
              borderColor: "#EB2F06",
            },
            tabBarActiveTintColor: "#EB2F06",
          }}
        />
      </top.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
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
  image: {
    borderColor: "white",
    borderWidth: 1,
    width: "50%",
    height: 105,
    marginVertical: 0,
    marginLeft: 70,
  },
});
