import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import Header from './Header';
import CommonBtn from './CommonBtn';
import { useNavigation } from '@react-navigation/native';
// Fonts Header File
import { useFonts } from "expo-font";

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
  // Create data for FlatList rendering
  const data = Array.from({ length: 6 }, (_, index) => index + 1);
  const renderItem = ({ item, index }) => {
    const isAvailable = index / 2 === 1;
    // Function 
    return (
      <View style={styles.thirdItem}>
        <Image source={require('../Pics/man_2.png')} style={styles.third_img} />
        <Text style={styles.third_txt}>{`Consultant ${index + 1}`}</Text>
        <Text style={[styles.third_txt_1, { color: isAvailable ? 'green' : 'red', fontSize: 12.5, letterSpacing: 1.5, }]}>
          {isAvailable ? 'Available' : 'Busy'}
        </Text>
        <CommonBtn
          w="89%"
          h={25}
          txt="Book Appointment"
          status={isAvailable}
          onClick={() => {
            if (isAvailable) {
              navigation.navigate('BookAppointment');
            }
          }}
        />
      </View>
    );
  };
  // Main Body
  return (
    <FlatList
      style={styles.container}
      data={data}
      ListHeaderComponent={
        <>
          <StatusBar backgroundColor="red" />
          <Header
            Title="Appointment"
            icon={require('../Pics/back.png')}
            onClick={() => {
              navigation.navigate('Home');
            }}
          />
          <View style={styles.MyParentImg}>
            <Image source={require('../Pics/Appointment.png')} style={styles.fir_img} />
          </View>
          <Text style={styles.third}>Book Appointment</Text>
          <Text style={styles.third_Txt_1_E}>Please feel free to schedule appointments with our team of expert consultants.</Text>
        </>
      }
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponentStyle={styles.bottomViewContainer}
      ListFooterComponent={
        <View style={styles.bottomView}>
          {/* 1 */}
          <TouchableOpacity onPress={() => navigation.navigate('Completed')}>
            <Image source={require('../Pics/completed_1.png')} style={styles.bottomIcon} />
          </TouchableOpacity>
          {/* 1 */}
          <TouchableOpacity onPress={() => navigation.navigate('BookAppointment')}>
            <Image source={require('../Pics/Home_1.png')} style={styles.bottomIcon} />
          </TouchableOpacity>
        </View>
      }
    />
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
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  fir_img: {
    // borderWidth: 0.5,
    // borderColor: "black",
    width: 170,
    height: 170,
  },
  third: {
    // borderWidth: 1,
    // color: "black",
    paddingTop: 0,
    paddingBottom: 7,
    fontSize: 25,
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: "KanitBold",
  },
  third_Txt_1_E: {
    // borderWidth: 0.5,
    paddingTop: 1,
    paddingBottom: 30,
    paddingHorizontal: 30,
    fontSize: 13,
    letterSpacing: 1,
    textAlign: "center",
    fontFamily: "Kanit",
    color: "grey",
    textTransform: "capitalize",
  },
  third_view: {
    paddingHorizontal: 5,
    paddingVertical: 12,
    // marginHorizontal: 20, 
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  thirdItem: {
    width: "42%",
    height: 168,
    borderWidth: 0.5,
    borderColor: "red",
    borderRadius: 15,
    marginVertical: 6,
    marginHorizontal: 13,
    elevation: 8,
    paddingVertical: 3,
    paddingHorizontal: 1.5,
    backgroundColor: "#FCF3F3",
    shadowColor: "black",
  },
  third_img: {
    width: 55,
    height: 55,
    // borderWidth: 1,
    // borderColor:"black",
    alignSelf: "center",
    marginTop: 13,
  },
  third_txt: {
    // borderWidth: 1,
    textAlign: "center",
    paddingHorizontal: 5,
    paddingVertical: 7,
    fontFamily: "Heebo",
    fontSize: 13.5,
  },
  third_txt_1: {
    // borderWidth: 1,
    letterSpacing: 5,
    textAlign: "center",
    backgroundColor: "#EAE9E9",
    alignSelf: "center",
    fontFamily: "Heebo",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 2,
    paddingBottom: 3,
    letterSpacing: 1,
    marginHorizontal: 0,
  },
  bottomViewContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 20,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#D3E0EF',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: "black",
  },
  bottomIcon: {
    width: 25,
    height: 25,
  },
})