import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet } from 'react-native'
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { firebase } from "../firestore";

export default function Z_Test_Extra_Z_2({ route }) {
    // 0 - Navigation Constant
    const navigation = useNavigation();
    // ----------- Backend Part Logic ----------- 
    const { item, firestoreId } = route.params || {};
    const [U1_universityName, setU1_universityName] = useState(item.U1_universityName || "");
    const [U2_campus, setU2_campus] = useState(item.U2_campus || "");
    const [U3_intake, setU3_intake] = useState(item.U3_intake || "");
    const [U4_courseName, setU4_courseName] = useState(item.U4_courseName || "");
    const [buttonValue, setbuttonValue] = useState(item.buttonValue || "");
    const handleButtonPress = () => {
        // Pass data to Firebase and store in "5 - App Wishlist" collection
        firebase.firestore().collection("5 - App Wishlist").add({
            U1_universityName,
            U2_campus,
            U3_intake,
            U4_courseName,
            buttonValue,
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                // You can perform any additional actions after successfully storing data in Firestore
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    };
    // ----------- Backend Part Logic ----------- 
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
            <Text style={styles.fir}> Application Tracking & Status </Text>
            <Text style={styles.Txt}>Firestore ID: {firestoreId}</Text>
            <Text style={styles.Txt}>{U1_universityName.substring(0, 18)}</Text>
            <Text style={styles.Txt}>{U2_campus}</Text>
            <Text style={styles.Txt}>{U3_intake}</Text>
            <Text style={styles.Txt}>{U4_courseName}</Text>
            <Text style={styles.Txt}>Status : {buttonValue}</Text>
            <TouchableOpacity style={styles.Upload_Btn_Parent} onPress={handleButtonPress}>
                <Text style={styles.Upload_Btn_Parent_Txt}>Pass Data To Firebase</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Upload_Btn_Parent} onPress={() => navigation.navigate("Z_Test_Extra_Z_3")}>
                <Text style={styles.Upload_Btn_Parent_Txt}>Move To Page 3</Text>
            </TouchableOpacity>
        </View>
    );
}

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
        backgroundColor: "aqua",
    },
    Txt: {
        borderWidth: 0.5,
        borderColor: "transparent",
        textAlign: "center",
        fontFamily: "Heebo",
        paddingVertical: 10,
        fontSize: 20,
        letterSpacing: 1,
    },
    Upload_Btn_Parent: {
        backgroundColor: "black",
        borderWidth: 0.5,
        marginVertical: 20,
        marginHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 50,
    },
    Upload_Btn_Parent_Txt: {
        textAlign: "center",
        borderWidth: 0.5,
        fontSize: 18,
        fontFamily: "Kanit",
        color: "white",
        letterSpacing: 1,
    },
});
