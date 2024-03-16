import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView, StatusBar, Image } from 'react-native';
import { firebase } from "../firestore";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from "expo-font";

export default function Z_Test_Extra_Z_4({ route }) {
    // Navigation
    const navigation = useNavigation();
    // ----- Image Route Logic -----
    const item = route.params?.item || {};
    const [noteImage, setNoteImage] = useState(item.MyImage || "");
    // ----- Image Route Logic -----
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
            <Text style={styles.Txt1}>Page 4 - ( 4 )</Text>
            {/* Image Area */}
            <View style={styles.SMH_First_Logo}>
                <View style={styles.SMH_FirstImg_Parent}>
                    <Image source={{ uri: noteImage }} style={styles.SMH_FirstImg} />
                </View>
            </View>
            {/* Image Area */}
            {/* ------ Move Button ------ */}
            {/* 1 */}
            <TouchableOpacity style={styles.Upload_Btn_Parent} onPress={() => navigation.navigate("Z_Test_Extra_Z_5", {
                item: {
                    MyImage: item.MyImage,
                },
            })}>
                <Text style={styles.Upload_Btn_Parent_Txt}>Move Page 5</Text>
            </TouchableOpacity>
            {/* 2 */}
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
    SMH_First_Logo: {
        borderWidth: 0.5,
        paddingVertical: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink"
    },
    SMH_FirstImg_Parent: {
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderColor: "#EB2F06",
        borderRadius: 5,
        padding: 2,
    },
    SMH_FirstImg: {
        width: "100%",
        height: "100%",
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
});