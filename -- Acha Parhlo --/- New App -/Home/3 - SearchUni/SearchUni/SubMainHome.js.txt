import React, { useState, useEffect } from "react";
import { Text, Button, StyleSheet, View, StatusBar, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Overview1 from "./Overview1";
import Admission2 from "./Admission2";
import DocHome from './DocumentPage/DocHome'
// Fonts Header File
import { useFonts } from "expo-font";

const top = createMaterialTopTabNavigator();

export default function SubMainHome() {
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
                        <Image source={require('../Pics/UniPics/Monash.png')} style={styles.SMH_FirstImg} />
                    </View>
                    {/* 2 */}
                    <View style={styles.SMH_First_Name}>
                        <Text style={styles.SMH_First_Its_Name}>Monash University</Text>
                    </View>
                </View>
                {/* Subject Name */}
                <Text style={styles.SMH_First_Course}>Course :</Text>
                <Text style={styles.SMH_First_CourseName}>Advance Computer Science (ACS)</Text>
            </View>
            {/* Navigation Process */}
            <top.Navigator>
                {/* Screen 1 */}
                <top.Screen name="Overview1" component={Overview1} options={{
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
                <top.Screen name="Admission2" component={Admission2} options={{
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
                <TouchableOpacity style={styles.SubParentApplyButton} onPress={() => navigation.navigate('DocHome')}>
                    <Text style={styles.ApplyButton}>Apply</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

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
        width: 70,
        height: 50,
        // borderWidth: 0.5,
        // borderColor:"black",
    },
    SMH_First_Name: {
        width: "70%",
        // borderWidth: 0.5,
        // borderColor:"red",
        paddingVertical: 10,
    },
    SMH_First_Its_Name: {
        // borderWidth: 0.5,
        fontSize: 16,
        fontFamily: "Heebo",
        letterSpacing: 0.1,
        paddingHorizontal: 10,
    },
    SMH_First_Course: {
        // borderWidth: 0.5,
        marginVertical: 5,
        fontFamily: "Kanit",
        fontSize: 15,
        color: "grey",
        paddingHorizontal: 22,
    },
    SMH_First_CourseName: {
        // borderWidth: 0.5,
        marginVertical: 0,
        fontFamily: "KanitBold",
        fontSize: 19,
        color: "#EB2F06",
        paddingHorizontal: 22,
        letterSpacing: 0.1,
    },
    ParentApplyButton: {
        // borderWidth: 0.5,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white",
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
})
