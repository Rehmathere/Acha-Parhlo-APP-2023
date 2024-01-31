import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Feather, FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
// Fonts Header File
import { useFonts } from "expo-font";

export default function Profile() {
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    // Expo Font Logic
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
    // --------------------------------------------------
    // 1 - useState
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState('https://icon2.cleanpng.com/20180402/oaq/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6760664.4895544815226654464834.jpg');
    // Modal useState
    const [showStatus, setShowStatus] = useState(false)
    // Set TimeOut
    const ShowModal = () => {
        // Display
        setShowStatus(true)
        // Not Display
        setTimeout(() => {
            setShowStatus(false)
        }, 2000);
    }
    // Date UseState
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')
    // Date Function OnChange 
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        // Let Variable
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '  /  ' + (tempDate.getMonth() + 1) + '  /  ' + tempDate.getFullYear();
        setText(fDate);
    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }
    // 2 - Image Function
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImage(result.assets[0].uri);
        }
    }
    // It Tells If Font Is Loaded Or If Not Loaded Then Nothing Will Show,
    if (!fontsLoaded) {
        return null;
    }
    // Main Body
    return (
        <View style={styles.container}>
            {/* StatusBar */}
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* Kept In Scroll View Whole Code */}
            <ScrollView>

                {/* Profile */}
                <Text style={styles.fir}>General Information</Text>
                {/* Image */}
                <View style={styles.ParentImg}>
                    <View style={styles.ParentImg_1}>
                        <TouchableOpacity onPress={pickImage}>
                            <Image source={{ uri: image }} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ParentImg_2}>
                        <View style={styles.cam1}>
                            <Feather name="camera" size={23} color="white" />
                        </View>
                    </View>
                </View>
                {/* Inputs */}
                <View style={styles.ParentInp}>
                    {/* 1 - Name */}
                    <View style={styles.SubParentTxt1}>
                        <Text style={styles.InpTxt}>Your Full Name</Text>
                    </View>
                    <View style={styles.SubParentTxt2}>
                        <TextInput
                            value={name}
                            onChangeText={(user) => setName(user)}
                            keyboardType="default"
                            placeholder=' Enter Your Full Name '
                            style={styles.InpData}
                        />
                    </View>
                    {/* 2 - Email Address */}
                    <View style={styles.SubParentTxt1}>
                        <Text style={styles.InpTxt}>Your Email Address</Text>
                    </View>
                    <View style={styles.SubParentTxt2}>
                        <TextInput
                            value={address}
                            onChangeText={(user) => setAddress(user)}
                            keyboardType="email-address"
                            placeholder=' Enter Your Email Address '
                            style={styles.InpData}
                        />
                    </View>
                    {/* 3 - Date */}
                    <View style={styles.SubParentTxt1}>
                        <Text style={styles.InpTxt}>Your Date of Birth</Text>
                    </View>
                    <View style={styles.ParentDate}>
                        {/* 1 - Logo */}
                        <View style={styles.Date1}>
                            <FontAwesome name="calendar" size={21} color="black" />
                        </View>
                        {/* 2 - Date Place */}
                        <TouchableOpacity style={styles.Date2} onPress={() => showMode('date')}>
                            <Text style={styles.dateTxt}>{text}</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Date Condition */}
                    {
                        show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="calendar"
                                onChange={onChange}
                            />
                        )
                    }
                    {/* 4 - Country Code With Number */}
                    <View style={styles.SubParentTxt1}>
                        <Text style={styles.InpTxt}>Your Mobile Number</Text>
                    </View>
                    <View style={styles.SubParentTxt2}>
                        <TextInput
                            value={phone}
                            onChangeText={(user) => setPhone(user)}
                            keyboardType="number-pad"
                            placeholder=' Enter Your Mobile Number '
                            style={styles.InpData}
                        />
                    </View>
                    {/* 5 - Save Button */}
                    <View style={styles.ParentBtn}>
                        <TouchableOpacity style={styles.BtnHead} onPress={() => ShowModal()}>
                            <Text style={styles.BtnTxt}>Update Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {/* Modal For Profile Updated Status */}
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
                            <Image source={require('../../Pics/update.png')} style={styles.StatusImg} />
                        </View>
                        <Text style={styles.StatusTxt}>Profile Updated Successfully</Text>
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
        backgroundColor: "white",
    },
    fir: {
        // borderWidth: 0.5,
        textAlign: "center",
        fontSize: 25,
        letterSpacing: 1,
        fontFamily:"KanitBold",
        color: "#EB2F06",
        marginTop: 18,
        marginBottom: 10,
    },
    ParentImg: {
        // borderWidth: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
    },
    ParentImg_1: {
        // borderWidth: 0.5,
        borderRadius: 100,
        shadowColor: "black",
        elevation: 50,
        paddingVertical: 8,
    },
    ParentImg_2: {
        paddingVertical: 8,
        // borderWidth: 0.5,
    },
    image: {
        borderColor: "white",
        borderWidth: 5,
        width: 125,
        height: 125,
        borderRadius: 100,
        // marginVertical: 20,
    },
    cam1: {
        padding: 8,
        backgroundColor: "#EB2F06",
        borderColor: "#EB2F06",
        borderRadius: 50,
        borderWidth: 1,
    },
    ParentInp: {
        // borderWidth: 1,
        // borderColor: "black",
        padding: 3,
    },
    SubParentTxt1: {
        // borderWidth: 0.5,
        // borderColor: "black",
        paddingVertical: 1,
        alignItems: "flex-start",
    },
    InpTxt: {
        // borderWidth: 0.5,
        // borderColor: "red",
        marginHorizontal: 14,
        letterSpacing: 0.1,
        fontFamily:"Kanit",
    },
    SubParentTxt2: {
        // borderWidth: 0.5,
        // borderColor: "black",
        paddingVertical: 1,
        alignItems: "center",
        marginBottom: 10,
    },
    InpData: {
        borderWidth: 1,
        borderColor: "grey",
        width: "90%",
        paddingVertical: 2.5,
        paddingHorizontal: 13,
        fontSize: 14,
        letterSpacing: 1,
        borderRadius: 10,
        fontFamily:"Heebo",
    },
    ParentBtn: {
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    BtnHead: {
        borderWidth: 1,
        borderColor: "#EB2F06",
        padding: 4,
        borderRadius: 50,
        backgroundColor: "#EB2F06",
    },
    BtnTxt: {
        // borderWidth: 1,
        // borderColor: "transparent",
        textAlign: "center",
        paddingVertical: 1,
        fontSize: 19,
        letterSpacing: 2,
        color: "white",
        fontFamily:"Heebo",
        borderRadius: 50,
    },
    ParentDate: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "grey",
        marginHorizontal: 17,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    Date1: {
        borderColor: "transparent",
        width: "14%",
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 2,
    },
    Date2: {
        width: "79%",
        borderColor: "transparent",
        borderWidth: 1,
        padding: 6,
    },
    dateTxt: {
        textAlign: "left",
        paddingHorizontal: 10,
        fontSize: 15,
        fontFamily:"Heebo",
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
        width: "77%",
        backgroundColor: "white",
        paddingVertical: 15,
        borderRadius: 15,
    },
    ParentStatusClose: {
        // borderWidth: 1,
        paddingVertical: 2,
        paddingHorizontal: 13,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    StatusClose: {
        borderWidth: 1,
        borderColor: "red",
        paddingVertical: 5,
        paddingHorizontal: 7,
        borderRadius: 50,
        backgroundColor: "red",
    },
    StatusCloseTxt: {
        fontWeight: "bold",
    },
    ParentStatusImg: {
        // borderWidth: 1,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    StatusImg: {
        borderWidth: 0.5,
        borderColor: "transparent",
        // borderColor: "black",
        width: 80,
        height: 80,
    },
    StatusTxt: {
        // borderWidth: 1,
        fontSize: 16.5,
        paddingVertical: 5,
        textAlign: "center",
        fontFamily:"Heebo",
        letterSpacing: 0.5,
    },
})