import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Modal,
    Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather, FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useFonts } from 'expo-font';
import { firebase } from '../firestore'; // Replace with the correct path to your firebase module
import { useNavigation } from "@react-navigation/native";

export default function Z_Test_Extra_Z_1() {
    // 0 - Navigation Constant
    const navigation = useNavigation();
    // --------------- Backend Part Logic ---------------
    const todoRef = firebase.firestore().collection('6 - Edit Profile App');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(
        'https://icon2.cleanpng.com/20180402/oaq/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6760664.4895544815226654464834.jpg'
    );
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [showStatus, setShowStatus] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let fDate =
            tempDate.getDate() +
            '  /  ' +
            (tempDate.getMonth() + 1) +
            '  /  ' +
            tempDate.getFullYear();
        setText(fDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
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
    };
    const addField = async () => {
        try {
            if (name && name.length > 0 && address && phone) {
                const data = {
                    name,
                    address,
                    phone,
                    image,
                    dateOfBirth: date,
                };
                const docRef = await todoRef.add(data);
                setShowStatus(true);
                setTimeout(() => {
                    setShowStatus(false);
                }, 2000);
                // Fetch the data from Firestore using the document ID
                const doc = await docRef.get();
                const fetchedData = doc.data();
                // Update the state with the fetched data
                setName(fetchedData.name);
                setAddress(fetchedData.address);
                setPhone(fetchedData.phone);
                setImage(fetchedData.image);
                setDate(fetchedData.dateOfBirth.toDate());
                let tempDate = fetchedData.dateOfBirth.toDate();
                let fDate =
                    tempDate.getDate() +
                    '  /  ' +
                    (tempDate.getMonth() + 1) +
                    '  /  ' +
                    tempDate.getFullYear();
                setText(fDate);
            }
        } catch (error) {
            alert(error.message);
        }
    };
    const updateField = async () => {
        try {
            if (name && name.length > 0 && address && phone) {
                const data = {
                    name,
                    address,
                    phone,
                    image,
                    dateOfBirth: date,
                };

                const userRef = todoRef.where('address', '==', address);
                const querySnapshot = await userRef.get();
                querySnapshot.forEach(async (doc) => {
                    await todoRef.doc(doc.id).update(data);
                });

                setShowStatus(true);
                setTimeout(() => {
                    setShowStatus(false);
                }, 2000);
            }
        } catch (error) {
            alert(error.message);
        }
    };
    // --------------- Backend Part Logic ---------------
    // Fonts
    const [fontsLoaded, setFontsLoaded] = useState(false);
    let [loaded] = useFonts({
        Archivo: require('../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf'),
        Kanit: require('../../assets/fonts/My_Soul/Kanit-Light.ttf'),
        Heebo: require('../../assets/fonts/My_Soul/Heebo-Medium.ttf'),
        HeeboExtra: require('../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf'),
        KanitBold: require('../../assets/fonts/My_Soul/Kanit-Bold.ttf'),
        KanitBlack: require('../../assets/fonts/My_Soul/Kanit-Black.ttf'),
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
        <View style={styles.container}>
            <StatusBar backgroundColor={'#EB2F06'} />
            <ScrollView>
                <Text style={styles.fir}>General Information</Text>
                <View style={styles.ParentImg}>
                    <View style={styles.ParentImg_1}>
                        <TouchableOpacity onPress={pickImage}>
                            <Image source={{ uri: image }} style={styles.image} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ParentImg_2}>
                        <View style={styles.cam1}>
                            <Feather name="camera" size={17} color="white" />
                        </View>
                    </View>
                </View>
                <View style={styles.ParentInp}>
                    <View style={styles.SubParentTxt1}>
                        <Text style={styles.InpTxt}>Your Full Name</Text>
                    </View>
                    <View style={styles.SubParentTxt2}>
                        <TextInput
                            value={name}
                            onChangeText={(user) => setName(user)}
                            keyboardType="default"
                            placeholder=" Enter Your Full Name "
                            style={styles.InpData}
                        />
                    </View>
                    <View style={styles.SubParentTxt1}>
                        <Text style={styles.InpTxt}>Your Email Address</Text>
                    </View>
                    <View style={styles.SubParentTxt2}>
                        <TextInput
                            value={address}
                            onChangeText={(user) => setAddress(user)}
                            keyboardType="email-address"
                            placeholder=" Enter Your Email Address "
                            style={styles.InpData}
                        />
                    </View>
                    <View style={styles.SubParentTxt1}>
                        <Text style={styles.InpTxt}>Your Date of Birth</Text>
                    </View>
                    <View style={styles.ParentDate}>
                        <View style={styles.Date1}>
                            <FontAwesome name="calendar" size={18} color="black" />
                        </View>
                        <TouchableOpacity style={styles.Date2} onPress={() => showMode('date')}>
                            <Text style={styles.dateTxt}>{text}</Text>
                        </TouchableOpacity>
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="calendar"
                            onChange={onChange}
                        />
                    )}
                    <View style={styles.SubParentTxt1}>
                        <Text style={styles.InpTxt}>Your Mobile Number</Text>
                    </View>
                    <View style={styles.SubParentTxt2}>
                        <TextInput
                            value={phone}
                            onChangeText={(user) => setPhone(user)}
                            keyboardType="number-pad"
                            placeholder=" Enter Your Mobile Number "
                            style={styles.InpData}
                        />
                    </View>
                    <View style={styles.ParentBtn}>
                        <TouchableOpacity style={styles.BtnHead_1} onPress={updateField}>
                            <Text style={styles.BtnTxt_1}>Update Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BtnHead} onPress={addField}>
                            <Text style={styles.BtnTxt}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 10,
    },
    fir: {
        // borderWidth: 0.5,
        textAlign: "center",
        fontSize: 25,
        letterSpacing: 1,
        fontFamily: "KanitBold",
        color: "#EB2F06",
        marginTop: 30,
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
        width: 110,
        height: 110,
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
        fontFamily: "Kanit",
    },
    SubParentTxt2: {
        // borderWidth: 0.5,
        // borderColor: "black",
        paddingVertical: 1,
        alignItems: "center",
        marginBottom: 7,
    },
    InpData: {
        borderWidth: 0.5,
        borderColor: "grey",
        width: "90%",
        paddingVertical: 1,
        paddingHorizontal: 13,
        fontSize: 13,
        letterSpacing: 1.5,
        borderRadius: 10,
        fontFamily: "Heebo",
    },
    ParentBtn: {
        paddingTop: 25,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    BtnHead: {
        width: "45%",
        borderWidth: 1,
        borderColor: "#EB2F06",
        paddingVertical: 7,
        borderRadius: 10,
        backgroundColor: "#EB2F06",
    },
    BtnTxt: {
        // borderWidth: 1,
        // borderColor: "transparent",
        textAlign: "center",
        paddingVertical: 1,
        fontSize: 12,
        letterSpacing: 2,
        color: "white",
        fontFamily: "Heebo",
        borderRadius: 50,
    },
    BtnHead_1: {
        width: "45%",
        borderWidth: 1,
        borderColor: "orange",
        paddingVertical: 7,
        borderRadius: 10,
        backgroundColor: "orange",
    },
    BtnTxt_1: {
        // borderWidth: 1,
        // borderColor: "transparent",
        textAlign: "center",
        paddingVertical: 1,
        fontSize: 12,
        letterSpacing: 2,
        fontFamily: "Heebo",
        borderRadius: 50,
    },
    ParentDate: {
        borderWidth: 0.5,
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
        borderWidth: 0.5,
        borderColor: "transparent",
        padding: 6,
    },
    dateTxt: {
        textAlign: "left",
        paddingHorizontal: 10,
        fontSize: 14,
        fontFamily: "Heebo",
        letterSpacing: 1,
    },
})