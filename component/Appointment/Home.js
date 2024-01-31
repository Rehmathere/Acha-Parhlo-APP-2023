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
  const data = Array.from({ length: 8 }, (_, index) => index + 1);

  const renderItem = ({ item, index }) => {
    const isAvailable = index / 2 === 1;

    return (
      <View style={styles.thirdItem}>
        <Image source={require('../Pics/Man.png')} style={styles.third_img} />
        <Text style={styles.third_txt}>{`Consultant ${index + 1}`}</Text>
        <Text style={[styles.third_txt_1, { color: isAvailable ? 'green' : 'red' }]}>
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
          <Text style={styles.third}>Top Rated Consultant</Text>
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
            <Image source={require('../Pics/completed.png')} style={styles.bottomIcon} />
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
    // borderWidth: 1,
    // borderColor:"red",
    paddingVertical: 7,
  },
  fir_img: {
    // borderWidth: 1,
    // borderColor: "black",
    width: 240,
    height: 175,
    alignSelf: "center",
    marginHorizontal: "auto"
  },
  third: {
    // borderWidth: 1,
    // color: "black",
    paddingTop: 10,
    paddingBottom: 9,
    fontSize: 26,
    letterSpacing: 0.5,
    textAlign: "center",
    fontFamily: "HeeboExtra",
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
    width: "44.5%",
    height: 161,
    borderWidth: 0.3,
    borderRadius: 10,
    marginVertical: 6,
    marginHorizontal: 8.5,
    elevation: 1,
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
    padding: 5,
    fontFamily: "Heebo",
  },
  third_txt_1: {
    // borderWidth: 1,
    fontSize: 14,
    letterSpacing: 5,
    textAlign: "center",
    backgroundColor: "#E2DFDF",
    alignSelf: "center",
    fontFamily: "Heebo",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 2,
    paddingBottom: 3,
    letterSpacing: 0.5,
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
    backgroundColor: '#c8d6e5',
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor:"black",
  },
  bottomIcon: {
    width: 25,
    height: 25,
  },
})