import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView, StatusBar, Image } from 'react-native';
// Fonts Header File
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firestore";
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
// Linear Gradient
import { LinearGradient } from 'expo-linear-gradient';


export default function Z_Test_Extra_Z_1() {
    // Navigation
    const navigation = useNavigation();
    // ---------- Backend Part Logic ----------
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const listRef = useRef();
    const [ind, setInd] = useState(0);
    const [oldData, setOldData] = useState([]);
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection("1 - Add University")
            .onSnapshot((querySnapshot) => {
                const newNotes = [];
                querySnapshot.forEach((doc) => {
                    const { name1, name2, name3, name4, name5, MyImage } = doc.data();
                    newNotes.push({ name1, name2, name3, name4, name5, MyImage });
                });
                setNotes(newNotes);
                setOldData(newNotes);
                setData(newNotes);
            });
    }, []);
    // ---------- Backend Part Logic ----------
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
    // Main Body
    return (
        <ScrollView style={{ flex: 1, paddingBottom: 0, backgroundColor: "lightyellow", }}>
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* Heading */}
            <Text style={styles.Txt1}>Explore Courses</Text>
            {/* ----- Show Data Button ----- */}
            <TouchableOpacity style={styles.Upload_Btn_Parent} onPress={() => navigation.navigate('Z_Test_Extra_Z_6')}>
                <Text style={styles.Upload_Btn_Parent_Txt}>Move Page 6 ( Show Data )</Text>
            </TouchableOpacity>
            {/* ----- Show Data Button ----- */}
            {/* Data From Firebase */}
            {data.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.box}
                    onPress={() => navigation.navigate("Z_Test_Extra_Z_2", {
                        item: {
                            MyImage: item.MyImage,
                        },
                    })}
                >
                    <LinearGradient colors={["#FF522B", "#FF8970", "#FF522B"]} style={{ borderRadius: 15, paddingHorizontal: 5, paddingVertical: 7, }}>
                        <View style={styles.box_2}>
                            <View style={styles.in_box}>
                                <View style={styles.img_fir_Parent}>
                                    <Image source={{ uri: item.MyImage }} style={styles.img_fir} />
                                </View>
                                <Text style={styles.sec}>{item.name1.substring(0, 15)}</Text>
                            </View>
                            <View style={styles.third}>
                                <Text style={styles.third_1}><FontAwesome5 name="book" size={12.5} color="#EB2F06" />  Courses</Text>
                                <Text style={styles.third_2}>{item.name3.substring(0, 20)}</Text>
                            </View>
                            <View style={styles.forth}>
                                <View style={styles.forth_1}>
                                    <Text style={styles.for_1}><FontAwesome5 name="money-bill" size={12.5} color="#EB2F06" />  Semester Fee</Text>
                                    <Text style={styles.for_2}>{item.name4.substring(0, 15)}</Text>
                                </View>
                                <View style={styles.forth_1}>
                                    <Text style={styles.for_1}><AntDesign name="clockcircle" size={12.5} color="#EB2F06" />  Duration</Text>
                                    <Text style={styles.for_22}>{item.name5.substring(0, 10)}</Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            ))
            }
        </ScrollView >
    );
}

// CSS
const styles = StyleSheet.create({
    Upload_Btn_Parent: {
        backgroundColor: "black",
        borderWidth: 0.5,
        borderColor: "transparent",
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 50,
    },
    Upload_Btn_Parent_Txt: {
        textAlign: "center",
        borderWidth: 0.5,
        borderColor: "transparent",
        fontSize: 18,
        fontFamily: "Kanit",
        color: "white",
        letterSpacing: 1,
    },
    Txt1: {
        borderWidth: 0.5,
        borderColor: "yellow",
        backgroundColor: "yellow",
        fontFamily: "HeeboExtra",
        paddingHorizontal: 10,
        paddingVertical: 10,
        textAlign: "center",
        letterSpacing: 1.5,
        fontSize: 20,
        marginVertical: 10,
    },
    box: {
        width: '86%',
        borderRadius: 15,
        // borderWidth: 0.5,
        borderColor: "black",
        alignSelf: 'center',
        marginTop: 15,
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
});