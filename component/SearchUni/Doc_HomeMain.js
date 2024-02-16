import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
// useNavigation
import { useNavigation } from '@react-navigation/native'
// Fonts Header File
import { useFonts } from "expo-font";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function Doc_HomeMain() {
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
            <View style={styles.DHM_first}>
                {/* Image Parent */}
                <View style={styles.DMH_Img_Parent}>
                    <Image source={require("../Pics/Docs_2.png")} style={styles.DMH_Img} />
                </View>
                <Text style={styles.DHM_fir_1}>You need to upload your</Text>
                <Text style={styles.DHM_fir_2}>Required Documents</Text>
                <Text style={styles.DHM_fir_1}>Also Please Fill Updated Required Data</Text>
            </View>
            {/* 2 Documents Button */}
            <View style={styles.DMH_Button_Parent}>
                {/* Text */}
                <Text style={styles.DHM_E_Text}>Follow a complete process for Information And Documents Filling.</Text>
                {/* Button 1 */}
                <TouchableOpacity style={styles.BTn_1_Parent} onPress={() => navigation.navigate('PersonalData_HomeMain')}>
                    <View style={styles.BTn_1_Parent_Box}>
                        {/* Part 1 */}
                        <View style={styles.BTn_1_Parent_Box_P1}>
                            <Text style={styles.BTn_1_Parent_Box_P1_child}><AntDesign name="form" size={28} color="#EB2F06" /></Text>
                        </View>
                        {/* Part 2 */}
                        <Text style={styles.BTn_1_Parent_Box_P2}>Personal Data</Text>
                    </View>
                </TouchableOpacity>
                {/* Button 2 */}
                <TouchableOpacity style={styles.BTn_1_Parent} onPress={() => navigation.navigate('DocHome')}>
                    <View style={styles.BTn_1_Parent_Box}>
                        {/* Part 1 */}
                        <View style={styles.BTn_1_Parent_Box_P1}>
                            <Text><Ionicons name="document-attach" size={28} color="#EB2F06" /></Text>
                        </View>
                        {/* Part 2 */}
                        <Text style={styles.BTn_1_Parent_Box_P2}>Upload Documents</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        // paddingVertical: 30,
    },
    DHM_first: {
        // borderWidth: 0.5,
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: 18,
        paddingVertical: 44,
        backgroundColor: "#EB2F06",
    },
    DMH_Img_Parent: {
        // borderWidth: 0.5,
        borderColor: "white",
        paddingVertical: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    DMH_Img: {
        // borderWidth: 0.5,
        borderColor: "white",
        width: 100,
        height: 100,
    },
    DHM_fir_1: {
        // borderWidth: 0.5,
        marginVertical: 1.5,
        color: "white",
        textAlign: "center",
        fontFamily: "Kanit",
        fontSize: 14,
        paddingHorizontal: 20,
        textTransform: "capitalize",
    },
    DHM_fir_2: {
        // borderWidth: 0.5,
        color: "white",
        textAlign: "center",
        fontFamily: "HeeboExtra",
        fontSize: 28.5,
        letterSpacing: 1,
        paddingVertical: 2,
    },
    DMH_Button_Parent: {
        // borderWidth: 0.5,
        paddingVertical: 23,
    },
    BTn_1_Parent: {
        borderWidth: 0.7,
        borderColor: "red",
        paddingVertical: 1,
        marginHorizontal: 38,
        borderRadius: 5,
        marginVertical: 15,
    },
    BTn_1_Parent_Box: {
        // borderWidth: 0.5,
        // borderColor: "red",
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    BTn_1_Parent_Box_P1: {
        // borderWidth: 0.5,
        padding: 5,
        width: "20%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    BTn_1_Parent_Box_P2: {
        // borderWidth: 0.5,
        padding: 5,
        width: "73%",
        color: "#EB2F06",
        textAlign: "center",
        fontFamily: "Heebo",
        letterSpacing: 1.5,
        fontSize: 18,
    },
    DHM_E_Text:{
        // borderWidth: 0.5,
        fontFamily: "Kanit",
        textAlign: "center",
        fontSize: 14,
        color: "grey",
        paddingHorizontal: 35,
        paddingVertical: 6,
        textTransform: "capitalize",
    },
});