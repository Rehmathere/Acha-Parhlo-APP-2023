import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function Splash({ navigation }) {
  // 1 - useEffect
  useEffect(
    () => {
      setTimeout(() => {
        navigation.navigate('Home')
      }, 5000);
    }, []
  )
  // Main Body
  return (
    <View style={styles.container}>
      <Text style={styles.fir}> Appointment Booking </Text>
      <Image source={require('../Pics/1z.png')} style={styles.logo} />
    </View>
  )
}

// CSS
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EB2F06",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fir: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    // borderWidth: 1,
    // borderColor: "black",
    padding: 1,
  },
  logo: {
    // borderWidth: 1,
    // borderColor: "black",
    width: "95%",
    height: 320,
  },
})