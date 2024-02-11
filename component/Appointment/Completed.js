import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useFonts } from "expo-font";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { firebase } from "../firestore";

export default function Completed({ navigation }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const todoRef = firebase.firestore().collection("3 - Appointment");
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

  const handleDelete = async (id) => {
    try {
      const todoRef = firebase.firestore().collection("3 - Appointment").doc(id);
      await todoRef.delete();
      const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const getStatusText = (status) => {
    let statusColor;
    switch (status) {
      case "Accepted":
        statusColor = "green";
        break;
      case "Rejected":
        statusColor = "red";
        break;
      case "Delayed":
        statusColor = "blue";
        break;
      default:
        statusColor = "black";
    }

    return (
      <Text style={[styles.itemStatus, { color: statusColor }]}>
        Status: <Text style={styles.itemStatus_Span}>{status || "Processing"}</Text>
      </Text>
    );
  };

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

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header
            icon={require('../Pics/back.png')}
            Title={'List'}
            onClick={() => { navigation.navigate('Home') }}
          />
          <View>
            <View style={styles.Head_Img_Parent}>
              <Image source={require("../Pics/completed_1.png")} style={styles.Head_Img} />
            </View>
            <Text style={styles.Head_Txt_1}>Appointment List</Text>
            <Text style={styles.Head_Txt_2}>You Can Check Appointment List & Their Status From Here.</Text>
          </View>
          <View style={styles.itemView_Parent}>
            {appointments.map((appointment) => (
              <View style={styles.itemView} key={appointment.id}>
                {getStatusText(appointment.status)}
                <View style={styles.Sub_itemView}>
                  <View style={styles.itemImg_Parent}>
                    <Image source={require("../Pics/man_2.png")} style={styles.itemImg} />
                  </View>
                  <View style={styles.itemDetail_Parent}>
                    <Text style={styles.itemDetail_Txt_1}>{appointment.value_1}</Text>
                    <Text style={styles.itemDetail_Txt_1}>Day: {appointment.Date}</Text>
                    <Text style={styles.itemDetail_Txt_1}>{appointment.TimeSlot}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.Del_Btn} onPress={() => handleDelete(appointment.id)}>
                  <Text style={styles.Del_Btn_Txt}>Delete <MaterialCommunityIcons name="delete" size={15} color="white" /></Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
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
    flexDirection: 'column',
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
    alignSelf: "center",
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
    fontSize: 13,
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
  Head_Img_Parent: {
    // borderWidth: 0.5,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  Head_Img: {
    // borderWidth: 0.5,
    borderColor: "black",
    width: 80,
    height: 80,
  },
  Head_Txt_1: {
    // borderWidth: 0.5,
    textAlign: "center",
    fontFamily: "HeeboExtra",
    fontSize: 20,
    letterSpacing: 1.5,
    paddingBottom: 5,
  },
  Head_Txt_2: {
    // borderWidth: 0.5,
    textAlign: "center",
    fontFamily: "Kanit",
    fontSize: 13,
    letterSpacing: 1.5,
    textTransform: "capitalize",
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  Del_Btn: {
    backgroundColor: "red",
    paddingVertical: 4,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 10,
  },
  Del_Btn_Txt: {
    // borderWidth: 0.5,
    textAlign: "center",
    fontFamily: "HeeboExtra",
    letterSpacing: 2,
    color: "white",
    fontSize: 14
  },
});