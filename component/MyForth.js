import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  TextInput,
  Text,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function MyForth({ route }) {
  // Fetch Value useState
  const { locationName: initialLocationName } = route.params;

  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [locationName, setLocationName] = useState(initialLocationName || "");
  const [errorMsg, setErrorMsg] = useState("");

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to Access Location Was Denied");
    } else {
      try {
        let location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        setMapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        console.log(location.coords.latitude, location.coords.longitude);
      } catch (error) {
        setErrorMsg("Error getting current location");
      }
    }
  };

  const pinLocationFromName = async () => {
    if (locationName.trim() === "") {
      setErrorMsg("Please enter a location name.");
      return;
    }

    try {
      const result = await Location.geocodeAsync(locationName);
      if (result.length > 0) {
        const { latitude, longitude } = result[0];
        setMapRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } else {
        setErrorMsg("Location not found.");
      }
    } catch (error) {
      setErrorMsg("Error geocoding location.");
    }
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
      <TextInput
        style={styles.input}
        placeholder="Enter Location Name (City or Country)"
        onChangeText={(text) => setLocationName(text)}
        value={locationName}
      />
      <View style={styles.btnSett}> 
      <Button title="Pin Location" color={"red"} onPress={pinLocationFromName} />
      <Button title="Current Location" color={"green"} onPress={userLocation} />
      </View>
      <Text style={styles.errorText}>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  map: {
    flex: 1,
  },
  input: {
    fontWeight: "bold",
    backgroundColor:"white",
    textAlign:"center",
    fontSize: 20,
    borderColor: "white",
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  errorText: {
    color: "red",
    // margin: 10,
  },
  btnSett:{
    borderColor:"transparent",
    borderWidth:1,
    flexDirection: "row",
    justifyContent:"space-around",
    marginHorizontal: 10,
  }
});
