import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, StatusBar, Image, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Overview1 from "./Overview1";
import Admission2 from "./Admission2";
import DocHome from './DocumentPage/DocHome'
// Fonts Header File
import { useFonts } from "expo-font";

const top = createMaterialTopTabNavigator();

export default function SubMainHome({ route }) {
    const item = route.params?.item || {};

    const [noteImage, setNoteImage] = useState(item.MyImage || "");
    const [noteTitle, setNoteTitle] = useState(item.name1 || "");
    const [noteText, setNoteText] = useState(item.name2 || "");
    const [noteRoom, setNoteRoom] = useState(item.name3 || "");
    const [noteAmount, setNoteAmount] = useState(item.name4 || "");
    const [noteDuration, setNoteDuration] = useState(item.name5 || "");
    // Pre 0 - Modal useState
    const [showModal, setShowModal] = useState(false)
    // 0 - useNavigation
    const navigation = useNavigation();
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    // Expo Font Logic
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
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* Header Portion For Uni Name , Logo */}
            <View style={styles.SMH_First}>
                {/* Name & Logo */}
                <View style={styles.sub_SMH_First}>
                    {/* 1 */}
                    <View style={styles.SMH_First_Logo}>
                        <Image source={{ uri: noteImage }} style={styles.SMH_FirstImg} />
                    </View>
                    {/* 2 */}
                    <View style={styles.SMH_First_Name}>
                        <Text style={styles.SMH_First_Its_Name}>{noteTitle.substring(0, 18)}</Text>
                    </View>
                </View>
                {/* Subject Name */}
                <Text style={styles.SMH_First_Course}>Course Title :</Text>
                <Text style={styles.SMH_First_CourseName}>{noteRoom}</Text>
            </View>
            {/* Navigation Process */}
            <top.Navigator>
                {/* Screen 1 */}
                <top.Screen name="Overview1" component={Overview1} initialParams={{
                    noteTitle,
                    noteText,
                    // Add other data to pass here
                }}
                    options={{
                        tabBarLabel: "Overview",
                        tabBarLabelStyle: {
                            fontFamily: "Heebo",
                            letterSpacing: 0.8,
                        },
                        tabBarInactiveTintColor: "grey",
                        tabBarIndicatorStyle: {
                            backgroundColor: "#EB2F06",
                            borderWidth: 1.4,
                            borderColor: "#EB2F06",
                        },
                        tabBarActiveTintColor: "#EB2F06",
                    }} />
                {/* Screen 2 */}
                <top.Screen name="Admission2" component={Admission2} initialParams={{
                    noteRoom,
                    noteAmount,
                    noteDuration,
                    // Add other data to pass here
                }}
                    options={{
                        tabBarLabel: "Admisssion",
                        tabBarLabelStyle: {
                            fontFamily: "Heebo",
                            letterSpacing: 0.8,
                        },
                        tabBarInactiveTintColor: "grey",
                        tabBarIndicatorStyle: {
                            backgroundColor: "#EB2F06",
                            borderWidth: 1.4,
                            borderColor: "#EB2F06",
                        },
                        tabBarActiveTintColor: "#EB2F06",
                    }} />
            </top.Navigator>
            {/* Apply Button */}
            <View style={styles.ParentApplyButton}>
                {/* Button */}
                <TouchableOpacity style={styles.SubParentApplyButton} onPress={() => navigation.navigate('Doc_HomeMain')}>
                    <Text style={styles.ApplyButton}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        // paddingVertical: 30,
    },
    SMH_First: {
        // backgroundColor:"lightyellow",
        // borderWidth: 0.5,
        // borderColor:"black",
        paddingVertical: 10,
        // backgroundColor:"white",
        shadowColor: "black",
        elevation: 1,
    },
    sub_SMH_First: {
        // borderWidth: 0.5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    SMH_First_Logo: {
        // borderWidth: 0.5,
        paddingVertical: 3,
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
    },
    SMH_FirstImg: {
        width: 75,
        height: 55,
        borderWidth: 0.5,
        borderColor: "#EB2F06",
        borderRadius: 5,
    },
    SMH_First_Name: {
        width: "70%",
        // borderWidth: 0.5,
        // borderColor:"red",
        paddingVertical: 10,
    },
    SMH_First_Its_Name: {
        // borderWidth: 0.5,
        fontFamily: "KanitBold",
        fontSize: 18,
        // color: "#EB2F06",
        letterSpacing: 0.9,
        paddingHorizontal: 10,
    },
    SMH_First_Course: {
        // borderWidth: 0.5,
        marginVertical: 6,
        fontFamily: "Kanit",
        fontSize: 15,
        color: "grey",
        paddingHorizontal: 22,
    },
    SMH_First_CourseName: {
        // borderWidth: 0.5,
        marginVertical: 1,
        fontFamily: "HeeboExtra",
        fontSize: 14.5,
        // color: "#EB2F06",
        paddingHorizontal: 22,
        letterSpacing: 2,
    },
    ParentApplyButton: {
        // borderWidth: 0.5,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    SubParentApplyButton: {
        // borderWidth: 0.5,
        paddingVertical: 10,
        width: "70%",
        borderRadius: 50,
        paddingHorizontal: 10,
        backgroundColor: "#EB2F06",
        shadowColor: "black",
        elevation: 12,
    },
    ApplyButton: {
        color: "white",
        // borderWidth: 0.5,
        fontSize: 20,
        letterSpacing: 2,
        textTransform: "uppercase",
        fontFamily: "Heebo",
        textAlign: "center",
    },
    S_Modal_Parent: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
        justifyContent: "center",
        alignItems: "center",
    },
    sub_S_Modal_Parent: {
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: "75%",
        borderRadius: 15,
    },
    Modal_Txt1: {
        // borderWidth: 1,
        textAlign: "center",
        fontFamily: "HeeboExtra",
        fontSize: 23,
        marginVertical: 13,
        marginBottom: 15,
        letterSpacing: 1.5,
    },
    Modal_Btn1: {
        borderWidth: 0.5,
        marginVertical: 10,
        // backgroundColor:"#EB2F06",
        backgroundColor: "orangered",
        borderColor: "orangered",
        paddingVertical: 8,
        borderRadius: 15,
    },
    Modal_BtnTxt: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        letterSpacing: 2,
        textTransform: "uppercase",
        fontFamily: "Heebo",
    },
})
