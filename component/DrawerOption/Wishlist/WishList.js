import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import { useFonts } from "expo-font";
import { firebase } from "../../firestore";
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
// Linear Gradient
import { LinearGradient } from 'expo-linear-gradient';

export default function WishList() {
    // Modal useState
    const [showStatus, setShowStatus] = useState(false)
    // Set TimeOut
    const ShowModal = () => {
        // Display
        setShowStatus(true)
        // Not Display
        setTimeout(() => {
            setShowStatus(false)
        }, 2500);
    }
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
    const deleteItem = async (itemId) => {
        try {
            await firebase.firestore().collection("5 - App Wishlist").doc(itemId).delete();
            const updatedWishList = wishList.filter(item => item.id !== itemId);
            setWishList(updatedWishList);
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };
    // ----------- Backend Part Logic ----------- 
    // Fonts 
    const [fontsLoaded, setFontsLoaded] = useState(false);
    let [loaded] = useFonts({
        Archivo: require("../../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
        Kanit: require("../../../assets/fonts/My_Soul/Kanit-Light.ttf"),
        Heebo: require("../../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
        HeeboExtra: require("../../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
        KanitBold: require("../../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
        KanitBlack: require("../../../assets/fonts/My_Soul/Kanit-Black.ttf"),
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
                    <Image source={require('../../Pics/empty_2.png')} style={styles.EmptyPic} />
                </View>
                <Text style={styles.noText}>No Wish List Here</Text>
            </>
        );
    };
    return (
        <ScrollView style={styles.container}>
            {/* Image */}
            <View style={styles.My_Wishlit_Img_Parent}>
                <Image source={require('../../Pics/Heart.png')} style={styles.My_Wishlit_Img} />
            </View>
            {/* Heading */}
            <Text style={styles.My_Wishlist_Txt_0}>My Wishlist</Text>
            <Text style={styles.My_Wishlist_Txt}>You Can View Your Saved Wishlist Courses From Here</Text>
            {/* Wislist .Map Function For Displaying All Wishlist */}
            {wishList.length === 0 ? (
                renderEmpty()
            ) : (
                wishList.map((item) => (
                    <View key={item.id} style={styles.box}>
                        <LinearGradient colors={["#FF522B", "#FF8970", "#FF522B"]} style={{ borderRadius: 15, }}>
                            <View style={styles.box_2}>
                                <View style={styles.Parent_Delete}>
                                    <TouchableOpacity style={styles.Sub_Parent_Delete} onPress={() => { ShowModal(); deleteItem(item.id) }}>
                                        <AntDesign name="delete" size={15} color="red" />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.in_box}>
                                    <View style={styles.img_fir_Parent}>
                                        <Image
                                            source={{ uri: item.noteImage }}
                                            style={styles.img_fir}
                                        />
                                    </View>
                                    <Text style={styles.sec}>
                                        {item.noteTitle.substring(0, 15)}
                                    </Text>
                                </View>
                                <View style={styles.third}>
                                    <Text style={styles.third_1}><FontAwesome5 name="book" size={12.5} color="#EB2F06" />  Course</Text>
                                    <Text style={styles.third_2}>{item.noteRoom.substring(0, 15)}</Text>
                                </View>
                                <View style={styles.forth}>
                                    <View style={styles.forth_1}>
                                        <Text style={styles.for_1}><FontAwesome5 name="money-bill" size={12.5} color="#EB2F06" /> Fees</Text>
                                        <Text style={styles.for_2}>{item.noteAmount.substring(0, 15)}</Text>
                                    </View>
                                    <View style={styles.forth_1}>
                                        <Text style={styles.for_1}><AntDesign name="clockcircle" size={12.5} color="#EB2F06" />  Duration</Text>
                                        <Text style={styles.for_22}>{item.noteDuration.substring(0, 15)}</Text>
                                    </View>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                ))
            )}
            {/* Modal */}
            <Modal
                transparent={true}
                animationType="fade"
                visible={showStatus}
            >
                <View style={styles.ParentStatus}>
                    <View style={styles.sub_ParentStatus}>
                        <View style={styles.ParentStatusImg}>
                            <Image source={require('../../Pics/delete.png')} style={styles.StatusImg} />
                        </View>
                        <Text style={styles.StatusTxt}>Deleted From Wishlist</Text>
                    </View>
                </View>
            </Modal>
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
        width: '87%',
        borderRadius: 15,
        // borderWidth: 0.5,
        // borderColor: "black",
        alignSelf: 'center',
        marginTop: 20,
        // marginBottom: 4,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        elevation: 0,
        // backgroundColor: "#EB2F06",
        // backgroundColor: "#FCBBAC",    
    },
    box_2: {
        width: "100%",
        flexDirection: "column",
        paddingVertical: 7,
        paddingHorizontal: 4,
    },
    in_box: {
        // borderWidth: 0.1,
        width: "100%",
        height: 52,
        flexDirection: "row",
        paddingVertical: 2,
    },
    img_fir_Parent: {
        borderWidth: 0.5,
        borderColor: "lightgrey",
        width: "20%",
        height: '100%',
        marginLeft: 9,
        borderRadius: 5,
        padding: 1,
    },
    img_fir: {
        borderRadius: 3,
        width: "100%",
        height: '100%',
    },
    sec: {
        letterSpacing: 3,
        textAlign: "center",
        fontFamily: "KanitBold",
        width: "70%",
        marginLeft: 10,
        color: "white",
        marginTop: 11,
        // borderWidth: 0.5,
        // height: 20,
        fontSize: 14.5,
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
        width: "30%",
        marginTop: 5,
    },
    third_2: {
        letterSpacing: 1.6,
        textAlign: "left",
        fontFamily: "Heebo",
        marginHorizontal: 12,
        color: "white",
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
        color: "white",
        letterSpacing: 1.5,
        fontSize: 12.5,
        fontFamily: "Heebo",
        marginTop: 6,
        paddingHorizontal: 4.5,
    },
    for_22: {
        color: "white",
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
        width: 150,
        height: 130,
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
    Parent_Delete: {
        // borderWidth: 0.5,
        paddingBottom: 5,
        paddingHorizontal: 22,
        paddingVertical: 4,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    Sub_Parent_Delete: {
        borderWidth: 0.5,
        borderColor: "white",
        width: "190%",
        borderRadius: 50,
        paddingVertical: 7,
        backgroundColor: "white",
        alignItems: "center",
    },
    ParentStatus: {
        backgroundColor: "rgba(0, 0, 0, 0.70)",
        flex: 1,
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    sub_ParentStatus: {
        // borderWidth: 1,
        width: "75%",
        backgroundColor: "white",
        paddingVertical: 20,
        borderRadius: 40,
    },
    ParentStatusImg: {
        // borderWidth: 1,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    StatusImg: {
        borderWidth: 0.5,
        borderColor: "transparent",
        // borderColor: "black",
        width: 110,
        height: 100,
    },
    StatusTxt: {
        // borderWidth: 1,
        fontSize: 14,
        paddingBottom: 15,
        paddingHorizontal: 25,
        textAlign: "center",
        fontFamily: "Kanit",
        letterSpacing: 1.5,
    },
});
