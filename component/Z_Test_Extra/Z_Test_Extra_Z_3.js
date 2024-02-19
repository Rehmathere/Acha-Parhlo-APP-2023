import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useFonts } from "expo-font";
import { firebase } from "../firestore";
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Z_Test_Extra_Z_3() {
    // ----------- Backend Part Logic ----------- 
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        // Fetch data from Firestore
        const fetchData = async () => {
            const snapshot = await firebase.firestore().collection("5 - App Wishlist").get();
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setWishList(data);
        };

        fetchData();
    }, []);
    // ----------- Backend Part Logic ----------- 
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
    const renderEmpty = () => {
        return (
            <>
                <View style={styles.ParentEmpty}>
                    <Image source={require('../Pics/empty_2.png')} style={styles.EmptyPic} />
                </View>
                <Text style={styles.noText}>No Wish List Here</Text>
            </>
        );
    };
    return (
        <ScrollView style={styles.container}>
            {/* Image */}
            <View style={styles.My_Wishlit_Img_Parent}>
                <Image source={require('../Pics/Heart.png')} style={styles.My_Wishlit_Img} />
            </View>
            {/* Heading */}
            <Text style={styles.My_Wishlist_Txt_0}>Wishlist</Text>
            <Text style={styles.My_Wishlist_Txt}>You Can View Your Saved Wishlist Courses From Here</Text>
            {/* Wislist .Map Function For Displaying All Wishlist */}
            {wishList.length === 0 ? (
                renderEmpty()
            ) : (
                wishList.map((item) => (
                    <View key={item.id} style={styles.box}>
                        <View style={styles.box_2}>
                            <View style={styles.in_box}>
                                <Image
                                    source={require("../Pics/Heart.png")}
                                    style={styles.img_fir}
                                />
                                <Text style={styles.sec}>
                                    {item.U1_universityName.substring(0, 15)}
                                </Text>
                            </View>
                            <View style={styles.third}>
                                <Text style={styles.third_1}><FontAwesome5 name="book" size={12.5} color="#EB2F06" />  Course</Text>
                                <Text style={styles.third_2}>{item.U4_courseName.substring(0, 15)}</Text>
                            </View>
                            <View style={styles.forth}>
                                <View style={styles.forth_1}>
                                    <Text style={styles.for_1}><FontAwesome5 name="university" size={12.5} color="#EB2F06" /> Campus</Text>
                                    <Text style={styles.for_2}>{item.U2_campus.substring(0, 15)}</Text>
                                </View>
                                <View style={styles.forth_1}>
                                    <Text style={styles.for_1}><AntDesign name="clockcircle" size={12.5} color="#EB2F06" />  Duration</Text>
                                    <Text style={styles.for_22}>{item.U3_intake.substring(0, 15)}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))
            )}
        </ScrollView>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    noText: {
        fontSize: 23,
        color: '#CC0000',
        letterSpacing: 2,
        textAlign: "center",
        marginTop: 20,
        fontFamily: "Heebo",
    },
    ParentEmpty: {
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
    },
    EmptyPic: {
        width: 55,
        height: 55,
    },
    // Box CSS
    box: {
        width: '85%',
        borderRadius: 17,
        // borderWidth: 1,
        borderColor: "black",
        alignSelf: 'center',
        marginTop: 20,
        // marginBottom: 4,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 15,
        // backgroundColor: "#FCDFD8",
        backgroundColor: "#FCBBAC",
        // backgroundColor: "#FED1C7",
        paddingHorizontal: 6,
        paddingVertical: 7,
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
        width: "22%",
        height: '100%',
        marginLeft: 10,
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
        fontSize: 12.5,
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
        fontSize: 12.5,
        fontFamily: "Heebo",
        marginTop: 6,
        paddingHorizontal: 4.5,
    },
    for_22: {
        // color: "#e84118",
        letterSpacing: 1.5,
        fontSize: 12.5,
        fontFamily: "Heebo",
        marginTop: 6,
        paddingHorizontal: 4,
    },
    My_Wishlit_Img_Parent: {
        // borderWidth: 0.5,
        paddingTop: 60,
        paddingBottom: 30,
    },
    My_Wishlit_Img: {
        // borderWidth: 0.5,
        // borderColor: 'red',
        alignSelf: "center",
        width: 160,
        height: 140,
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
    My_Wishlist_Txt: {
        // borderWidth: 0.5,
        textAlign: "center",
        paddingHorizontal: 30,
        fontFamily: "Kanit",
        fontSize: 15,
        color: "grey",
        paddingVertical: 5,
    },
});
