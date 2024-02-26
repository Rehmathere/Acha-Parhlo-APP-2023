import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useFonts } from "expo-font";

export default function Z_Test_Extra_Z_3() {
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
    return (
        <View style={styles.container}>
            {/* Heading */}
            <Text style={styles.My_Wishlist_Txt_0}>Wishlist</Text>
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    My_Wishlist_Txt_0: {
        // borderWidth: 0.5,
        textAlign: "center",
        paddingHorizontal: 30,
        fontFamily: "HeeboExtra",
        fontSize: 25,
        paddingVertical: 0,
        letterSpacing: 1.5,
    },
});
