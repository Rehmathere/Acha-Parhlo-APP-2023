import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity
} from "react-native";
// Fonts Header File
import { useFonts } from "expo-font";
import { LinearGradient } from 'expo-linear-gradient';

export default function Drawer() {
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
            {/* Dashboard */}
            {/* 1 - Name */}
            <View style={styles.ParentFirst}>
                <Text style={styles.fir}>Hello,</Text>
                <Text style={styles.fir_2}>Rehmat</Text>
            </View>
            {/* 2 - Image Slider */}
            <View style={styles.ParentSecond}>
                <View style={styles.secLinear}>
                    <View style={styles.SubParentSecond}>
                        {/* Part 1 */}
                        <View style={styles.second1}>
                            <Text style={styles.second1Txt}>Let's Start{'\n'}Exploring</Text>
                        </View>
                        {/* Part 2 */}
                        <View style={styles.second2}>
                            <Image source={require('../Pics/Online.png')} style={styles.sec2Img} />
                        </View>
                    </View>
                </View>
            </View>
            {/* 3 - Categories */}
            <Text style={styles.third}>Categories</Text>
            <View style={styles.ParentThird}>
                {/* Row 1 */}
                <View style={styles.ThirdRow}>
                    {/* Box 1 */}
                    <TouchableOpacity>
                        <View style={styles.ThirdBox}>
                            <LinearGradient colors={["black", "#EB2F06"]} style={{ borderRadius: 20 }}>
                                {/* Image */}
                                <View style={styles.ThirdBoxImg}>
                                    <Image source={require('../Pics/SearchUni.png')} style={styles.ThirdBoxOrignalImg} />
                                </View>
                                {/* Title */}
                                <Text style={styles.ThirdBoxTxt}>Search{'\n'}University</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    {/* Box 2 */}
                    <TouchableOpacity>
                        <View style={styles.ThirdBox}>
                            <LinearGradient colors={["black", "#EB2F06"]} style={{ borderRadius: 20, }}>
                                {/* Image */}
                                <View style={styles.ThirdBoxImg}>
                                    <Image source={require('../Pics/Appoint.png')} style={styles.ThirdBoxOrignalImg} />
                                </View>
                                {/* Title */}
                                <Text style={styles.ThirdBoxTxt}>Book{'\n'}Appointment</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Row 2 */}
                <View style={styles.ThirdRow}>
                    {/* Box 1 */}
                    <TouchableOpacity>
                        <View style={styles.ThirdBox}>
                            <LinearGradient colors={["black", "#EB2F06"]} style={{ borderRadius: 20, }}>
                                {/* Image */}
                                <View style={styles.ThirdBoxImg}>
                                    <Image source={require('../Pics/Tracking.png')} style={styles.ThirdBoxOrignalImg} />
                                </View>
                                {/* Title */}
                                <Text style={styles.ThirdBoxTxt}>Application{'\n'}Tracking</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    {/* Box 2 */}
                    <TouchableOpacity>
                        <View style={styles.ThirdBox}>
                            <LinearGradient colors={["black", "#EB2F06"]} style={{ borderRadius: 20, }}>
                                {/* Image */}
                                <View style={styles.ThirdBoxImg}>
                                    <Image source={require('../Pics/Chat.png')} style={styles.ThirdBoxOrignalImg} />
                                </View>
                                {/* Title */}
                                <Text style={styles.ThirdBoxTxt}>Chat{'\n'}Consultant</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Start */}
        </View >
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    ParentFirst: {
        // borderWidth: 0.5,
        flexDirection: "row",
        paddingHorizontal: 4,
        paddingVertical: 3,
    },
    fir: {
        fontFamily: "Heebo",
        // borderWidth: 1,
        fontSize: 17,
        marginTop: 20,
        marginLeft: 16,
        paddingHorizontal: 5,
        letterSpacing: 1,
    },
    fir_2: {
        fontFamily: "KanitBold",
        // borderWidth: 1,
        color: "red",
        fontSize: 35,
        marginTop: 1,
        // marginHorizontal: 10,
        paddingHorizontal: 3,
        letterSpacing: 1.5,
        textTransform: "uppercase",
    },
    ParentSecond: {
        // borderWidth: 1,
        borderColor: "red",
        paddingVertical: 9,
    },
    secLinear: {
        // borderWidth: 1,
        paddingVertical: 0,
        marginHorizontal: 23,
        borderRadius: 5,
        backgroundColor:"#ced6e0",
        elevation: 10,
        shadowColor:"blue",
    },
    SubParentSecond: {
        // borderWidth: 1,
        marginHorizontal: 5,
        paddingHorizontal: 1,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    second1: {
        // borderWidth: 0.5,
        width: "51%",
        paddingVertical: 1,
        justifyContent: "center",
    },
    second1Txt: {
        // borderWidth: 0.5,
        textShadowRadius: 10,
        textShadowColor: "black",
        textAlign: "center",
        fontFamily: "Heebo",
        color: "white",
        paddingHorizontal: 2,
        letterSpacing: 1,
        fontSize: 25,
    },
    second2: {
        width: "49%",
        // borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
    },
    sec2Img: {
        // borderColor: "black",
        // borderWidth: 0.5,
        width: 70,
        height: 70,
    },
    third: {
        marginTop: 25,
        marginHorizontal: 10,
        // borderWidth: 0.5,
        fontSize: 15,
        paddingHorizontal: 15,
        fontFamily: "HeeboExtra",
        letterSpacing: 1,
    },
    ParentThird: {
        // borderWidth: 0.5,
        marginTop: 0,
        paddingHorizontal: 5,
        paddingVertical: 8,
    },
    ThirdRow: {
        // borderWidth: 0.5,
        // borderColor: "red",
        padding: 8,
        marginVertical: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    ThirdBox: {
        // borderWidth: 1,
        width: "100%",
        borderRadius: 20,
    },
    ThirdBoxImg: {
        borderWidth: 0.5,
        // borderColor: "red",
        borderColor: "transparent",
        paddingVertical: 10,
        paddingHorizontal: 36.4,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
    },
    ThirdBoxOrignalImg: {
        // borderWidth: 1,
        // borderColor: "black",
        width: 55,
        height: 55,
    },
    ThirdBoxTxt: {
        // borderWidth: 0.5,
        marginBottom: 15,
        fontSize: 15.5,
        color: "white",
        textShadowRadius: 10,
        textShadowColor: "black",
        letterSpacing: 2,
        textAlign: "center",
        fontFamily: "KanitBold"
    }
});
