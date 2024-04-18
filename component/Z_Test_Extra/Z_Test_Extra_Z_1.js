import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Keyboard } from 'react-native'
// Firebase
import { firebase } from "../firestore";
// Array For Date
let DaysList = [];

export default function BookAppointment() {
    // ----------- Backend Part Logic -----------
    const todoRef = firebase.firestore().collection("Practice App");
    const [selectedDay, setSelectedDay] = useState(-1);
    const [existingAppointments, setExistingAppointments] = useState([]);
    const addField = () => {
        if (selectedDay !== -1) {
            const data = {
                Date: selectedDay + 1,
            };
            todoRef
                .add(data)
                .then(() => {
                    setSelectedDay(-1);
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
                const appointmentData = doc.data();
                // Check if appointment date is less than current date
                if (appointmentData.Date >= new Date().getDate()) {
                    appointments.push(appointmentData);
                } else {
                    // Delete outdated appointment record
                    doc.ref.delete().catch(error => console.error("Error removing document: ", error));
                }
            });
            setExistingAppointments(appointments);
        });
    }, []);
    // 1 - useState
    // --------------------------------------------------
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
    // Main Body
    return (
        <View style={styles.container}>
            {/* Date */}
            <View style={{ marginTop: 200 }}>
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
                                        // Do nothing for past dates
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
                {/* Add Data To Firestore Button */}
                <TouchableOpacity style={styles.successView} onPress={() => {
                    addField();
                }}
                >
                    <Text style={styles.successView_Txt}>Book Appointment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    date_fig: {
        fontSize: 20,
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
    },
});

