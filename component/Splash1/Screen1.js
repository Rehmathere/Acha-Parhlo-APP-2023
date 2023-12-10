import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// Fonts Header File
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

export default function Screen1() {
  // 0 - Navigation Variable
  const navigation = useNavigation();
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
    <View style={styles.container}>
      <StatusBar backgroundColor={"#EB2F06"} />
      {/* Sub Container */}
      <View style={styles.sub_container}>
        {/* img */}
        <View style={styles.img_head}>
          <Image source={require("../Pics/0.png")} style={styles.img} />
        </View>
        {/* Text */}
        <View style={styles.fir}>
          {/* 1 */}
          <Text style={{ fontFamily: 'Archivo', fontSize: 45, color: "white", textAlign: "center", borderColor: "transparent", borderWidth: 1, marginVertical: 0, marginHorizontal: 10, paddingVertical: 5, }}>Scholarship</Text>
          {/* 2 */}
          <Text style={{ fontFamily: 'Kanit', fontSize: 15, color: "white", textAlign: "center", borderColor: "transparent", borderWidth: 1, marginVertical: 0, marginHorizontal: 10, paddingVertical: 5, paddingHorizontal: 15, }}>Rewarding excellence with life-changing opportunities</Text>
        </View>
        {/* Touch Button */}
        <View style={styles.btn_head}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Screen2')}>
            <Text style={styles.txt}>Let's Started</Text>
          </TouchableOpacity>
        </View>
        {/* Cirle */}
        <View style={styles.circle_head}>
          {/* 1 */}
          <View style={styles.circle}>
            <FontAwesome name="circle" size={24} color="white" />
          </View>
          {/* 2 */}
          <View style={styles.circle}>
            <FontAwesome name="circle-o" size={24} color="white" />
          </View>
          {/* 3 */}
          <View style={styles.circle}>
            <FontAwesome name="circle-o" size={24} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EB2F06",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderColor: "transparent",
    borderWidth: 1,
  },
  sub_container: {
    flex: 1,
    backgroundColor: "#EB2F06",
    paddingVertical: 10,
    paddingHorizontal: 3,
    borderColor: "transparent",
    borderWidth: 1,
  },
  fir: {
    borderColor: "transparent",
    borderWidth: 1,
    color: "white",
    fontSize: 45,
    marginTop: 3,
    // paddingTop: 10,
    paddingVertical: 30,
    // marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  img_head: {
    borderColor: "transparent",
    borderWidth: 1,
    paddingTop: 70,
    padding: 10,
    width: "100%",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    // borderColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    width: 200,
    height: 150,
},
  btn_head: {
    borderColor: "transparent",
    borderWidth: 1,
    width: "100%",
    marginVertical: 15,
    padding: 5,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    borderColor: "transparent",
    borderWidth: 1,
    width: 230,
    marginVertical: 20,
    padding: 5,
    borderRadius: 50,
    backgroundColor: "white",
  },
  txt: {
    fontFamily:"Heebo",
    fontSize: 25,
    letterSpacing: 1,
    textAlign: "center",
  },
  circle_head: {
    borderColor: "transparent",
    borderWidth: 1,
    width: "100%",
    marginVertical: 10,
    paddingTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  circle: {
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: "transparent",
  },
});
