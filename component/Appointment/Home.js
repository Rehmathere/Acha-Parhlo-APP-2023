import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Fonts Header File
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Linear Gradient
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
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
  // ---------------------------------------------------------
  const navigation = useNavigation();
  // It Tells If Font Is Loaded Or If Not Loaded Then Nothing Will Show,
  if (!fontsLoaded) {
    return null;
  }
  // Main Body
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#EB2F06" />
      <View style={styles.MyParentImg}>
        <Image source={require('../Pics/Appointment.png')} style={styles.fir_img} />
      </View>
      <Text style={styles.third}>Book Appointment</Text>
      <Text style={styles.third_Txt_1_E}>Please feel free to schedule appointments with our expert consultant.</Text>
      {/* Button Parent */}
      <View style={styles.BtnParent}>
        <TouchableOpacity style={styles.BtnPart1} onPress={() => navigation.navigate("BookAppointment")}>
          <Text style={styles.BtnPart2}>Book Appointment Now</Text>
        </TouchableOpacity>
      </View>
      {/* // Bottom View Part */}
      <View style={styles.bottomViewContainer}>
        <View style={styles.bottomView}>
          {/* 1 */}
          <TouchableOpacity onPress={() => navigation.navigate('Completed')}>
            <LinearGradient colors={["#FF7356", "#FFA08C", "#FF7356"]} style={{ borderRadius: 10, }}>
              <View style={styles.E_Bottom_Box}>
                <Text style={styles.E_Bottom_Box_Text}><MaterialCommunityIcons name="clipboard-list-outline" size={23} color="black" /></Text>
                <Text style={styles.E_Bottom_Box_Text_1}>List</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {/* 2 */}
          <TouchableOpacity onPress={() => navigation.navigate('MyDrawer')}>
            <LinearGradient colors={["#FF7356", "#FFA08C", "#FF7356"]} style={{ borderRadius: 10, }}>
              <View style={styles.E_Bottom_Box}>
                <Text style={styles.E_Bottom_Box_Text}><MaterialCommunityIcons name="home" size={23} color="black" /></Text>
                <Text style={styles.E_Bottom_Box_Text_1}>Home</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 49,
  },
  fir: {
    color: "black",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "black",
    padding: 1,
  },
  MyParentImg: {
    // borderWidth: 0.5,
    // borderColor:"red",
    paddingTop: 50,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  fir_img: {
    // borderWidth: 0.5,
    // borderColor: "black",
    width: 190,
    height: 190,
  },
  third: {
    // borderWidth: 0.5,
    // color: "black",
    paddingTop: 8,
    paddingBottom: 9,
    fontSize: 25,
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: "KanitBold",
  },
  third_Txt_1_E: {
    // borderWidth: 0.5,
    paddingTop: 5,
    paddingBottom: 40,
    paddingHorizontal: 30,
    fontSize: 13,
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: "Kanit",
    color: "grey",
    textTransform: "capitalize",
  },
  third_txt_1: {
    // borderWidth: 1,
    letterSpacing: 5,
    textAlign: "center",
    backgroundColor: "#EAE9E9",
    alignSelf: "center",
    fontFamily: "Kanit",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 2,
    paddingBottom: 2,
    letterSpacing: 1,
    marginVertical: 1,
  },
  bottomViewContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    width: "97%",
    alignSelf: "center",
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor: '#FFDDD5',
    paddingVertical: 9,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 15,
    shadowColor: "black",
    marginHorizontal: 10,
  },
  E_Bottom_Box: {
    borderWidth: 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
  },
  E_Bottom_Box_Text: {
    borderWidth: 0,
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 2,
    textAlign: "center",
  },
  E_Bottom_Box_Text_1: {
    borderWidth: 0,
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 2,
    fontSize: 10,
    letterSpacing: 1.5,
    textAlign: "center",
    fontFamily: "Kanit",
  },
  BtnParent: {
    // borderColor: "transparent",
    // borderWidth: 0.5,
    paddingTop: 1,
    paddingBottom: 1,
  },
  BtnPart1: {
    paddingVertical: 9,
    marginHorizontal: 37,
    textAlign: "center",
    backgroundColor: "#EB2F06",
    borderRadius: 20,
  },
  BtnPart2: {
    paddingVertical: 1,
    textAlign: "center",
    fontSize: 12,
    color: "white",
    fontFamily: "Heebo",
    letterSpacing: 3.5,
    borderRadius: 20,
    marginHorizontal: 10,
    textTransform: "uppercase"
  },
})