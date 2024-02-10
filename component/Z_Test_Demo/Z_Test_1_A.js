import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, FlatList } from 'react-native';
import { firebase } from "../firestore";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Z_Test_1_A() {
    // Navigation
    const navigation = useNavigation();
    // ----------- Backend Part Logic -----------
    const todoRef = firebase.firestore().collection("Practice App");
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
    // ----------- Backend Part Logic -----------
    // Date
    const [days, setDays] = useState([]);
    useEffect(() => {
        const DaysList = [];
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
            days = 28;
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
    // Time
    const [slots, setSlots] = useState([
        { sloT: '2:00 - 4:00 PM', selected: false },
        { sloT: '4:00 - 6:00 PM', selected: false },
        { sloT: '6:00 - 8:00 PM', selected: false },
        { sloT: '8:00 - 10:00 PM', selected: false },
        { sloT: '10:00 - 12:00 PM', selected: false },
        { sloT: '12:00 - 02:00 PM', selected: false },
    ]);
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
        <View>
            <Text style={styles.Txt1}>Appointment Detail's</Text>
            {/* Text Input */}
            <Text style={styles.Detail_Txt}>Name :</Text>
            <TextInput
                placeholder=' Enter Name '
                onChangeText={(heading) => setName(heading)}
                value={name}
                style={styles.Inp_1}
                keyboardType="default"
            />
            {/* Text Input */}
            <Text style={styles.Detail_Txt}>Email :</Text>
            <TextInput
                placeholder=' Enter Email '
                onChangeText={(email) => setEmail(email)}
                value={email}
                style={styles.Inp_1}
                keyboardType="email-address"
            />
            {/* Text Input */}
            <Text style={styles.Detail_Txt}>Contact No :</Text>
            <TextInput
                placeholder=' Enter Contact No'
                onChangeText={(contactNo) => setContactNo(contactNo)}
                value={contactNo}
                style={styles.Inp_1}
                keyboardType="phone-pad"
            />
            {/* Text Input */}
            <Text style={styles.Detail_Txt}>Gender :</Text>
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
            {/* Text Input */}
            <Text style={styles.Detail_Txt}>Date :</Text>
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
                                    height: 25,
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
            {/* Text Input */}
            <Text style={styles.Detail_Txt}>TimeSlot :</Text>
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
                                    style={{ fontFamily: "Heebo", fontSize: 11, color: index === selectedSlot ? 'white' : 'black' }}>
                                    {item.sloT}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
            {/* ----- Button ----- */}
            <TouchableOpacity style={styles.Btn_Parent} onPress={addField}>
                <Text style={styles.Btn_Txt}>Book Appointment</Text>
            </TouchableOpacity>
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Txt1: {
        borderWidth: 1,
        borderColor: "yellow",
        backgroundColor: "yellow",
        fontFamily: "KanitBold",
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: "center",
        letterSpacing: 1.5,
        fontSize: 20,
        marginVertical: 5,
    },
    Detail_Txt: {
        marginTop: 15,
        paddingHorizontal: 25,
        fontFamily: "Heebo",
        fontSize: 13,
        letterSpacing: 1,
    },
    Inp_1: {
        marginTop: 0,
        borderWidth: 0.5,
        borderColor: "black",
        paddingVertical: 2,
        marginHorizontal: 25,
        borderRadius: 8,
        paddingHorizontal: 10,
        letterSpacing: 2,
        fontSize: 12.5,
        fontFamily: "Kanit",
    },
    Btn_Parent: {
        paddingVertical: 5,
        backgroundColor: "red",
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 20,
    },
    Btn_Txt: {
        paddingVertical: 1,
        textAlign: "center",
        fontFamily: "HeeboExtra",
        fontSize: 16,
        color: "white",
        letterSpacing: 1,
    },
    gender: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    genderBox: {
        borderWidth: 0.5,
        borderColor: "grey",
        width: "30%",
        height: 30,
        borderRadius: 10,
        justifyContent: "center",
        marginHorizontal: 17,
    },
    subGenderBox: {
        alignSelf: "center",
    },
    date_fig: {
        fontSize: 18,
        fontFamily: "Heebo",
    },
    timeSlot: {
        width: '40.2%',
        height: 25,
        borderRadius: 10,
        borderWidth: 0.5,
        marginVertical: 10,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
