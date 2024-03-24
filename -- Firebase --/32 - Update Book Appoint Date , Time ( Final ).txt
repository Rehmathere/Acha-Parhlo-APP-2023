import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView, TextInput, Keyboard } from 'react-native'
import Header from '../Appointment/Header';
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
    const todoRef = firebase.firestore().collection("New Practice App");
    const [selectedDay, setSelectedDay] = useState(-1);
    const [selectedSlot, setSelectedSlot] = useState(-1);
    const [existingAppointments, setExistingAppointments] = useState([]);
    const addField = () => {
        if (selectedDay !== -1 && selectedSlot !== -1) {
            const data = {
                Date: selectedDay + 1,
                TimeSlot: slots[selectedSlot].sloT,
            };
            todoRef
                .add(data)
                .then(() => {
                    setSelectedDay(-1);
                    setSelectedSlot(-1); // Reset selectedSlot state
                    Keyboard.dismiss();
                })
                .catch((err) => {
                    alert(err);
                });
        }
    };
    useEffect(() => {
        todoRef.get().then((querySnapshot) => {
            const appointments = [];
            querySnapshot.forEach((doc) => {
                appointments.push(doc.data());
            });
            setExistingAppointments(appointments);
        });
    }, []);
    // 1 - useState
    // --------------------------------------------------
    const [slots, setSlots] = useState([
        { sloT: '8:00 - 9:00 AM', selected: false },
        { sloT: '9:00 - 10:00 AM', selected: false },
        { sloT: '10:00 - 11:00 AM', selected: false },
        { sloT: '11:00 - 12:00 PM', selected: false },
        { sloT: '12:00 - 01:00 PM', selected: false },
        { sloT: '01:00 - 02:00 PM', selected: false },
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
                                    const isDateBooked = existingAppointments.find(appointment => appointment.Date === index + 1);
                                    return (
                                        <TouchableOpacity
                                            key={item.day}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: 7,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: selectedDay === index ? 'orangered' : isDateBooked ? 'pink' : 'white',
                                                borderWidth: selectedDay === index ? 0 : 0.5,
                                                marginLeft: 13,
                                                borderColor: "grey",
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
                            <Text style={styles.time_E}>Available Time Slots</Text>
                            <View>
                                {/* Flatlist For Time Slots */}
                                <FlatList
                                    numColumns={2}
                                    data={slots}
                                    keyExtractor={(item) => item.sloT}
                                    renderItem={({ item, index }) => {
                                        const isTimeSlotBooked = existingAppointments.find(appointment => appointment.Date === selectedDay + 1 && appointment.TimeSlot === item.sloT);
                                        const isTimeSlotAvailable = !isTimeSlotBooked;
                                        return (
                                            <TouchableOpacity
                                                key={item.sloT}
                                                style={[
                                                    styles.timeSlot,
                                                    { backgroundColor: index === selectedSlot ? 'blue' : isTimeSlotAvailable ? 'white' : 'pink' },
                                                ]}
                                                disabled={!isTimeSlotAvailable}
                                                onPress={() => {
                                                    setSelectedSlot(index);
                                                }}>
                                                <Text
                                                    style={{ fontFamily: "Heebo", fontSize: 12.5, letterSpacing: 1.5, color: index === selectedSlot ? 'white' : 'black' }}>
                                                    {item.sloT}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    }}
                                />
                            </View>
                        </>
                    );
                } else if (item === 'confirmButton') {
                    return (
                        <TouchableOpacity style={styles.successView} onPress={() => {
                            addField();
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    docImg: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 20,
    },
    name: {
        fontFamily: 'HeeboExtra',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    cate: {
        fontFamily: 'Kanit',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
    time: {
        fontFamily: 'KanitBold',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    date_fig: {
        fontFamily: 'HeeboExtra',
        fontSize: 20,
    },
    time_E: {
        fontFamily: 'KanitBold',
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
    },
    timeSlot: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
    },
    successView: {
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
    },
    successView_Txt: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Kanit',
    },
});

