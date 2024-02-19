import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Button, TextInput, FlatList, Image, TouchableOpacity, StatusBar, List, ScrollView } from "react-native";
// Fonts Header File
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firestore";
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Z_Test_Extra_Z_1() {
    // 0 - Navigation Constant
    const navigation = useNavigation();
    // ---------- Backend Part Logic ----------
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const listRef = useRef();
    const [ind, setInd] = useState(0);
    const [oldData, setOldData] = useState([]);
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection("4 - Student Records")
            .onSnapshot((querySnapshot) => {
                const newNotes = [];
                querySnapshot.forEach((doc) => {
                    const { U1_universityName, U2_campus, U3_intake, U4_courseName, buttonValue } = doc.data();
                    newNotes.push({ U1_universityName, U2_campus, U3_intake, U4_courseName, buttonValue, id: doc.id });
                });
                setNotes(newNotes);
                setOldData(newNotes);
                setData(newNotes);
            });
    }, []);
    // ---------- Backend Part Logic ----------
    // Expo Font Logic
    // 1 - useState
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
        <View style={styles.container}>
            {/* Status Bar */}
            <StatusBar backgroundColor={"red"} />
            {/* Main Body */}
            <Text style={styles.fir}> Application Tracking </Text>
            {/* -------- Fetch Application Tracking Data -------- */}
            {data.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.box}
                    onPress={() => navigation.navigate("Z_Test_Extra_Z_2", {
                        item: {
                            U1_universityName: item.U1_universityName,
                            U2_campus: item.U2_campus,
                            U3_intake: item.U3_intake,
                            U4_courseName: item.U4_courseName,
                            buttonValue: item.buttonValue,
                        },
                        firestoreId: item.id,  // Pass the Firestore ID
                    })}
                >
                    {/* Box Body */}
                    <View style={styles.box_2}>
                        {/* Row 1 */}
                        <View style={styles.in_box}>
                            {/* 1 - Image */}
                            <Image
                                source={require("../Pics/UniPics/Deakin.png")}
                                style={styles.img_fir}
                            />
                            {/* 2 - Title */}
                            <Text
                                style={styles.sec}>
                                {item.U1_universityName.substring(0, 15)}
                            </Text>
                        </View>
                        {/* Row 2 */}
                        <View style={styles.third}>
                            {/* 1 - Text */}
                            <Text style={styles.third_1}><FontAwesome5 name="book" size={12.5} color="#EB2F06" />  Course</Text>
                            {/* 2 - Title */}
                            <Text style={styles.third_2}>{item.U4_courseName.substring(0, 15)}</Text>
                        </View>
                        {/* Row 3 */}
                        <View style={styles.forth}>
                            {/* 1 */}
                            <View style={styles.forth_1}>
                                <Text style={styles.for_1}><FontAwesome5 name="money-bill" size={12.5} color="#EB2F06" /> Campus</Text>
                                <Text style={styles.for_2}>{item.U2_campus.substring(0, 15)}</Text>
                            </View>
                            {/* 2 */}
                            <View style={styles.forth_1}>
                                <Text style={styles.for_1}><AntDesign name="clockcircle" size={12.5} color="#EB2F06" />  Duration</Text>
                                <Text style={styles.for_22}>{item.U3_intake.substring(0, 15)}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
            {/* -------- Fetch Application Tracking Data -------- */}
        </View >
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fir: {
        borderWidth: 0.5,
        marginVertical: 30,
        paddingVertical: 10,
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: 20,
        backgroundColor: "yellow",
    },
    Txt: {
        textAlign: "center",
        fontFamily: "Kanit",
        paddingVertical: 5,
        fontSize: 18,
    },
    Btn_Parent: {
        backgroundColor: "red",
        paddingVertical: 10,
        marginHorizontal: 30,
        borderRadius: 50,
        marginVertical: 20,
    },
    Btn_Text: {
        textAlign: "center",
        color: "white",
        fontFamily: "Kanit",
        fontSize: 20,
    },
    // Box CSS Start
    box: {
        width: '88%',
        borderRadius: 17,
        // borderWidth: 1,
        borderColor: "black",
        alignSelf: 'center',
        marginTop: 16,
        // marginBottom: 4,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 15,
        // backgroundColor: "#FCDFD8",
        backgroundColor: "#FCBBAC",
        // backgroundColor: "#FED1C7",
        paddingHorizontal: 5,
        paddingVertical: 6,
    },
    box_2: {
        width: "100%",
        flexDirection: "column",
        paddingVertical: 7,
    },
    in_box: {
        // borderWidth: 0.1,
        width: "100%",
        height: 52,
        flexDirection: "row",
        paddingVertical: 2,
    },
    img_fir: {
        // borderWidth: 1,
        // borderColor: "red",
        width: "23%",
        height: '100%',
        marginLeft: 9,
        borderRadius: 7,
    },
    sec: {
        letterSpacing: 2,
        textAlign: "center",
        fontFamily: "KanitBold",
        width: "70%",
        marginLeft: 10,
        color: "black",
        marginTop: 11,
        // borderWidth: 1,
        //   height: 20,
        fontSize: 16,
        textTransform: "uppercase",
        paddingHorizontal: 2,
    },
    third: {
        marginTop: 10.5,
        // borderWidth: 1,
        width: "100%",
        // height: 48,
        flexDirection: "column",
    },
    third_1: {
        letterSpacing: 0.6,
        textAlign: "left",
        fontFamily: "Kanit",
        // color: "#636e72",
        marginHorizontal: 10,
        fontSize: 13.5,
        paddingVertical: 3.2,
        paddingHorizontal: 7.5,
        backgroundColor: "#dff9fb",
        borderRadius: 7,
        width: "29%",
        marginTop: 5,
    },
    third_2: {
        letterSpacing: 1.6,
        textAlign: "left",
        fontFamily: "Heebo",
        marginHorizontal: 12,
        color: "black",
        marginTop: 2,
        // borderWidth: 1,
        fontSize: 13,
        paddingVertical: 4.5,
        paddingHorizontal: 2,
        marginBottom: 2,
    },
    forth: {
        // borderWidth: 1,
        marginTop: 5,
        paddingVertical: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    forth_1: {
        // borderWidth: 0.5,
        paddingVertical: 1,
    },
    for_1: {
        // color: "#636e72",
        fontSize: 13.5,
        letterSpacing: 0.6,
        fontFamily: "Kanit",
        paddingVertical: 3.2,
        paddingHorizontal: 7.5,
        backgroundColor: "#dff9fb",
        borderRadius: 7,
    },
    for_2: {
        // color: "#009432",
        letterSpacing: 1.5,
        fontSize: 13,
        fontFamily: "Heebo",
        marginTop: 6,
        paddingHorizontal: 4.5,
    },
    for_22: {
        // color: "#e84118",
        letterSpacing: 1.5,
        fontSize: 13,
        fontFamily: "Heebo",
        marginTop: 6,
        paddingHorizontal: 4,
    },
});
