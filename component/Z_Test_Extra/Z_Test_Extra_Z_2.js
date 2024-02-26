import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Z_Test_Extra_Z_2() {
    const navigation = useNavigation();
    // Fonts
    const [fontsLoaded, setFontsLoaded] = useState(false);
    let [loaded] = useFonts({
        Archivo: require('../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf'),
        Kanit: require('../../assets/fonts/My_Soul/Kanit-Light.ttf'),
        Heebo: require('../../assets/fonts/My_Soul/Heebo-Medium.ttf'),
        HeeboExtra: require('../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf'),
        KanitBold: require('../../assets/fonts/My_Soul/Kanit-Bold.ttf'),
        KanitBlack: require('../../assets/fonts/My_Soul/Kanit-Black.ttf'),
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
            <Text style={styles.fir}> Image Fetch Area </Text>
            <TouchableOpacity style={styles.Upload_Btn_Parent} onPress={() => navigation.navigate('Z_Test_Extra_Z_1')}>
                <Text style={styles.Upload_Btn_Parent_Txt}>Move Back To Home</Text>
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
