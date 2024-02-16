import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from "@react-navigation/native";

export default function Admission2() {
    const route = useRoute();
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
            <ScrollView>
                {/* Firbase Item Data */}
                <Text style={styles.heading}><FontAwesome5 name="money-bill-wave" size={15} color="#EB2F06" />  Semester Fee :</Text>
                <Text style={styles.headingAns}>{route.params.noteAmount}</Text>
                {/* Firbase Item Data */}
                <Text style={styles.heading}><MaterialCommunityIcons name="clock" size={15} color="#EB2F06" />  Degree Duation :</Text>
                <Text style={styles.headingAns}>{route.params.noteDuration}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBFADE",
    },
    heading: {
        fontSize: 15,
        // borderWidth: 0.5,
        fontFamily: "KanitBold",
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 3,
        letterSpacing: 0.8,
        color: "#EB2F06"
    },
    headingAns: {
        fontSize: 17,
        // borderWidth: 0.5,
        fontFamily: "Kanit",
        paddingHorizontal: 35,
        paddingTop: 11,
        paddingBottom: 3,
        letterSpacing: 0.8,
        textTransform: "capitalize",
        color: "grey",
    },
})
