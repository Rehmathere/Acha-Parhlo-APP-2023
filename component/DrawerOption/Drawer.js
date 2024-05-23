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
import { firebase } from "../firestore";
import { useNavigation } from '@react-navigation/native';

export default function Drawer() {
    const navigation = useNavigation();
    // -------- Dashboard Logic ----------
    // useState
    const [email, setEmail] = useState("");
    // useEffect
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = firebase.auth().currentUser;
                if (user) {
                    // Get the user's email
                    const userEmail = user.email;
                    // Update the state with the user's email
                    setEmail(userEmail);
                } else {
                    console.log("User not logged in");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);
    // -------- Dashboard Logic ----------
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
                <Text style={styles.fir}>Hey,</Text>
                {/* <Text style={styles.fir_2}>{email.slice(0, 10)}</Text> */}
                <Text style={styles.fir_2}>{email.split('@')[0]}</Text>
            </View>
            {/* 2 - Image Slider */}
            <View style={styles.ParentSecond}>
                <View style={styles.secLinear}>
                    <LinearGradient colors={["#DAE1EB", "#989898"]} style={{ borderRadius: 15, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                        <View style={styles.SubParentSecond}>
                            {/* Part 1 */}
                            <View style={styles.second1}>
                                <Text style={styles.second1Txt}>Let's Start{'\n'}Exploring</Text>
                            </View>
                            {/* Part 2 */}
                            <View style={styles.second2}>
                                <Image source={require('../Pics/Online_2.png')} style={styles.sec2Img} />
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            </View>
            {/* 3 - Categories */}
            <Text style={styles.third}>Categories</Text>
            <View style={styles.ParentThird}>
                {/* Row 1 */}
                <View style={styles.ThirdRow}>
                    {/* Box 1 */}
                    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                        <View style={styles.ThirdBox}>
                            <LinearGradient colors={["#FF8970", "#EB2F06"]} style={{ borderRadius: 15, }}>
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
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <View style={styles.ThirdBox}>
                            <LinearGradient colors={["#FF8970", "#EB2F06"]} style={{ borderRadius: 15, }}>
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
                {/* Row 3 ( Center Row ) */}
                <View style={styles.ThirdRow_E}>
                    <TouchableOpacity onPress={() => navigation.navigate("Page_Vir_Consult")}>
                        <View style={styles.ThirdBox_E}>
                            <LinearGradient colors={["#FF8970", "#EB2F06"]} style={{ borderRadius: 15, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                {/* Image */}
                                <View style={styles.ThirdBoxImg_E}>
                                    <Image source={require('../Pics/AI.png')} style={styles.ThirdBoxOrignalImg_E} />
                                </View>
                                {/* Title */}
                                <Text style={styles.ThirdBoxTxt_E}>Virtual Consultancy</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Row 2 */}
                <View style={styles.ThirdRow}>
                    {/* Box 1 */}
                    <TouchableOpacity onPress={() => navigation.navigate("ApplicationList")}>
                        <View style={styles.ThirdBox}>
                            <LinearGradient colors={["#FF8970", "#EB2F06"]} style={{ borderRadius: 15, }}>
                                {/* Image */}
                                <View style={styles.ThirdBoxImg}>
                                    <Image source={require('../Pics/Tracking_1.png')} style={styles.ThirdBoxOrignalImg} />
                                </View>
                                {/* Title */}
                                <Text style={styles.ThirdBoxTxt}>Application{'\n'}Tracking</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    {/* Box 2 */}
                    <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                        <View style={styles.ThirdBox}>
                            <LinearGradient colors={["#FF8970", "#EB2F06"]} style={{ borderRadius: 15, }}>
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
        paddingBottom: 5,
    },
    fir: {
        fontFamily: "Heebo",
        // borderWidth: 1,
        fontSize: 16,
        marginTop: 20,
        marginLeft: 16,
        paddingHorizontal: 5,
        letterSpacing: 1,
    },
    fir_2: {
        fontFamily: "KanitBold",
        // borderWidth: 1,
        color: "red",
        fontSize: 25,
        marginTop: 8,
        // marginHorizontal: 10,
        paddingHorizontal: 3,
        letterSpacing: 0,
        textTransform: "uppercase",
    },
    ParentSecond: {
        // borderWidth: 0.5,
        borderColor: "red",
        paddingVertical: 5,
    },
    secLinear: {
        // borderWidth: 1,
        paddingVertical: 0,
        marginHorizontal: 20,
        borderRadius: 15,
        // backgroundColor: "#ced6e0",
        // elevation: 10,
        // shadowColor:"blue",
    },
    SubParentSecond: {
        // borderWidth: 1,
        marginHorizontal: 5,
        paddingHorizontal: 1,
        paddingVertical: 4,
        flexDirection: "row",
        justifyContent: "center",
    },
    second1: {
        // borderWidth: 0.5,
        width: "51%",
        paddingVertical: 0,
        justifyContent: "center",
    },
    second1Txt: {
        // borderWidth: 0.5,
        // textShadowRadius: 10,
        // textShadowColor: "black",
        textAlign: "center",
        fontFamily: "Kanit",
        color: "black",
        paddingHorizontal: 2,
        letterSpacing: 1.3,
        fontSize: 22,
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
        width: 115,
        height: 90,
    },
    third: {
        marginTop: 20,
        marginHorizontal: 11,
        // borderWidth: 0.5,
        fontSize: 15,
        paddingHorizontal: 14,
        fontFamily: "HeeboExtra",
        letterSpacing: 1.2,
    },
    ParentThird: {
        // borderWidth: 0.5,
        marginTop: 0,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    ThirdRow: {
        // borderWidth: 0.5,
        // borderColor: "red",
        paddingVertical: 6,
        paddingHorizontal: 0,
        marginVertical: 0.5,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    ThirdRow_E: {
        // borderWidth: 0.5,
        // borderColor: "red",
        paddingVertical: 5,
        paddingHorizontal: 0,
        marginVertical: 0,
        marginHorizontal: 15,
    },
    ThirdBox: {
        // borderWidth: 1,
        width: "100%",
        borderRadius: 20,
    },
    ThirdBox_E: {
        // borderWidth: 1,
        width: "100%",
        borderRadius: 10,
    },
    ThirdBoxImg: {
        borderWidth: 0.5,
        // borderColor: "red",
        borderColor: "transparent",
        paddingVertical: 10,
        paddingHorizontal: 36,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 6,
    },
    ThirdBoxImg_E: {
        borderWidth: 0.5,
        // borderColor: "red",
        borderColor: "transparent",
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 0,
    },
    ThirdBoxOrignalImg: {
        // borderWidth: 1,
        // borderColor: "black",
        width: 50,
        height: 50,
    },
    ThirdBoxOrignalImg_E: {
        // borderWidth: 1,
        // borderColor: "black",
        width: 30,
        height: 30,
    },
    ThirdBoxTxt: {
        // borderWidth: 0.5,
        marginBottom: 12,
        fontSize: 13,
        color: "white",
        textShadowRadius: 10,
        textShadowColor: "green",
        letterSpacing: 3,
        textAlign: "center",
        fontFamily: "HeeboExtra"
    },
    ThirdBoxTxt_E: {
        // borderWidth: 0.5,
        marginBottom: 0,
        fontSize: 13,
        color: "white",
        textShadowRadius: 10,
        textShadowColor: "green",
        letterSpacing: 3,
        textAlign: "center",
        fontFamily: "KanitBold"
    },
});
