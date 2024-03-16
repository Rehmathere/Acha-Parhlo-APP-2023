import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView, StatusBar, Image, FlatList } from 'react-native';
import { firebase } from "../firestore";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";
import { FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons';

export default function Z_Test_Extra_Z_6() {
    // Navigation
    const navigation = useNavigation();
    // ----- Backend ( Show Data From Firestore , Firesbase ) -----
    // 1 - useState
    const [notes, setNotes] = useState([]);
    // 2 - useEffect ( Fetch Data From Firestore Firebase )
    useEffect(() => {
        firebase
            .firestore()
            .collection("New Practice App")
            .onSnapshot((querySnapshot) => {
                const newNotes = [];
                querySnapshot.forEach((doc) => {
                    const { U1_universityName, U2_campus, U3_intake, U4_courseName, U_Extra_Uni_Image } = doc.data();
                    newNotes.push({ U1_universityName, U2_campus, U3_intake, U4_courseName, U_Extra_Uni_Image });
                });
                setNotes(newNotes);
            });
    }, []);
    // ----- Backend ( Show Data From Firestore , Firesbase ) -----
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
            {/* Status Bar */}
            <StatusBar backgroundColor={"red"} />
            {/* Heading */}
            <Text style={styles.Txt1}>Last Page - ( Show Data )</Text>
            {/* Show Data */}
            <FlatList
                data={notes}
                numColumns={1}
                estimatedItemSize={100}
                renderItem={({ item }) => (
                    // Display Area
                    <TouchableOpacity style={styles.box}>
                        {/* Box Border */}
                        <View style={styles.box_2}>
                            {/* Row 1 */}
                            <View style={styles.in_box}>
                                {/* 1 - Image */}
                                <Image
                                    source={{ uri: item.U_Extra_Uni_Image }}
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
                                <Text style={styles.third_1}><FontAwesome5 name="book" size={12.5} color="#EB2F06" />  Intake</Text>
                                {/* 2 - Title */}
                                <Text style={styles.third_2}>{item.U3_intake.substring(0, 20)}</Text>
                            </View>
                            {/* Row 3 */}
                            <View style={styles.forth}>
                                {/* 1 */}
                                <View style={styles.forth_1}>
                                    <Text style={styles.for_1}><FontAwesome5 name="money-bill" size={12.5} color="#EB2F06" />  Course</Text>
                                    <Text style={styles.for_2}>{item.U4_courseName.substring(0, 15)}</Text>
                                </View>
                                {/* 2 */}
                                <View style={styles.forth_1}>
                                    <Text style={styles.for_1}><AntDesign name="clockcircle" size={12.5} color="#EB2F06" />  Campus</Text>
                                    <Text style={styles.for_22}>{item.U2_campus}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
            {/* Show Data */}
            {/* ------ Move Button ------ */}
            {/* 1 */}
            <TouchableOpacity style={styles.Upload_Btn_Parent} onPress={() => navigation.navigate('Z_Test_Extra_Z_1')}>
                <Text style={styles.Upload_Btn_Parent_Txt}>Move Back To Page 1</Text>
            </TouchableOpacity>
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightblue",
    },
    Txt1: {
        borderWidth: 0.5,
        borderColor: "blue",
        backgroundColor: "blue",
        fontFamily: "HeeboExtra",
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: "center",
        letterSpacing: 1.5,
        fontSize: 20,
        marginVertical: 10,
        color: "white",
    },
    Upload_Btn_Parent: {
        backgroundColor: "black",
        borderWidth: 0.5,
        borderColor: "transparent",
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 50,
    },
    Upload_Btn_Parent_Txt: {
        textAlign: "center",
        borderWidth: 0.5,
        borderColor: "transparent",
        fontSize: 18,
        fontFamily: "Kanit",
        color: "white",
        letterSpacing: 1,
    },
    box: {
        width: '75%',
        borderRadius: 17,
        // borderWidth: 1,
        borderColor: "black",
        alignSelf: 'center',
        marginTop: 16,
        // marginBottom: 4,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 15,
        backgroundColor: "lightyellow",
        paddingHorizontal: 5,
        paddingVertical: 5,
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
        // borderColor: "black",
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
        fontSize: 14,
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
        fontSize: 14,
        fontFamily: "Heebo",
        marginTop: 6,
        paddingHorizontal: 4.5,
    },
    for_22: {
        // color: "#e84118",
        letterSpacing: 1.5,
        fontSize: 14,
        fontFamily: "Heebo",
        marginTop: 6,
        paddingHorizontal: 4,
    },
});