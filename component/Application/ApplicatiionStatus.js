import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";

export default function ApplicationStatus() {
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
            {/* StatusBar */}
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* Start */}
            {/* 1 - Application Course Mini Detail */}
            <View style={styles.ParentMiniCourseDetail}>
                <View style={styles.sub_ParentMiniCourseDetail}>
                    {/* Course Mini Detail */}
                    <View style={styles.MiniCourseDetail}>
                        {/* Item 1 */}
                        <Text style={styles.Item1}>Track Number</Text>
                        <Text style={styles.Item1_2}>QWERTY1357910</Text>
                        {/* Item Image */}
                        <View style={styles.ParentCourseImg}>
                            <View style={styles.subParentCourseImg}>
                                <Image source={require('../Pics/UniPics/Western.png')} style={styles.CourseImg} />
                            </View>
                        </View>
                        {/* Item 2 */}
                        <Text style={styles.Item2_1}>University :</Text>
                        <Text style={styles.Item2}>Western Sdyney University</Text>
                        <Text style={styles.Item2_1}>Course :</Text>
                        <Text style={styles.Item2_2}>Applied Sciences</Text>
                    </View>
                </View>
            </View>
            {/* 2 - Application Status */}
            <Text style={styles.AppStatus}>Application Status</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ParentMiniCourseDetail: {
        borderWidth: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    sub_ParentMiniCourseDetail: {
        borderWidth: 0.5,
        borderColor: "#dff9fb",
        paddingVertical: 25,
        paddingHorizontal: 20,
        backgroundColor: "#dff9fb",
        borderRadius: 20,
    },
    MiniCourseDetail: {
        borderWidth: 0.5,
        borderColor: "#218c74",
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        backgroundColor: "#218c74",
    },
    Item1: {
        // borderWidth: 0.5,
        textAlign: "center",
        color: "white",
        fontFamily: "Kanit",
        fontSize: 12.5,
        letterSpacing: 1,
    },
    Item1_2: {
        // borderWidth: 0.5,
        textAlign: "center",
        color: "white",
        fontFamily: "HeeboExtra",
        fontSize: 14,
        marginVertical: 3,
        letterSpacing: 2,
    },
    ParentCourseImg: {
        // borderWidth: 0.5,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    subParentCourseImg: {
        // borderWidth: 0.5,
        // borderColor: "red",
        padding: 1,
        width: 93,
        height: 56,
    },
    CourseImg: {
        borderWidth: 0.5,
        borderColor: "red",
        width: 90,
        height: 53,
        borderRadius: 5,
    },
    Item2: {
        // borderWidth: 0.5,
        textAlign: "center",
        color: "white",
        fontFamily: "Archivo",
        fontSize: 14,
        letterSpacing: 0.2,
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    Item2_1: {
        // borderWidth: 0.5,
        color: "white",
        fontFamily: "Kanit",
        fontSize: 14,
        letterSpacing: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    Item2_2: {
        // borderWidth: 0.5,
        color: "white",
        fontFamily: "Archivo",
        fontSize: 14,
        letterSpacing: 1,
        marginTop: 3,
        paddingHorizontal: 15,
        textAlign: "center",
    },
    AppStatus: {
        borderWidth: 0.5,
        fontFamily: "HeeboExtra",
        fontSize: 18,
        letterSpacing: 1,
        marginVertical: 5,
        paddingHorizontal: 30,
    },
})