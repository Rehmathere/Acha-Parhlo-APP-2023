import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";
// useNavigate
import { useNavigation } from "@react-navigation/native";

export default function ApplicationList() {
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
            {/* Body */}
            {/* Applied Application Universities  */}
            {/* Box 1 */}
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("ApplicationStatus")}>
                {/* Box Body */}
                <View style={styles.box_2}>
                    {/* Row 1 */}
                    <View style={styles.in_box}>
                        {/* 1 - Image */}
                        <Image
                            source={require('../Pics/UniPics/Western.png')}
                            style={styles.img_fir}
                        />
                        {/* 2 - Title */}
                        <Text style={styles.sec}>Western Sydney University</Text>
                    </View>
                    {/* Row 2 */}
                    <View style={styles.third}>
                        {/* 1 - Text */}
                        <Text style={styles.third_1}>Course Title</Text>
                        {/* 2 - Title */}
                        <Text style={styles.third_2}>Applied Sciences</Text>
                    </View>
                    {/* Row 3 */}
                    <View style={styles.forth}>
                        {/* 1 */}
                        <View style={styles.forth_1}>
                            <Text style={styles.for_1}>Fee</Text>
                            <Text style={styles.for_2}>100 - 150 $</Text>
                        </View>
                        {/* 2 */}
                        <View style={styles.forth_1}>
                            <Text style={styles.for_1}>Duration</Text>
                            <Text style={styles.for_22}>5 Years</Text>
                        </View>
                    </View>
                    {/* Row 4 */}
                    <View style={styles.fifth}>
                        <Text style={styles.fif_1}>Rating</Text>
                        <Text style={styles.fif_2}>3.2</Text>
                        <Image source={require('../Pics/star.png')} style={styles.fif_img} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "white",
    },
    box: {
        // borderWidth: 1,
        // borderColor: "black",
        width: '91%',
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 20,
        // marginBottom: 4,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 10,
        backgroundColor: "#FCDFD8",
        paddingVertical: 1,
    },
    box_2: {
        // borderWidth: 0.5,
        width: "100%",
        height: 202,
        flexDirection: "column",
        paddingVertical: 12,
    },
    in_box: {
        // borderWidth: 0.1,
        // borderColor:"black",
        width: "100%",
        height: 50,
        flexDirection: "row",
    },
    img_fir: {
        // borderWidth: 1,
        // borderColor: "black",
        width: "22%",
        height: '90%',
        marginLeft: 9,
        borderRadius: 10,
    },
    sec: {
        // borderWidth: 1,
        letterSpacing: 1,
        textAlign: "center",
        fontFamily: "HeeboExtra",
        width: "70%",
        marginLeft: 5,
        color: "black",
        marginTop: 11,
        height: 20,
        fontSize: 14
    },
    third: {
        marginTop: 8,
        // borderWidth: 1,
        width: "100%",
        height: 48,
        flexDirection: "column",
    },
    third_1: {
        letterSpacing: 0.3,
        textAlign: "left",
        fontFamily: "Kanit",
        color: "#636e72",
        marginTop: 1,
        marginHorizontal: 14,
        // borderWidth: 1,
        height: 15,
        fontSize: 14
    },
    third_2: {
        letterSpacing: 1,
        textAlign: "left",
        fontFamily: "Heebo",
        marginHorizontal: 16,
        color: "black",
        marginTop: 4,
        // borderWidth: 1,
        height: 25,
        fontSize: 14.5,
    },
    forth: {
        // borderWidth: 1,
        marginTop: 2,
        paddingVertical: 1,
        paddingHorizontal: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 14,
    },
    forth_1: {
        // borderWidth: 0.5,
        paddingVertical: 1,
    },
    for_1: {
        // borderWidth: 0.5,
        marginBottom: 1,
        color: "#636e72",
        fontSize: 14,
        letterSpacing: 0.3,
        fontFamily: "Kanit"
    },
    for_2: {
        color: "#009432",
        fontSize: 16,
        fontFamily: "Heebo",
    },
    for_22: {
        // borderWidth: 0.5,
        marginBottom: 1,
        color: "#eb2f06",
        fontSize: 16,
        fontFamily: "Heebo"
    },
    fifth: {
        // borderWidth: 0.5,
        height: 35,
        paddingHorizontal: 13,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    fif_1: {
        // borderWidth: 1,
        color: "#636e72",
        fontSize: 15,
        paddingHorizontal: 3,
        letterSpacing: 0.3,
        fontFamily: "Kanit"
    },
    fif_2: {
        paddingHorizontal: 6,
        // borderWidth: 0.2,
        color: "#1B1464",
        fontSize: 17,
        fontFamily: "Heebo",
    },
    fif_img: {
        // borderWidth: 0.1,
        // borderColor: "black",
        width: 18,
        height: 18,
    }
})