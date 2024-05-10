import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
  Modal,
} from "react-native";
import Header from "./Header";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// Firebase
import { firebase } from "../firestore";
// Fonts Header File
import { useFonts } from "expo-font";
// Array For Date
let DaysList = [];

export default function BookAppointment() {
  const navigation = useNavigation();
  // Modal for Appointment Booking Loading
  const [showStatus_Loading, setShowStatus_Loading] = useState(false);
  // Set TimeOut
  const ShowModal_Loading = () => {
    // Display
    setShowStatus_Loading(true);
    // Not Display
    setTimeout(() => {
      setShowStatus_Loading(false);
      navigation.navigate("Success"); // Navigate to success screen after 3 seconds
    }, 3000);
  };

  // ----------- Backend Part Logic -----------
  const todoRef = firebase.firestore().collection("3 - Appointment");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [showStatus, setShowStatus] = useState(false); // Modal useState
  const addField = () => {
    if (
      name &&
      name.length > 0 &&
      email &&
      contactNo &&
      selectedGender !== null &&
      selectedDay !== -1 &&
      selectedSlot !== -1
    ) {
      ShowModal_Loading(); // Call the function to show loading modal
      const currentUser = firebase.auth().currentUser;
      const data = {
        value_1: name,
        value_2: email,
        value_3: contactNo,
        gender: selectedGender === 0 ? "Male" : "Female",
        Date: selectedDay + 1,
        TimeSlot: slots[selectedSlot].sloT,
        My_User: currentUser ? currentUser.email : null,
      };
      todoRef
        .add(data)
        .then(() => {
          setName("");
          setEmail("");
          setContactNo("");
          setSelectedGender(null);
          setSelectedDay(-1);
          setSelectedSlot(-1); // Reset selectedSlot state
          Keyboard.dismiss();
          // Removed navigation to success screen here as it's handled in ShowModal_Loading
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      setShowStatus(true); // Show Modal
      setTimeout(() => {
        setShowStatus(false); // Hide Modal after 2.5 seconds
      }, 2500);
    }
  };
  // ----------- Date And Time Slot Checked ------------
  const [existingAppointments, setExistingAppointments] = useState([]);
  useEffect(() => {
    todoRef.get().then((querySnapshot) => {
      const appointments = [];
      querySnapshot.forEach((doc) => {
        const appointmentData = doc.data();
        if (appointmentData.Date >= new Date().getDate()) {
          appointments.push(appointmentData);
        } else {
          doc.ref
            .delete()
            .catch((error) =>
              console.error("Error removing document: ", error)
            );
        }
      });
      setExistingAppointments(appointments);
    });
  }, []);
  // ----------- Date And Time Slot Checked ------------

  // useState For Date
  const [days, setDays] = useState([]);
  useEffect(() => {
    DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({ day: i, selected: false });
    }
    setDays(DaysList);
  }, []);
  const getDays = (month) => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 29;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };

  // 1 - useState
  // --------------------------------------------------
  const [slots, setSlots] = useState([
    { sloT: "8:00 - 9:00 AM", selected: false },
    { sloT: "9:00 - 10:00 AM", selected: false },
    { sloT: "10:00 - 11:00 AM", selected: false },
    { sloT: "11:00 - 12:00 PM", selected: false },
    { sloT: "12:00 - 01:00 PM", selected: false },
    { sloT: "01:00 - 02:00 PM", selected: false },
  ]);

  // Expo Font Logic
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
    <FlatList
      style={styles.container}
      data={[
        "header",
        "image",
        "title",
        "selectDate",
        "dateList",
        "timeSlots",
        "studentInfo",
        "confirmButton",
      ]}
      keyExtractor={(item) => item}
      renderItem={({ item }) => {
        if (item === "header") {
          return (
            <Header
              Title="Appointment Details"
              icon={require("../Pics/back_2.png")}
              onClick={() => {
                navigation.navigate("Home");
              }}
            />
          );
        } else if (item === "image") {
          return (
            <Image
              source={require("../Pics/man_2.png")}
              style={styles.docImg}
            />
          );
        } else if (item === "title") {
          return (
            <>
              <Text style={styles.name}>Mr. Rehmat Qazi</Text>
              <Text style={styles.cate}>Student Consultant</Text>
            </>
          );
        } else if (item === "selectDate") {
          return <Text style={styles.time}>Select Date</Text>;
        } else if (item === "dateList") {
          return (
            <View style={{ marginTop: 20 }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={days}
                keyExtractor={(item) => item.day.toString()}
                renderItem={({ item, index }) => {
                  const isDateBooked = existingAppointments.find(
                    (appointment) => appointment.Date === index + 1
                  );
                  return (
                    <TouchableOpacity
                      key={item.day}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 7,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:
                          selectedDay === index
                            ? "orangered"
                            : isDateBooked
                            ? "#FFB8A8"
                            : "white",
                        borderWidth: selectedDay === index ? 0 : 0.5,
                        marginLeft: 13,
                        borderColor: "#A5A5A5",
                      }}
                      onPress={() => {
                        if (item.day < new Date().getDate()) {
                        } else {
                          setSelectedDay(index);
                        }
                      }}
                    >
                      <Text
                        style={[
                          styles.date_fig,
                          { color: selectedDay === index ? "white" : "black" },
                        ]}
                      >
                        {item.day}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          );
        } else if (item === "timeSlots") {
          return (
            <>
              <Text style={styles.time_E}>Available Time Slots</Text>
              <View>
                <FlatList
                  numColumns={2}
                  data={slots}
                  keyExtractor={(item) => item.sloT}
                  renderItem={({ item, index }) => {
                    const isTimeSlotBooked = existingAppointments.find(
                      (appointment) =>
                        appointment.Date === selectedDay + 1 &&
                        appointment.TimeSlot === item.sloT
                    );
                    const isTimeSlotAvailable = !isTimeSlotBooked;
                    return (
                      <TouchableOpacity
                        key={item.sloT}
                        style={[
                          styles.timeSlot,
                          {
                            backgroundColor:
                              index === selectedSlot
                                ? "orangered"
                                : isTimeSlotAvailable
                                ? "white"
                                : "#FFBFB1",
                          },
                        ]}
                        disabled={!isTimeSlotAvailable}
                        onPress={() => {
                          setSelectedSlot(index);
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Heebo",
                            fontSize: 12.5,
                            letterSpacing: 1.5,
                            color: index === selectedSlot ? "white" : "black",
                          }}
                        >
                          {item.sloT}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </>
          );
        } else if (item === "studentInfo") {
          return (
            <View style={styles.info}>
              <Text style={styles.StudInfo}>Student Information</Text>
              <Text style={styles.StudName}>Student Name</Text>
              <TextInput
                placeholder=" Enter Your Full Name "
                onChangeText={(heading) => setName(heading)}
                value={name}
                keyboardType="default"
                style={styles.inp}
              />
              <Text style={styles.StudName}>Student Email</Text>
              <TextInput
                placeholder=" Enter Your Email "
                onChangeText={(email) => setEmail(email)}
                value={email}
                style={styles.inp}
                keyboardType="email-address"
              />
              <Text style={styles.StudName}>Student Contact No</Text>
              <TextInput
                placeholder=" Enter Your Contact Number "
                onChangeText={(contactNo) => setContactNo(contactNo)}
                value={contactNo}
                style={styles.inp}
                keyboardType="phone-pad"
              />
              <Text style={styles.StudName}>Select Gender</Text>
              <View style={styles.gender}>
                <TouchableOpacity
                  style={[
                    styles.genderBox,
                    {
                      backgroundColor:
                        selectedGender === 0 ? "#D2D9FF" : "white",
                    },
                  ]}
                  onPress={() => {
                    setSelectedGender(0);
                  }}
                >
                  <View style={styles.subGenderBox}>
                    <FontAwesome5 name="male" size={20} color="blue" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.genderBox,
                    {
                      backgroundColor:
                        selectedGender === 1 ? "#FFD2D2" : "white",
                    },
                  ]}
                  onPress={() => {
                    setSelectedGender(1);
                  }}
                >
                  <View style={styles.subGenderBox}>
                    <FontAwesome5 name="female" size={20} color="#FF033A" />
                  </View>
                </TouchableOpacity>
              </View>
              {/* Modal for Appointment Booking Loading */}
              <Modal
                transparent={true}
                animationType="fade"
                visible={showStatus_Loading}
              >
                <View style={styles.ParentStatus}>
                  <View style={styles.sub_ParentStatus}>
                    <View style={styles.ParentStatusImg}>
                      <Image
                        source={require("../Pics/Ext_Loader_1.gif")}
                        style={styles.StatusImg_1}
                      />
                    </View>
                    <Text style={styles.StatusTxt_E}>Booking ...</Text>
                    <Text style={styles.StatusTxt}>
                      Please Hold We Are Booking Your Appointment.
                    </Text>
                  </View>
                </View>
              </Modal>
            </View>
          );
        } else if (item === "confirmButton") {
          return (
            <>
              <TouchableOpacity style={styles.successView} onPress={addField}>
                <Text style={styles.successView_Txt}>Book Appointment</Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="fade"
                visible={showStatus}
              >
                <View style={styles.ParentStatus}>
                  <View style={styles.sub_ParentStatus}>
                    <View style={styles.ParentStatusImg}>
                      <Image
                        source={require("../Pics/Errorr.png")}
                        style={styles.StatusImg}
                      />
                    </View>
                    <Text style={styles.StatusTxt_E}>Booking Failed</Text>
                    <Text style={styles.StatusTxt}>
                      Kindly Complete all required fields for successfull
                      appointment submission
                    </Text>
                  </View>
                </View>
              </Modal>
            </>
          );
        }
      }}
    />
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 5,
  },
  docImg: {
    // borderWidth: 1,
    // borderColor: "black",
    width: 100,
    height: 100,
    marginTop: 40,
    alignSelf: "center",
  },
  name: {
    fontSize: 16,
    // borderWidth: 1,
    color: "#4D0202",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 10,
    letterSpacing: 1,
    fontFamily: "HeeboExtra",
  },
  cate: {
    fontSize: 13,
    // borderWidth: 1,
    borderColor: "#DAF7D8",
    alignSelf: "center",
    paddingHorizontal: 10,
    backgroundColor: "#F8E0E0",
    color: "#021601",
    borderRadius: 30,
    paddingVertical: 3,
    fontFamily: "Kanit",
    letterSpacing: 1.2,
    marginBottom: 20,
  },
  time: {
    // borderWidth: 0.5,
    color: "black",
    paddingTop: 30,
    paddingBottom: 5,
    fontSize: 15,
    fontFamily: "Heebo",
    textAlign: "left",
    marginLeft: 15,
  },
  time_E: {
    // borderWidth: 0.5,
    color: "black",
    paddingTop: 40,
    paddingBottom: 15,
    fontSize: 15,
    fontFamily: "Heebo",
    textAlign: "left",
    marginLeft: 15,
  },
  timeSlot: {
    width: "40.2%",
    height: 40,
    borderRadius: 10,
    borderColor: "#A5A5A5",
    borderWidth: 0.5,
    marginVertical: 6,
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  StudInfo: {
    fontSize: 26,
    color: "black",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 45,
    paddingHorizontal: 22,
    paddingVertical: 0,
    borderRadius: 30,
    letterSpacing: 1.5,
    fontFamily: "HeeboExtra",
    // borderWidth: 0.5,
  },
  StudName: {
    color: "black",
    paddingTop: 15,
    paddingBottom: 13,
    fontSize: 14,
    fontFamily: "Heebo",
    textAlign: "left",
    marginLeft: 20,
    letterSpacing: 1,
  },
  inp: {
    borderWidth: 0.5,
    borderColor: "#A5A5A5",
    marginHorizontal: 20,
    borderRadius: 10,
    fontSize: 14,
    paddingHorizontal: 15,
    paddingVertical: 3,
    fontFamily: "Kanit",
    letterSpacing: 1.5,
  },
  gender: {
    // borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  genderBox: {
    borderWidth: 0.5,
    borderColor: "#A5A5A5",
    width: "18%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    marginHorizontal: 17,
  },
  subGenderBox: {
    // borderWidth: 1,
    // borderColor: "black",
    alignSelf: "center",
  },
  info: {
    paddingBottom: 10,
  },
  date_fig: {
    fontSize: 20,
    fontFamily: "Heebo",
  },
  successView: {
    // borderWidth: 1,
    paddingVertical: 8,
    // paddingRight: 20,
    backgroundColor: "#EB2F06",
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 25,
    borderRadius: 50,
  },
  successView_Txt: {
    // borderWidth: 1,
    paddingVertical: 1,
    fontSize: 17,
    fontFamily: "Kanit",
    color: "white",
    textAlign: "center",
    letterSpacing: 2.5,
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
  StatusImg_1: {
    borderWidth: 0.5,
    borderColor: "transparent",
    borderColor: "black",
    width: 86,
    height: 50,
  },
  StatusTxt: {
    // borderWidth: 1,
    fontSize: 13,
    paddingBottom: 10,
    paddingHorizontal: 23,
    textAlign: "center",
    fontFamily: "Kanit",
    letterSpacing: 1.2,
    textTransform: "capitalize",
  },
  StatusTxt_E: {
    // borderWidth: 1,
    fontSize: 20,
    paddingBottom: 10,
    paddingHorizontal: 30,
    textAlign: "center",
    fontFamily: "HeeboExtra",
    letterSpacing: 1.5,
    textTransform: "capitalize",
  },
});
