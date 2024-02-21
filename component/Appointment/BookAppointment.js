import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, TextInput, Keyboard } from 'react-native'
import Header from './Header';
import CommonBtn from './CommonBtn';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
// Firebase
import { firebase } from "../firestore";
// Fonts Header File
import { useFonts } from "expo-font";
// Array For Date
let DaysList = [];

export default function BookAppointment() {
    const navigation = useNavigation();
    // ----------- Backend Part Logic -----------
    const todoRef = firebase.firestore().collection("3 - Appointment");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedDay, setSelectedDay] = useState(-1);
    const [selectedSlot, setSelectedSlot] = useState(-1);
    const addField = () => {
        if (name && name.length > 0 && email && contactNo && selectedGender !== null && selectedDay !== -1 && selectedSlot !== -1) {
            const data = {
                value_1: name,
                value_2: email,
                value_3: contactNo,
                gender: selectedGender === 0 ? "Male" : "Female",
                Date: selectedDay + 1,
                TimeSlot: slots[selectedSlot].sloT,
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
                })
                .catch((err) => {
                    alert(err);
                });
        }
    };
    // 1 - useState
    // --------------------------------------------------
    const [slots, setSlots] = useState([
        { sloT: '2:00 - 4:00 PM', selected: false },
        { sloT: '4:00 - 6:00 PM', selected: false },
        { sloT: '6:00 - 8:00 PM', selected: false },
        { sloT: '8:00 - 10:00 PM', selected: false },
        { sloT: '10:00 - 12:00 PM', selected: false },
        { sloT: '12:00 - 02:00 PM', selected: false },
    ]);
    // useState For Date
    const [days, setDays] = useState([]);
    useEffect(() => {
        DaysList = [];
        for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
            DaysList.push({ day: i, selected: false });
        }
        setDays(DaysList);
    }, []);
    const getDays = month => {
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
        <FlatList
            style={styles.container}
            data={['header', 'image', 'title', 'selectDate', 'dateList', 'timeSlots', 'studentInfo', 'confirmButton']}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
                if (item === 'header') {
                    return (
                        <Header
                            Title="Appointment Details"
                            icon={require('../Pics/back.png')}
                            onClick={() => {
                                navigation.navigate('Home');
                            }}
                        />
                    );
                } else if (item === 'image') {
                    return <Image source={require('../Pics/man_2.png')} style={styles.docImg} />;
                } else if (item === 'title') {
                    return (
                        <>
                            <Text style={styles.name}>Mr. Rehmat Qazi</Text>
                            <Text style={styles.cate}>Student Consultant</Text>
                        </>
                    );
                } else if (item === 'selectDate') {
                    return <Text style={styles.time}>Select Date</Text>;
                } else if (item === 'dateList') {
                    return (
                        <View style={{ marginTop: 20 }}>
                            {/* Flatlist For Day */}
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={days}
                                keyExtractor={(item) => item.day.toString()}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity
                                            key={item.day}
                                            style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 7,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: selectedDay === index ? 'orangered' : 'white',
                                                borderWidth: selectedDay === index ? 0 : 0.5,
                                                marginLeft: 13,
                                            }}
                                            onPress={() => {
                                                if (item.day < new Date().getDate()) {
                                                } else {
                                                    setSelectedDay(index);
                                                }
                                            }}>
                                            <Text style={[styles.date_fig, { color: selectedDay === index ? 'white' : 'black' }]}>
                                                {item.day}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </View>
                    );
                } else if (item === 'timeSlots') {
                    return (
                        <>
                            <Text style={styles.time}>Available Time Slots</Text>
                            <View>
                                {/* Flatlist For Time Slots */}
                                <FlatList
                                    numColumns={2}
                                    data={slots}
                                    keyExtractor={(item) => item.sloT}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity
                                                key={item.sloT}
                                                style={[
                                                    styles.timeSlot,
                                                    { backgroundColor: index === selectedSlot ? 'blue' : 'white' },
                                                ]}
                                                onPress={() => {
                                                    setSelectedSlot(index);
                                                }}>
                                                <Text
                                                    style={{ fontFamily: "Heebo", fontSize: 13, color: index === selectedSlot ? 'white' : 'black' }}>
                                                    {item.sloT}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    }}
                                />
                            </View>
                        </>
                    );
                } else if (item === 'studentInfo') {
                    return (
                        <View style={styles.info}>
                            <Text style={styles.StudInfo}>Student Information</Text>
                            <Text style={styles.StudName}>Student Name</Text>
                            <TextInput placeholder=' Enter Your Full Name ' onChangeText={(heading) => setName(heading)}
                                value={name} keyboardType="default" style={styles.inp} />
                            <Text style={styles.StudName}>Student Email</Text>
                            <TextInput placeholder=' Enter Your Email ' onChangeText={(email) => setEmail(email)} value={email} style={styles.inp} keyboardType="email-address" />
                            <Text style={styles.StudName}>Student Contact No</Text>
                            <TextInput placeholder=' Enter Your Contact Number ' onChangeText={(contactNo) => setContactNo(contactNo)}
                                value={contactNo} style={styles.inp} keyboardType="phone-pad" />
                            <Text style={styles.StudName}>Select Gender</Text>
                            <View style={styles.gender}>
                                {/* 1 - Male */}
                                <TouchableOpacity style={[styles.genderBox, { backgroundColor: selectedGender === 0 ? 'lightblue' : 'white' }]} onPress={() => { setSelectedGender(0) }}>
                                    <View style={styles.subGenderBox}>
                                        <FontAwesome5 name="male" size={20} color="blue" />
                                    </View>
                                </TouchableOpacity>
                                {/* 2 - Female */}
                                <TouchableOpacity style={[styles.genderBox, { backgroundColor: selectedGender === 1 ? 'pink' : 'white' }]} onPress={() => { setSelectedGender(1) }}>
                                    <View style={styles.subGenderBox}>
                                        <FontAwesome5 name="female" size={20} color="#FF033A" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                } else if (item === 'confirmButton') {
                    return (
                        <TouchableOpacity style={styles.successView} onPress={() => {
                            addField();
                            navigation.navigate('Success');
                        }}
                        >
                            <Text style={styles.successView_Txt}>Book Appointment</Text>
                        </TouchableOpacity>
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
    },
    docImg: {
        // borderWidth: 1,
        // borderColor: "black",
        width: 100,
        height: 100,
        marginTop: 40,
        alignSelf: 'center',
    },
    name: {
        fontSize: 20,
        // borderWidth: 1,
        color: "#4D0202",
        textAlign: "center",
        paddingVertical: 10,
        letterSpacing: 1,
        fontFamily: "HeeboExtra",
    },
    cate: {
        fontSize: 14,
        // borderWidth: 1,
        borderColor: "#DAF7D8",
        alignSelf: "center",
        paddingHorizontal: 20,
        backgroundColor: "#F8E0E0",
        color: "#021601",
        borderRadius: 30,
        paddingVertical: 5,
        fontFamily: "Heebo",
        letterSpacing: 1.2,
    },
    time: {
        // borderWidth: 1,
        color: "black",
        paddingTop: 25,
        paddingBottom: 10,
        fontSize: 18,
        fontFamily: "Heebo",
        textAlign: "left",
        marginLeft: 20,
    },
    timeSlot: {
        width: '40.2%',
        height: 40,
        borderRadius: 10,
        borderWidth: 0.5,
        marginVertical: 10,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    StudInfo: {
        fontSize: 26,
        color: "black",
        alignSelf: "center",
        marginVertical: 15,
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 30,
        letterSpacing: 1,
        fontFamily: "HeeboExtra"
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
        borderColor: "red",
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
        borderColor: "grey",
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
        fontSize: 25,
        fontFamily: "Heebo",
    },
    successView: {
        // borderWidth: 1,
        paddingVertical: 10,
        // paddingRight: 20,
        backgroundColor: "#EB2F06",
        marginTop: 12,
        marginBottom: 30,
        marginHorizontal: 20,
        borderRadius: 50,
    },
    successView_Txt: {
        // borderWidth: 1,
        paddingVertical: 1,
        fontSize: 15,
        fontFamily: "Heebo",
        color: "white",
        textAlign: "center",
        letterSpacing: 2.5,
    },
})  