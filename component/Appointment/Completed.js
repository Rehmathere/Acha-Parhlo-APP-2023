import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from './Header';
// Fonts Header File
import { useFonts } from "expo-font";

export default function Completed({ navigation }) {
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
      <Header
        icon={require('../Pics/back.png')}
        Title={'List'}
        onClick={() => { navigation.navigate('Home') }}
      />
      {/* List Text */}
      <View>
        {/* Image */}
        <View style={styles.Head_Img_Parent}>
          <Image source={ require("../Pics/completed_1.png") } style={styles.Head_Img} />
        </View>
        {/* Text */}
        <Text style={styles.Head_Txt_1}>Appointment List</Text>
        <Text style={styles.Head_Txt_2}>You Can Check Appointment List & Their Status From Here.</Text>
      </View>
      {/* Box Parent */}
      <View style={styles.itemView_Parent}>
        {/* Box */}
        <View style={styles.itemView}>
          {/* Status */}
          <Text style={styles.itemStatus}>Status : <Text style={styles.itemStatus_Span}>Processing</Text></Text>
          {/* Rest Box Data */}
          <View style={styles.Sub_itemView}>
            {/* 1 */}
            <View style={styles.itemImg_Parent}>
              <Image source={require("../Pics/man_2.png")} style={styles.itemImg} />
            </View>
            {/* 2 */}
            <View style={styles.itemDetail_Parent}>
              <Text style={styles.itemDetail_Txt_1}>Rehmat Qazi</Text>
              <Text style={styles.itemDetail_Txt_1}>Day: 22</Text>
              <Text style={styles.itemDetail_Txt_1}>10:00 - 12:00</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  itemView_Parent: {
    flex: 1,
    // borderWidth: 0.5,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "baseline",
  },
  itemView: {
    width: '85%',
    backgroundColor: "#FCDFD8",
    borderWidth: 0.5,
    borderColor: "#FF977F",
    marginTop: 12,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  Sub_itemView: {
    // borderWidth: 0.5,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  itemImg_Parent: {
    // borderWidth: 0.5,
    width: "33%",
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  itemImg: {
    // borderWidth: 0.5,
    // borderColor: "black",
    width: 60,
    height: 60,
    paddingVertical: 10,
  },
  itemDetail_Parent: {
    // borderWidth: 0.5,
    width: "67%",
    paddingVertical: 1,
  },
  itemDetail_Txt_1: {
    // borderWidth: 0.5,
    textAlign: "center",
    fontFamily: "Heebo",
    fontSize: 13.5,
    letterSpacing: 2,
    marginTop: 4,
  },
  itemStatus: {
    // borderWidth: 0.5,
    fontFamily: "Kanit",
    fontSize: 12,
    letterSpacing: 1,
    textAlign: "right",
    paddingHorizontal: 11,
    paddingVertical: 2,
    borderRadius: 5,
  },
  itemStatus_Span: {
    fontFamily: "KanitBold",
    fontSize: 12.3,
    letterSpacing: 1.5,
  },
  Head_Img_Parent:{
    // borderWidth: 0.5,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  Head_Img:{
    // borderWidth: 0.5,
    borderColor: "black",
    width: 80,
    height: 80,
  },
  Head_Txt_1:{
    // borderWidth: 0.5,
    textAlign: "center",
    fontFamily: "HeeboExtra",
    fontSize: 20,
    letterSpacing: 1.5,
    paddingBottom: 5,
  },
  Head_Txt_2:{
    // borderWidth: 0.5,
    textAlign: "center",
    fontFamily: "Kanit",
    fontSize: 13,
    letterSpacing: 1.5,
    textTransform: "capitalize",
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});