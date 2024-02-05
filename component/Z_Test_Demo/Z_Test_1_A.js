import React, { useState, useEffect } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet,
    FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// Fonts Header File
import { useFonts } from "expo-font";

export default function Z_Test_1_A() {
    // 0 - Navigation Constant
    const navigation = useNavigation();
    // ---------- Font Family ----------
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
            <Text style={styles.fir}>Page 1</Text>
            {/* Start */}
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        paddingTop: 30,
    },
    fir: {
        fontFamily: "HeeboExtra",
        paddingVertical: 20,
        fontSize: 30,
        textAlign: "center",
    }
});  