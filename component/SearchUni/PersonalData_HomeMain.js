import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView, Modal } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";
import { FontAwesome } from '@expo/vector-icons';
// useNavigate
import { useNavigation } from '@react-navigation/native'

export default function PersonalData_HomeMain({ route }) {
    // 0 - useNavigate
    const navigation = useNavigation();
    // ----- Image Route Logic -----
    const item = route.params?.item || {};
    const [noteImage, setNoteImage] = useState(item.MyImage || "");
    // ----- Image Route Logic -----
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
            {/* ScrollView */}
            <ScrollView>
                {/* Picture */}
                <View style={styles.ParentImg}>
                    <Image source={require('../Pics/fill_2.png')} style={styles.docimg} />
                </View>
                <Text style={styles.DocTxt}>Fill Personal Detail</Text>
                <Text style={styles.DocTxt2}>Please Fill your Correct Information to facilitate the progression of your application.</Text>
                {/* Documents */}
                <View style={styles.ParentDoc}>
                    {/* 1 */}
                    <TouchableOpacity onPress={() => navigation.navigate("S_PersonalData_1", {
                        item: {
                            MyImage: item.MyImage,
                        },
                    })}>
                        <View style={styles.DocBox}>
                            {/* Part 1 */}
                            <View style={styles.DocBoxPart1}>
                                <Text style={styles.DocBoxPart1Txt}>University Detail</Text>
                            </View>
                            {/* Part 2 */}
                            <View style={styles.DocBoxPart2}>
                                <Text style={styles.DocBoxPart2Txt}><FontAwesome name="pencil" size={20} color="#EB2F06" /></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* 2 */}
                    <TouchableOpacity onPress={() => ShowModal()}>
                        <View style={styles.DocBox}>
                            {/* Part 1 */}
                            <View style={styles.DocBoxPart1}>
                                <Text style={styles.DocBoxPart1Txt}>Personal Detail</Text>
                            </View>
                            {/* Part 2 */}
                            <View style={styles.DocBoxPart2}>
                                <Text style={styles.DocBoxPart2Txt}><FontAwesome name="pencil" size={20} color="#EB2F06" /></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* 3 */}
                    <TouchableOpacity onPress={() => ShowModal()}>
                        <View style={styles.DocBox}>
                            {/* Part 1 */}
                            <View style={styles.DocBoxPart1}>
                                <Text style={styles.DocBoxPart1Txt}>English Ability Detail</Text>
                            </View>
                            {/* Part 2 */}
                            <View style={styles.DocBoxPart2}>
                                <Text style={styles.DocBoxPart2Txt}><FontAwesome name="pencil" size={20} color="#EB2F06" /></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* 4 */}
                    <TouchableOpacity onPress={() => ShowModal()}>
                        <View style={styles.DocBox}>
                            {/* Part 1 */}
                            <View style={styles.DocBoxPart1}>
                                <Text style={styles.DocBoxPart1Txt}>Education Detail</Text>
                            </View>
                            {/* Part 2 */}
                            <View style={styles.DocBoxPart2}>
                                <Text style={styles.DocBoxPart2Txt}><FontAwesome name="pencil" size={20} color="#EB2F06" /></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* 5 */}
                    <TouchableOpacity onPress={() => ShowModal()}>
                        <View style={styles.DocBox}>
                            {/* Part 1 */}
                            <View style={styles.DocBoxPart1}>
                                <Text style={styles.DocBoxPart1Txt}>Additional Detail</Text>
                            </View>
                            {/* Part 2 */}
                            <View style={styles.DocBoxPart2}>
                                <Text style={styles.DocBoxPart2Txt}><FontAwesome name="pencil" size={20} color="#EB2F06" /></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* 6 */}
                    <TouchableOpacity onPress={() => ShowModal()}>
                        <View style={styles.DocBox}>
                            {/* Part 1 */}
                            <View style={styles.DocBoxPart1}>
                                <Text style={styles.DocBoxPart1Txt}>Bachelor Detail</Text>
                            </View>
                            {/* Part 2 */}
                            <View style={styles.DocBoxPart2}>
                                <Text style={styles.DocBoxPart2Txt}><FontAwesome name="pencil" size={20} color="#EB2F06" /></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Button */}
                <View style={styles.DH_Last_Btn_Parent}>
                    <TouchableOpacity style={styles.DH_Last_Btn_Box} onPress={() => navigation.navigate('Doc_HomeMain')}>
                        <Text style={styles.DH_Last_Btn}>Procceed Details</Text>
                    </TouchableOpacity>
                </View>
                {/* --- Modal For Profile Updated Status --- */}
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={showStatus}
                >
                    <View style={styles.ParentStatus}>
                        <View style={styles.sub_ParentStatus}>
                            <View style={styles.ParentStatusClose}>
                                <TouchableOpacity style={styles.StatusClose} onPress={() => setShowStatus(!showStatus)}>
                                    <Text style={styles.StatusCloseTxt}><FontAwesome name="close" size={16} color="white" /></Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.ParentStatusImg}>
                                <Image source={require('../Pics/Lock_1.png')} style={styles.StatusImg} />
                            </View>
                            <Text style={styles.StatusTxt_E}>Restricted</Text>
                            <Text style={styles.StatusTxt}>In Order To Access, Then You Need To Follow A Complete Sequence Processs Starting From University Detail.</Text>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    ParentImg: {
        // borderWidth: 0.5,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    docimg: {
        width: 100,
        height: 100,
        // borderWidth: 0.5,
        // borderColor: "black",
    },
    DocTxt: {
        // borderWidth: 0.5,
        fontFamily: "HeeboExtra",
        fontSize: 24,
        textAlign: "center",
        letterSpacing: 0.5,
        color: "#EB2F06",
    },
    DocTxt2: {
        // borderWidth: 0.5,
        fontFamily: "Kanit",
        fontSize: 13,
        textAlign: "center",
        letterSpacing: 0.3,
        paddingVertical: 5,
        paddingHorizontal: 25,
        color: "grey",
        marginBottom: 10,
        textTransform: "capitalize",
    },
    ParentDoc: {
        // borderWidth: 0.5,
        paddingVertical: 2,
        paddingBottom: 15,
        paddingHorizontal: 30,
    },
    DocBox: {
        // borderWidth: 0.5,
        borderColor: "#FFDF77",
        paddingVertical: 4,
        paddingHorizontal: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#FFDF77",
        marginVertical: 5,
    },
    DocBoxPart1: {
        // borderWidth: 0.5,
        borderRadius: 50,
        width: "80%",
        padding: 2,
    },
    DocBoxPart1Txt: {
        // borderWidth: 0.5,
        padding: 2,
        fontFamily: "Heebo",
        fontSize: 13,
        letterSpacing: 1.55,
        paddingHorizontal: 17,
        color: "#EB2F06"
    },
    DocBoxPart2: {
        // borderWidth: 0.5,
        width: "20%",
        borderRadius: 50,
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    DocBoxPart2Txt: {
        // borderWidth: 0.5,
        padding: 2,
        fontSize: 14,
        letterSpacing: 0.3,
        paddingHorizontal: 10,
    },
    DH_Last_Btn_Parent: {
        // borderWidth: 0.5,
        paddingTop: 13,
        paddingBottom: 25,
    },
    DH_Last_Btn_Box: {
        borderWidth: 1,
        borderColor: "#EB2F06",
        marginHorizontal: 25,
        paddingVertical: 4,
        borderRadius: 50,
        backgroundColor: "#EB2F06",
    },
    DH_Last_Btn: {
        // borderWidth: 1,
        paddingVertical: 5,
        textAlign: "center",
        letterSpacing: 2.5,
        fontFamily: "Heebo",
        color: "white",
        fontSize: 17,
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
        width: "81%",
        backgroundColor: "white",
        paddingVertical: 15,
        borderRadius: 25,
    },
    ParentStatusClose: {
        // borderWidth: 1,
        paddingVertical: 2,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    StatusClose: {
        // borderWidth: 1,
        // borderColor: "red",
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 50,
        backgroundColor: "red",
    },
    StatusCloseTxt: {
        fontWeight: "bold",
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
        height: 110,
    },
    StatusTxt: {
        // borderWidth: 1,
        fontSize: 13,
        paddingBottom: 10,
        paddingHorizontal: 23,
        textAlign: "center",
        fontFamily: "Kanit",
        letterSpacing: 1.2,
    },
    StatusTxt_E: {
        // borderWidth: 1,
        fontSize: 20,
        paddingBottom: 10,
        paddingHorizontal: 30,
        textAlign: "center",
        fontFamily: "HeeboExtra",
        letterSpacing: 1.5,
    },
})










