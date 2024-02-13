import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView } from 'react-native';
import { useFonts } from "expo-font";

export default function Z_Test_Part_D1() {
    // Navigation
    // const navigation = useNavigation();
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
            <ScrollView>
                {/* Heading */}
                <Text style={styles.Txt1}>1 - Class 10 Mark & Certif</Text>
                {/* --- Main Body --- */}

                {/* ----- Button ----- */}
                {/* 1 Btn */}
                {/* <TouchableOpacity style={styles.Btn_Parent} onPress={addData}>
                    <Text style={styles.Btn_Txt}>Add Data</Text>
                </TouchableOpacity> */}
                {/* 2 Btn */}
                {/* <TouchableOpacity style={styles.Btn_Parent_1} onPress={() => navigation.navigate("Z_Test_1_A")}>
                    <Text style={styles.Btn_Txt}>Move Home</Text>
                </TouchableOpacity> */}
            </ScrollView>
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
        marginVertical: 25,
    },
});

