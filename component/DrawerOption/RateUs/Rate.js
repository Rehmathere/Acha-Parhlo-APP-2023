import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image, Modal, Button } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";

export default function Rate() {
    // Some Modal JS
    const [showContent, setShowContent] = useState(false)
    const [defaultRating, setDefaultRating] = useState(0)
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])
    // Expo Font Logic
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    let [loaded] = useFonts({
        Archivo: require("../../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
        Kanit: require("../../../assets/fonts/My_Soul/Kanit-Light.ttf"),
        Heebo: require("../../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
        HeeboExtra: require("../../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
        KanitBold: require("../../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
        KanitBlack: require("../../../assets/fonts/My_Soul/Kanit-Black.ttf"),
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
    // Custom Rating Fuction
    const CustomRatingBar = () => {
        return (
            <View style={styles.customeRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity key={item} activeOpacity={0.7} onPress={() => setDefaultRating(item)}>
                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating ? require('../../Pics/starfill.png') : require('../../Pics/starcorner.png')
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
    // Main Body
    return (
        <View style={styles.container}>
            {/* Status Bar */}
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* Start */}
            {/* Feedback Image */}
            <View style={styles.FeedbackParent}>
                <Image source={require('../../Pics/rate_3.png')} style={styles.imgFeedback} />
            </View>
            <Text style={styles.fir}>Give Us Your Feedback</Text>
            <Text style={styles.fir2}>Your feedback matters! Share your thoughts about our app, and let's shape it together for better usability.</Text>
            {/* Rate Us Function ( Defined Above ) */}
            <CustomRatingBar />
            {/* Rating Number */}
            <Text style={styles.rateNum}>
                {
                    defaultRating + " / " + maxRating.length
                }
            </Text>
            {/* Rating Status */}
            <Text style={styles.rateNum2}>
                {defaultRating == "1" ? <Text style={{ color: "red", fontFamily: "KanitBold", fontSize: 17, letterSpacing: 1.5, }}>Poor</Text> : null}
                {defaultRating == "2" ? <Text style={{ color: "brown", fontFamily: "KanitBold", fontSize: 17, letterSpacing: 1.5, }}>Fair</Text> : null}
                {defaultRating == "3" ? <Text style={{ color: "#F69303", fontFamily: "KanitBold", fontSize: 17, letterSpacing: 1.5, }}>Average </Text> : null}
                {defaultRating == "4" ? <Text style={{ color: "blue", fontFamily: "KanitBold", fontSize: 17, letterSpacing: 1.5, }}>Good</Text> : null}
                {defaultRating == "5" ? <Text style={{ color: "green", fontFamily: "KanitBold", fontSize: 17, letterSpacing: 1.5, }}>Excellent</Text> : null}
            </Text>
            {/* Button */}
            <TouchableOpacity style={styles.subBtn}>
                <Text style={styles.subTxt} onPress={() => setShowContent(true)}>Feedback</Text>
            </TouchableOpacity>
            {/* Modal */}
            <Modal
                transparent={true}
                visible={showContent}
                animationType="fade"
            >
                <View style={styles.modal_parent}>
                    <View style={styles.modal_child}>
                        <Text style={styles.modalTxt}>Thankful For Your Feedback</Text>
                        <View style={styles.imgParent}>
                            <Image source={require('../../Pics/thumb.png')} style={styles.modalImg} />
                        </View>
                        <View style={styles.modalBtnParent}>
                            <Button title='Close' color={"red"} onPress={() => setShowContent(!showContent)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    customeRatingBarStyle: {
        justifyContent: "center",
        flexDirection: "row",
        // borderWidth: 1,
        paddingVertical: 5,
    },
    FeedbackParent: {
        // borderWidth: 1,
        paddingVertical: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    imgFeedback: {
        // borderWidth: 1,
        borderColor: "black",
        width: 150,
        height: 150,
    },
    fir: {
        // borderWidth: 1,
        textAlign: "center",
        paddingVertical: 6,
        fontFamily: "HeeboExtra",
        letterSpacing: 2.5,
        fontSize: 20,
    },
    fir2: {
        // borderWidth: 1,
        textAlign: "center",
        paddingTop: 5,
        paddingBottom: 15,
        paddingHorizontal: 30,
        letterSpacing: 1,
        fontSize: 14,
        fontFamily: "Kanit",
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: "cover",
        marginLeft: 7,
    },
    rateNum: {
        marginTop: 14,
        // borderWidth: 1,
        padding: 5,
        letterSpacing: 1,
        fontSize: 20,
        fontFamily: "Heebo",
        textAlign: "center",
    },
    rateNum2: {
        marginVertical: 0,
        // borderWidth: 1,
        fontSize: 22,
        letterSpacing: 1,
        fontFamily: "Kanit",
        textAlign: "center",
    },
    subBtn: {
        borderWidth: 1,
        borderColor: "#EB2F06",
        marginVertical: 25,
        marginHorizontal: 50,
        borderRadius: 50,
        backgroundColor: "#EB2F06",
    },
    subTxt: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        paddingVertical: 7,
        fontFamily: "Heebo",
        letterSpacing: 2.5,
    },
    modal_parent: {
        // borderWidth: 1,
        backgroundColor: "rgba(0, 0, 0, 0.70)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modal_child: {
        // borderWidth: 1,
        // borderColor: "white",
        width: "80%",
        borderRadius: 10,
        paddingVertical: 29,
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    modalTxt: {
        fontSize: 23,
        fontFamily: "Heebo",
        textAlign: "center",
        letterSpacing: 1,
    },
    modalBtnParent: {
        // borderWidth: 1,
        paddingVertical: 3,
        paddingHorizontal: 30,
    },
    imgParent: {
        // borderWidth: 1,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    modalImg: {
        // borderWidth: 1,
        width: 100,
        height: 100,
        borderColor: "black",
    },
})












