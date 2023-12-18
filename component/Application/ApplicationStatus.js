import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";

export default function ApplicationStatus() {
    const [button1Color, setButton1Color] = useState('#EEF0F2');
    const [button2Color, setButton2Color] = useState('#EEF0F2');
    const [button3Color, setButton3Color] = useState('#EEF0F2');
    const [button4Color, setButton4Color] = useState('#EEF0F2');
    const [button5Color, setButton5Color] = useState('#EEF0F2');
    const [button6Color, setButton6Color] = useState('#EEF0F2');
    const [button7Color, setButton7Color] = useState('#EEF0F2');
    const [button8Color, setButton8Color] = useState('#EEF0F2');
    // Functions
    // 1
    const handleButton1Click = () => {
        setButton1Color('orange');
    };
    // 2
    const handleButton2Click = () => {
        // Button 2
        setButton2Color('orange');
        // Button 1 
        setButton1Color('lightyellow');
    };
    // 3
    const handleButton3Click = () => {
        // Button 3
        setButton3Color('orange');
        // Button 1 
        setButton1Color('lightyellow');
        // Button 2
        setButton2Color('lightyellow');
    };
    // 4
    const handleButton4Click = () => {
        // Button 4
        setButton4Color('orange');
        // Button 1 
        setButton1Color('lightyellow');
        // Button 2
        setButton2Color('lightyellow');
        // Button 3
        setButton3Color('lightyellow');
    };
    // 5
    const handleButton5Click = () => {
        // Button 5
        setButton5Color('orange');
        // Button 1 
        setButton1Color('lightyellow');
        // Button 2
        setButton2Color('lightyellow');
        // Button 3
        setButton3Color('lightyellow');
        // Button 4
        setButton4Color('lightyellow');
    };
    // 6
    const handleButton6Click = () => {
        // Button 6
        setButton6Color('orange');
        // Button 1 
        setButton1Color('lightyellow');
        // Button 2
        setButton2Color('lightyellow');
        // Button 3
        setButton3Color('lightyellow');
        // Button 4
        setButton4Color('lightyellow');
        // Button 5
        setButton5Color('lightyellow');
    };
    // 7
    const handleButton7Click = () => {
        // Button 7
        setButton7Color('orange');
        // Button 1 
        setButton1Color('lightyellow');
        // Button 2
        setButton2Color('lightyellow');
        // Button 3
        setButton3Color('lightyellow');
        // Button 4
        setButton4Color('lightyellow');
        // Button 5
        setButton5Color('lightyellow');
        // Button 6
        setButton6Color('lightyellow');
    };
    // 8
    const handleButton8Click = () => {
        // Button 8
        setButton8Color('orange');
        // Button 1 
        setButton1Color('lightyellow');
        // Button 2
        setButton2Color('lightyellow');
        // Button 3
        setButton3Color('lightyellow');
        // Button 4
        setButton4Color('lightyellow');
        // Button 5
        setButton5Color('lightyellow');
        // Button 6
        setButton6Color('lightyellow');
        // Button 7
        setButton7Color('lightyellow');
    };
    // -----------------------------------------------
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
            {/* Scroll View */}
            <ScrollView>
                {/* StatusBar */}
                <StatusBar backgroundColor={"#EB2F06"} />
                {/* Start */}
                {/* 1 - Application Course Mini Detail */}
                <View style={styles.ParentMiniCourseDetail}>
                    <View style={styles.sub_ParentMiniCourseDetail}>
                        {/* Course Mini Detail */}
                        <View style={styles.MiniCourseDetail}>
                            {/* Item 1 */}
                            <Text style={styles.Item1}>Track Number</Text>
                            <Text style={styles.Item1_2}>QWERTY1357910</Text>
                            {/* Item Image */}
                            <View style={styles.ParentCourseImg}>
                                <View style={styles.subParentCourseImg}>
                                    <Image source={require('../Pics/UniPics/Western.png')} style={styles.CourseImg} />
                                </View>
                            </View>
                            {/* Item 2 */}
                            <Text style={styles.Item2_1}>University :</Text>
                            <Text style={styles.Item2}>Western Sdyney University</Text>
                            <Text style={styles.Item2_1}>Course :</Text>
                            <Text style={styles.Item2_2}>Applied Sciences</Text>
                        </View>
                    </View>
                </View>
                {/* 2 - Application Status */}
                <Text style={styles.AppStatus}>Application Status</Text>
                {/* 3 - 5 Processing Parts */}
                <View style={styles.Parent_Processing}>
                    {/* Box 1 */}
                    <View style={styles.Parent_Processing_Box1}>
                        <View style={styles.Parent_Processing_Box1_Part1}>
                            {/* Image Part */}
                            <View style={[styles.Parent_Processing_Box1_Part1_Image, { backgroundColor: button1Color }]}>
                                <Image source={require('../Pics/step1.png')} style={styles.Parent_Processing_Box1_Part1_ImageIcon} />
                            </View>
                            {/* Line Part */}
                            <View style={styles.Parent_Processing_Box1_Part1_ParentLine}>
                                <Text style={styles.Parent_Processing_Box1_Part1_Line}></Text>
                            </View>
                        </View>
                        <View style={styles.Parent_Processing_Box1_Part2}>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text1} onPress={handleButton1Click}>Application Received</Text>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text2}>Step 1</Text>
                        </View>
                    </View>
                    {/* Box 2 */}
                    <View style={styles.Parent_Processing_Box1}>
                        <View style={styles.Parent_Processing_Box1_Part1}>
                            {/* Image Part */}
                            <View style={[styles.Parent_Processing_Box1_Part1_Image, { backgroundColor: button2Color }]}>
                                <Image source={require('../Pics/step2.png')} style={styles.Parent_Processing_Box1_Part1_ImageIcon} />
                            </View>
                            {/* Line Part */}
                            <View style={styles.Parent_Processing_Box1_Part1_ParentLine}>
                                <Text style={styles.Parent_Processing_Box1_Part1_Line}></Text>
                            </View>
                        </View>
                        <View style={styles.Parent_Processing_Box1_Part2}>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text1} onPress={handleButton2Click}>Document Verification</Text>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text2}>Step 2</Text>
                        </View>
                    </View>
                    {/* Box 3 */}
                    <View style={styles.Parent_Processing_Box1}>
                        <View style={styles.Parent_Processing_Box1_Part1}>
                            {/* Image Part */}
                            <View style={[styles.Parent_Processing_Box1_Part1_Image, { backgroundColor: button3Color }]}>
                                <Image source={require('../Pics/step3.png')} style={styles.Parent_Processing_Box1_Part1_ImageIcon} />
                            </View>
                            {/* Line Part */}
                            <View style={styles.Parent_Processing_Box1_Part1_ParentLine}>
                                <Text style={styles.Parent_Processing_Box1_Part1_Line}></Text>
                            </View>
                        </View>
                        <View style={styles.Parent_Processing_Box1_Part2}>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text1} onPress={handleButton3Click}>Conditional Offer</Text>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text2}>Step 3</Text>
                        </View>
                    </View>
                    {/* Box 4 */}
                    <View style={styles.Parent_Processing_Box1}>
                        <View style={styles.Parent_Processing_Box1_Part1}>
                            {/* Image Part */}
                            <View style={[styles.Parent_Processing_Box1_Part1_Image, { backgroundColor: button4Color }]}>
                                <Image source={require('../Pics/step4.png')} style={styles.Parent_Processing_Box1_Part1_ImageIcon} />
                            </View>
                            {/* Line Part */}
                            <View style={styles.Parent_Processing_Box1_Part1_ParentLine}>
                                <Text style={styles.Parent_Processing_Box1_Part1_Line}></Text>
                            </View>
                        </View>
                        <View style={styles.Parent_Processing_Box1_Part2}>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text1} onPress={handleButton4Click}>Document Request</Text>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text2}>Step 4</Text>
                        </View>
                    </View>
                    {/* Box 5 */}
                    <View style={styles.Parent_Processing_Box1}>
                        <View style={styles.Parent_Processing_Box1_Part1}>
                            {/* Image Part */}
                            <View style={[styles.Parent_Processing_Box1_Part1_Image, { backgroundColor: button5Color }]}>
                                <Image source={require('../Pics/step5.png')} style={styles.Parent_Processing_Box1_Part1_ImageIcon} />
                            </View>
                            {/* Line Part */}
                            <View style={styles.Parent_Processing_Box1_Part1_ParentLine}>
                                <Text style={styles.Parent_Processing_Box1_Part1_Line}></Text>
                            </View>
                        </View>
                        <View style={styles.Parent_Processing_Box1_Part2}>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text1} onPress={handleButton5Click}>Unconditional Offer</Text>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text2}>Step 5</Text>
                        </View>
                    </View>
                    {/* Box 6 */}
                    <View style={styles.Parent_Processing_Box1}>
                        <View style={styles.Parent_Processing_Box1_Part1}>
                            {/* Image Part */}
                            <View style={[styles.Parent_Processing_Box1_Part1_Image, { backgroundColor: button6Color }]}>
                                <Image source={require('../Pics/step6.png')} style={styles.Parent_Processing_Box1_Part1_ImageIcon} />
                            </View>
                            {/* Line Part */}
                            <View style={styles.Parent_Processing_Box1_Part1_ParentLine}>
                                <Text style={styles.Parent_Processing_Box1_Part1_Line}></Text>
                            </View>
                        </View>
                        <View style={styles.Parent_Processing_Box1_Part2}>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text1} onPress={handleButton6Click}>Confirmation Enrolment</Text>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text2}>Step 6</Text>
                        </View>
                    </View>
                    {/* Box 7 */}
                    <View style={styles.Parent_Processing_Box1}>
                        <View style={styles.Parent_Processing_Box1_Part1}>
                            {/* Image Part */}
                            <View style={[styles.Parent_Processing_Box1_Part1_Image, { backgroundColor: button7Color }]}>
                                <Image source={require('../Pics/step7.png')} style={styles.Parent_Processing_Box1_Part1_ImageIcon} />
                            </View>
                            {/* Line Part */}
                            <View style={styles.Parent_Processing_Box1_Part1_ParentLine}>
                                <Text style={styles.Parent_Processing_Box1_Part1_Line}></Text>
                            </View>
                        </View>
                        <View style={styles.Parent_Processing_Box1_Part2}>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text1} onPress={handleButton7Click}>Visa Application Submitted</Text>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text2}>Step 7</Text>
                        </View>
                    </View>
                    {/* Box 8 */}
                    <View style={styles.Parent_Processing_Box1}>
                        <View style={styles.Parent_Processing_Box1_Part1}>
                            {/* Image Part */}
                            <View style={[styles.Parent_Processing_Box1_Part1_Image, { backgroundColor: button8Color, marginBottom: 30 }]}>
                                <Image source={require('../Pics/step8.png')} style={styles.Parent_Processing_Box1_Part1_ImageIcon} />
                            </View>
                            {/* No Line Part */}
                        </View>
                        <View style={styles.Parent_Processing_Box1_Part2}>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text1} onPress={handleButton8Click}>Visa Granted</Text>
                            <Text style={styles.Parent_Processing_Box1_Part2_Text2}>Step 8</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:"white"
    },
    ParentMiniCourseDetail: {
        // borderWidth: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
    sub_ParentMiniCourseDetail: {
        borderWidth: 0.5,
        borderColor: "#dff9fb",
        paddingVertical: 25,
        paddingHorizontal: 20,
        // backgroundColor: "#dff9fb",
        backgroundColor: "#c7ecee",
        borderRadius: 20,
    },
    MiniCourseDetail: {
        borderWidth: 0.5,
        borderColor: "#218c74",
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        backgroundColor: "#218c74",
    },
    Item1: {
        // borderWidth: 0.5,
        textAlign: "center",
        color: "white",
        fontFamily: "Kanit",
        fontSize: 12.5,
        letterSpacing: 1,
    },
    Item1_2: {
        // borderWidth: 0.5,
        textAlign: "center",
        color: "white",
        fontFamily: "HeeboExtra",
        fontSize: 14,
        marginVertical: 3,
        letterSpacing: 2,
    },
    ParentCourseImg: {
        // borderWidth: 0.5,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    subParentCourseImg: {
        // borderWidth: 0.5,
        // borderColor: "red",
        padding: 1,
        width: 93,
        height: 56,
    },
    CourseImg: {
        borderWidth: 0.5,
        borderColor: "red",
        width: 95,
        height: 54,
        borderRadius: 5,
    },
    Item2: {
        // borderWidth: 0.5,
        textAlign: "center",
        color: "white",
        fontFamily: "Archivo",
        fontSize: 14,
        letterSpacing: 0.2,
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    Item2_1: {
        // borderWidth: 0.5,
        color: "white",
        fontFamily: "Kanit",
        fontSize: 14,
        letterSpacing: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    Item2_2: {
        // borderWidth: 0.5,
        color: "white",
        fontFamily: "Archivo",
        fontSize: 14,
        letterSpacing: 1,
        marginTop: 3,
        paddingHorizontal: 15,
        textAlign: "center",
    },
    AppStatus: {
        // borderWidth: 0.5,
        fontFamily: "HeeboExtra",
        fontSize: 18,
        letterSpacing: 1,
        marginTop: 15,
        marginBottom: 15,
        paddingHorizontal: 28,
    },
    Parent_Processing: {
        // borderWidth: 0.5,
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    Parent_Processing_Box1: {
        // borderWidth: 0.5,
        // paddingVertical: 1,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    Parent_Processing_Box1_Part1: {
        // borderWidth: 0.5,
        paddingVertical: 0,
        width: "30%",
        // marginHorizontal: 1,
    },
    Parent_Processing_Box1_Part2: {
        // borderWidth: 0.5,
        paddingVertical: 8,
        paddingHorizontal: 8,
        width: "70%",
        marginBottom: 33,
    },
    Parent_Processing_Box1_Part1_Image: {
        borderWidth: 1.5,
        borderColor: "#DFE9F3",
        width: "69%",
        paddingVertical: 14,
        backgroundColor: "#ECF0F4",
        // backgroundColor:"orange",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 100,
    },
    Parent_Processing_Box1_Part1_ImageIcon: {
        justifyContent: "center",
        alignSelf: "center",
        // borderWidth: 0.5,
        // borderColor: "red",
        width: 25,
        height: 25,
    },
    Parent_Processing_Box1_Part1_ParentLine: {
        // borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    Parent_Processing_Box1_Part1_Line: {
        // borderWidth: 0.5,
        width: "3%",
        height: 32,
        backgroundColor: "#535c68",
    },
    Parent_Processing_Box1_Part2_Text1: {
        // borderWidth: 0.5,
        fontFamily: "Heebo",
        paddingVertical: 1,
        paddingHorizontal: 10,
        fontSize: 14,
        letterSpacing: 0.5,
    },
    Parent_Processing_Box1_Part2_Text2: {
        // borderWidth: 0.5,
        fontFamily: "Kanit",
        paddingHorizontal: 10,
        fontSize: 15,
        color: "grey",
        letterSpacing: 0.5,
    },
})