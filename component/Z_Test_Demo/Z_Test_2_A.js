import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { firebase } from "../firestore";

export default function Z_Test_2_A() {
  // Navigation
  const navigation = useNavigation();
  // --------- Backend Part Logic ---------
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const todoRef = firebase.firestore().collection("Practice App");
        const snapshot = await todoRef.get();
        const appointmentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(appointmentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // Delete 
  const handleDelete = async (id) => {
    try {
      const todoRef = firebase.firestore().collection("Practice App").doc(id);
      await todoRef.delete();
      // Refresh the data after deletion
      const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  // --------- Backend Part Logic ---------
  // - Fonts -
  const [fontsLoaded, setFontsLoaded] = useState(false);
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
  // Main Body
  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.fir}>Appointment List</Text>
      {/* Main Firebase Body */}
      <ScrollView>
        {appointments.map((appointment) => (
          <View key={appointment.id} style={styles.Data_Box}>
            <Text style={styles.Data_Box_Txt}>Name : {appointment.value_1}</Text>
            <Text style={styles.Data_Box_Txt}>Email : {appointment.value_2}</Text>
            <Text style={styles.Data_Box_Txt}>Contact No : {appointment.value_3}</Text>
            <Text style={styles.Data_Box_Txt}>Gender : {appointment.gender}</Text>
            <Text style={styles.Data_Box_Txt}>Date : {appointment.Date}</Text>
            <Text style={styles.Data_Box_Txt}>TimeSlot : {appointment.TimeSlot}</Text>
            {/* Delete Button */}
            <TouchableOpacity style={styles.Del_Btn} onPress={() => handleDelete(appointment.id)}>
              <Text style={styles.Del_Btn_Txt}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightyellow",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  fir: {
    fontFamily: "HeeboExtra",
    paddingVertical: 20,
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "aqua",
    letterSpacing: 1.5,
    marginBottom: 50,
  },
  Data_Box: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "pink",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 10,
  },
  Data_Box_Txt: {
    borderWidth: 0.5,
    borderColor: "transparent",
    paddingVertical: 2,
    fontFamily: "Kanit",
    textAlign: "left",
    fontSize: 13,
    paddingHorizontal: 20,
  },
  Del_Btn: {
    backgroundColor: "red",
    paddingVertical: 4,
    borderRadius: 50,
    marginHorizontal: 60,
    marginVertical: 4,
  },
  Del_Btn_Txt: {
    textAlign: "center",
    fontFamily: "Heebo",
    color: "white",
    letterSpacing: 1.5,
  },
});
