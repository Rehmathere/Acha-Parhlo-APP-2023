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
        Title={'Completed'}
        onClick={() => { navigation.navigate('Home') }}
      />
      <View>
        <FlatList
          data={[1, 1,]}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.itemView}>
                <Image
                  source={require('../Pics/Man.png')}
                  style={styles.docImage}
                />
                <View>
                  <Text style={styles.name}>{'Doctor XYZ'}</Text>
                  <Text style={styles.timing}>{'8 : 10 PM'}</Text>
                </View>
                <Text style={styles.status}>{'Completed'}</Text>
              </View>
            );
          }}
        />
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
  itemView: {
    width: '92%',
    backgroundColor: "#EAE6E5",
    height: 100,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#ADACAB",
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  docImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontFamily:"Heebo",
    marginLeft: 20,
  },
  timing: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
    fontFamily:"Kanit",
  },
  status: {
    marginLeft: 30,
    fontFamily:"Heebo",
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: '#EAE6E5',
    padding: 5,
    color: 'green',
  },
});