import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";
// useNavigate
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

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
            <View style={styles.Ext_AL_1}>
                {/* Image */}
                <View style={styles.Ext_AL_ParentImg}>
                    <Image source={require("../Pics/AL_Track.png")} style={styles.Ext_AL_Img} />
                </View>
                {/* Heading */}
                <Text style={styles.Ext_AL_Txt}>Submitted Application</Text>
                <Text style={styles.Ext_AL_Txt_1}>You have the ability to track the status of your submitted application.</Text>
            </View>
            {/* Applied Application Universities  */}
            {/* Box 1 */}
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("ApplicationStatus")}>
                {/* Box Body */}
                <View style={styles.box_2}>
                    {/* Row 1 */}
                    <View style={styles.in_box}>
                        {/* 1 - Image */}
                        <Image
                            source={require("../Pics/UniPics/Deakin.png")}
                            style={styles.img_fir}
                        />
                        {/* 2 - Title */}
                        <Text
                            style={styles.sec}>
                            Deakin University
                        </Text>
                    </View>
                    {/* Row 2 */}
                    <View style={styles.third}>
                        {/* 1 - Text */}
                        <Text style={styles.third_1}><FontAwesome5 name="book" size={12.5} color="#EB2F06" />  Courses</Text>
                        {/* 2 - Title */}
                        <Text style={styles.third_2}>Arts</Text>
                    </View>
                    {/* Row 3 */}
                    <View style={styles.forth}>
                        {/* 1 */}
                        <View style={styles.forth_1}>
                            <Text style={styles.for_1}><FontAwesome5 name="money-bill" size={12.5} color="#EB2F06" />  Semester Fee</Text>
                            <Text style={styles.for_2}>1000 $</Text>
                        </View>
                        {/* 2 */}
                        <View style={styles.forth_1}>
                            <Text style={styles.for_1}><AntDesign name="clockcircle" size={12.5} color="#EB2F06" />  Duration</Text>
                            <Text style={styles.for_22}>2 Years</Text>
                        </View>
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
        backgroundColor: "white",
    },
    box: {
        width: '88%',
        borderRadius: 17,
        // borderWidth: 1,
        borderColor: "black",
        alignSelf: 'center',
        marginTop: 16,
        // marginBottom: 4,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 15,
        // backgroundColor: "#FCDFD8",
        backgroundColor: "#FCBBAC",
        // backgroundColor: "#FED1C7",
        paddingHorizontal: 5,
        paddingVertical: 6,
    },
    box_2: {
        width: "100%",
        flexDirection: "column",
        paddingVertical: 7,
    },
    in_box: {
        // borderWidth: 0.1,
        width: "100%",
        height: 52,
        flexDirection: "row",
        paddingVertical: 2,
    },
    img_fir: {
        // borderWidth: 1,
        // borderColor: "red",
        width: "23%",
        height: '100%',
        marginLeft: 9,
        borderRadius: 7,
    },
    sec: {
        letterSpacing: 2,
        textAlign: "center",
        fontFamily: "KanitBold",
        width: "70%",
        marginLeft: 10,
        color: "black",
        marginTop: 11,
        // borderWidth: 1,
        //   height: 20,
        fontSize: 16,
        textTransform: "uppercase",
        paddingHorizontal: 2,
    },
    third: {
        marginTop: 10.5,
        // borderWidth: 1,
        width: "100%",
        // height: 48,
        flexDirection: "column",
    },
    third_1: {
        letterSpacing: 0.6,
        textAlign: "left",
        fontFamily: "Kanit",
        // color: "#636e72",
        marginHorizontal: 10,
        fontSize: 13.5,
        paddingVertical: 3.2,
        paddingHorizontal: 7.5,
        backgroundColor: "#dff9fb",
        borderRadius: 7,
        width: "29%",
        marginTop: 5,
    },
    third_2: {
        letterSpacing: 1.6,
        textAlign: "left",
        fontFamily: "Heebo",
        marginHorizontal: 12,
        color: "black",
        marginTop: 2,
        // borderWidth: 1,
        fontSize: 13,
        paddingVertical: 4.5,
        paddingHorizontal: 2,
        marginBottom: 2,
    },
    forth: {
        // borderWidth: 1,
        marginTop: 5,
        paddingVertical: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    forth_1: {
        // borderWidth: 0.5,
        paddingVertical: 1,
    },
    for_1: {
        // color: "#636e72",
        fontSize: 13.5,
        letterSpacing: 0.6,
        fontFamily: "Kanit",
        paddingVertical: 3.2,
        paddingHorizontal: 7.5,
        backgroundColor: "#dff9fb",
        borderRadius: 7,
    },
    for_2: {
        // color: "#009432",
        letterSpacing: 1.5,
        fontSize: 13,
        fontFamily: "Heebo",
        marginTop: 6,
        paddingHorizontal: 4.5,
    },
    for_22: {
        // color: "#e84118",
        letterSpacing: 1.5,
        fontSize: 13,
        fontFamily: "Heebo",
        marginTop: 6,
        paddingHorizontal: 4,
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
    },
    Ext_AL_1: {
        // borderWidth: 0.5,
        paddingVertical: 20,
    },
    Ext_AL_ParentImg: {
        // borderWidth: 0.5,
        paddingVertical: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    Ext_AL_Img: {
        // borderWidth: 0.1,
        // borderColor: "black",
        width: 100,
        height: 100,
    },
    Ext_AL_Txt: {
        // borderWidth: 0.5,
        textAlign: "center",
        fontFamily: "HeeboExtra",
        fontSize: 22,
        letterSpacing: 1.3,
    },
    Ext_AL_Txt_1: {
        // borderWidth: 0.5,
        textAlign: "center",
        fontFamily: "Kanit",
        fontSize: 12,
        letterSpacing: 1,
        paddingHorizontal: 30,
        color: "grey",
        textTransform: "capitalize",
        letterSpacing: 1,
        paddingVertical: 6,
    }
})