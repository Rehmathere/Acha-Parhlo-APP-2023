import { View, Text, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { firebase } from "../firestore";
// Linear Gradient
import { LinearGradient } from 'expo-linear-gradient';

export default function Completed({ navigation }) {
  // Modal useState
  const [showStatus, setShowStatus] = useState(false)
  // Set TimeOut
  const ShowModal = () => {
    // Display
    setShowStatus(true)
    // Not Display
    setTimeout(() => {
      setShowStatus(false)
    }, 2500);
  }
  // --------- Backend Part Logic --------- 
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    // Real-time listener for changes in Firestore data
    const unsubscribe = firebase.firestore().collection("3 - Appointment").onSnapshot(snapshot => {
      const appointmentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAppointments(appointmentsData);
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const handleDelete = async (id) => {
    try {
      await firebase.firestore().collection("3 - Appointment").doc(id).delete();
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
      <Text style={[styles.itemStatus, { backgroundColor: statusColor }]}>
        Status : <Text style={styles.itemStatus_Span}>{status || "Processing"}</Text>
      </Text>
    );
  };
  // --------- Backend Part Logic --------- 
  // Fonts
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
      <ScrollView>
        <View>
          <View>
            <View style={styles.Head_Img_Parent}>
              <Image source={require("../Pics/completed_1.png")} style={styles.Head_Img} />
            </View>
            <Text style={styles.Head_Txt_1}>Appointment List</Text>
            <Text style={styles.Head_Txt_2}>You Can Check Appointment List And Their Status, Also Delete Your Appointment Request From Here.</Text>
          </View>
          <View style={styles.itemView_Parent}>
            {appointments.map((appointment) => (
              <View style={styles.itemView} key={appointment.id}>
                <LinearGradient colors={["#FDAA97", "#FEE6E2", "#FDAA97"]} style={{ borderRadius: 20, paddingHorizontal: 8, paddingVertical: 20, }}>
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
                  {/* ----- New Time Slot ----- */}
                  {appointment.status === "Delayed" && (
                    <View style={styles.itemNewTime}>
                      <Text style={styles.itemNewTime_Txt}>New Time : {appointment.showExtraTimeText}</Text>
                    </View>
                  )}
                  {/* ------------------------- */}
                  <TouchableOpacity style={styles.Del_Btn} onPress={() => { handleDelete(appointment.id); ShowModal(); }}>
                    <Text style={styles.Del_Btn_Txt}>Delete <MaterialCommunityIcons name="delete" size={15} color="white" /></Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            ))}
          </View>
          {/* --- Modal For Profile Updated Status --- */}
          <Modal
            transparent={true}
            animationType="fade"
            visible={showStatus}
          >
            <View style={styles.ParentStatus}>
              <View style={styles.sub_ParentStatus}>
                <View style={styles.ParentStatusImg}>
                  <Image source={require('../Pics/delete.png')} style={styles.StatusImg} />
                </View>
                <Text style={styles.StatusTxt_E}>Deleted</Text>
                <Text style={styles.StatusTxt}>Your Appointment Has Been Deleted</Text>
              </View>
            </View>
          </Modal>
          {/* --------------------------- */}
        </View>
      </ScrollView >
    </View >
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
    width: '83%',
    // backgroundColor: "#FCDFD8",
    // borderWidth: 0.5,
    // borderColor: "#FF977F",
    marginTop: 12,
    // paddingVertical: 20,
    // paddingHorizontal: 8,
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
    fontSize: 11.5,
    letterSpacing: 1,
    textAlign: "right",
    paddingHorizontal: 11,
    paddingVertical: 2.3,
    borderRadius: 10,
    width: "51.5%",
    alignSelf: "flex-end",
    color: "white",
    marginHorizontal: 5,
  },
  itemStatus_Span: {
    fontFamily: "Kanit",
    fontSize: 12.5,
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
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  Del_Btn: {
    backgroundColor: "#C40000",
    paddingVertical: 3.5,
    marginHorizontal: 20,
    marginTop: 12,
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
  itemNewTime: {
    // borderWidth: 0.5,
    paddingVertical: 3,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  itemNewTime_Txt: {
    borderWidth: 0.3,
    borderColor: "blue",
    paddingVertical: 2.5,
    paddingHorizontal: 7.5,
    textAlign: "right",
    fontFamily: "Heebo",
    fontSize: 10.2,
    letterSpacing: 1.5,
    color: "blue",
    backgroundColor: "#E3EEFC",
    borderRadius: 20,
  },
  ParentStatus: {
    backgroundColor: "rgba(0, 0, 0, 0.70)",
    flex: 1,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sub_ParentStatus: {
    // borderWidth: 1,
    width: "81%",
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 25,
  },
  ParentStatusImg: {
    // borderWidth: 1,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  StatusImg: {
    borderWidth: 0.5,
    borderColor: "transparent",
    // borderColor: "black",
    width: 110,
    height: 110,
  },
  StatusTxt: {
    // borderWidth: 1,
    fontSize: 13,
    paddingBottom: 10,
    paddingHorizontal: 23,
    textAlign: "center",
    fontFamily: "Kanit",
    letterSpacing: 1.2,
  },
  StatusTxt_E: {
    // borderWidth: 1,
    fontSize: 20,
    paddingBottom: 10,
    paddingHorizontal: 30,
    textAlign: "center",
    fontFamily: "HeeboExtra",
    letterSpacing: 1.5,
  },
});