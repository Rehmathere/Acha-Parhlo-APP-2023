import React, { useState, useEffect } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet,
    FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firestore";
// Fonts Header File
import { useFonts } from "expo-font";

export default function MyFirst() {
    // 0 - Navigation Constant
    const navigation = useNavigation();
    // 1 - useState
    const [notes, setNotes] = useState([]);
    // 2 - useEffect ( Fetch Data From Firestore Firebase )
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
            });
    }, []);
    // ---------- Font Family ----------
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
    // ---------- Font Family ----------
    // Main Body
    return (
        <View style={styles.container}>
            {/* Start */}
            {/* Flash List */}
            <FlatList
                data={notes}
                numColumns={1}
                estimatedItemSize={100}
                renderItem={({ item }) => (
                    // Display Area
                    <TouchableOpacity style={styles.box} onPress={() =>
                        navigation.navigate("Z_Test_2_A", {
                            item: {
                                MyImage: item.MyImage,
                                name1: item.name1,
                                name2: item.name2,
                                name3: item.name3,
                                name4: item.name4,
                                name5: item.name5,
                            },
                        })
                    }>
                        {/* Box Border */}
                        <View style={styles.box_2}>
                            {/* Row 1 */}
                            <View style={styles.in_box}>
                                {/* 1 - Image */}
                                <Image
                                    source={{ uri: item.MyImage }}
                                    style={styles.img_fir}
                                />
                                {/* 2 - Title */}
                                <Text
                                    style={styles.sec}>
                                    {item.name1.substring(0, 20)}
                                </Text>
                            </View>
                            {/* Row 2 */}
                            <View style={styles.third}>
                                {/* 1 - Text */}
                                <Text style={styles.third_1}>Course Title</Text>
                                {/* 2 - Title */}
                                <Text style={styles.third_2}>{item.name3}</Text>
                            </View>
                            {/* Row 3 */}
                            <View style={styles.forth}>
                                {/* 1 */}
                                <View style={styles.forth_1}>
                                    <Text style={styles.for_1}>Semester Fee</Text>
                                    <Text style={styles.for_2}>{item.name4} $</Text>
                                </View>
                                {/* 2 */}
                                <View style={styles.forth_1}>
                                    <Text style={styles.for_1}>Duration</Text>
                                    <Text style={styles.for_22}>{item.name5}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
            {/* End */}
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        paddingTop: 30,
    },
    box: {
        width: '88%',
        borderRadius: 15,
        // borderWidth: 1,
        borderColor: "black",
        alignSelf: 'center',
        marginTop: 20,
        // marginBottom: 4,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 15,
        // backgroundColor: "#FCDFD8",
        // backgroundColor: "#FCBBAC",
        backgroundColor: "#FED1C7",
        paddingHorizontal: 7,
        paddingVertical: 6,
    },
    box_2: {
        width: "100%",
        flexDirection: "column",
        paddingVertical: 10,
    },
    in_box: {
        // borderWidth: 0.1,
        width: "100%",
        height: 50,
        flexDirection: "row",
    },
    img_fir: {
        // borderWidth: 1,
        // borderColor: "black",
        width: "20%",
        height: '100%',
        marginLeft: 9,
        borderRadius: 5,
    },
    sec: {
        letterSpacing: 2,
        textAlign: "center",
        fontFamily: "KanitBold",
        width: "70%",
        marginLeft: 10,
        color: "black",
        marginTop: 11,
        //   borderWidth: 1,
        //   height: 20,
        fontSize: 16.3,
        textTransform: "uppercase",
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
        color: "#636e72",
        marginHorizontal: 14,
        // borderWidth: 1,
        height: 15,
        fontSize: 14
    },
    third_2: {
        letterSpacing: 1.6,
        textAlign: "left",
        fontFamily: "Heebo",
        marginHorizontal: 16,
        color: "black",
        marginTop: 2,
        //   borderWidth: 1,
        //   height: 25,
        fontSize: 15,
        paddingVertical: 2,
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
        color: "#636e72",
        fontSize: 14,
        letterSpacing: 0.6,
        fontFamily: "Kanit"
    },
    for_2: {
        color: "#009432",
        letterSpacing: 1.4,
        fontSize: 15,
        fontFamily: "Heebo",
    },
    for_22: {
        color: "#eb2f06",
        fontSize: 15,
        letterSpacing: 1.4,
        fontFamily: "Heebo"
    },
});  