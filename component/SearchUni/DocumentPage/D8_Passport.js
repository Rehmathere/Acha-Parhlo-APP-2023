import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar, Keyboard } from 'react-native'
// Fonts
import { useFonts } from "expo-font";
// Image Header File
import * as ImagePicker from 'expo-image-picker'
// Firebase
import { useNavigation, useRoute } from '@react-navigation/native';
import { firebase, storage } from "../Z_firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

export default function D8_Passport() {
    // Navigation
    const navigation = useNavigation();
    // ------------------- Backend Logic & Image Upload Functions -------------------
    const route = useRoute();
    const documentId = route?.params?.documentId || null;
    const [image_PassFirst, setImage_PassFirst] = useState(null);
    const [image_PassSign, setImage_PassSign] = useState(null);
    const pickImage = async (setImageFunction) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImageFunction(result.assets[0].uri);
        }
    };
    const submitFiles = async () => {
        try {
            const image_PassFirstRef = ref(storage, `listings/${documentId}/D8_1_Image_PassFirst`);
            const image_PassSignRef = ref(storage, `listings/${documentId}/D8_2_Image_PassSign`);
            const uploadTask1 = uploadBytesResumable(image_PassFirstRef, await fetch(image_PassFirst).then((res) => res.blob()));
            const uploadTask2 = uploadBytesResumable(image_PassSignRef, await fetch(image_PassSign).then((res) => res.blob()));
            await Promise.all([uploadTask1, uploadTask2]);
            const downloadURL1 = await getDownloadURL(image_PassFirstRef);
            const downloadURL2 = await getDownloadURL(image_PassSignRef);
            const data = {
                D8_1_Image_PassFirst: downloadURL1,
                D8_2_Image_PassSign: downloadURL2,
            };
            const studentRecordsRef = firebase.firestore().collection("4 - Student Records").doc(documentId);
            await studentRecordsRef.set(data, { merge: true });
            setImage_PassFirst(null);
            setImage_PassSign(null);
            Keyboard.dismiss();
            navigation.navigate("DocHome", { documentId: documentId });
        } catch (error) {
            alert(error);
        }
    };
    // ------------------- Backend Logic & Image Upload Functions -------------------
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
    // It Tells If Font Is Loaded Or If Not Loaded Then Nothing Will Show,
    if (!fontsLoaded) {
        return null;
    }    // Main Body
    return (
        <View style={styles.container}>
            {/* StatusBar */}
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* 1 */}
            <View style={styles.firstParent}>
                <Text style={styles.fir}>Passport First Page</Text>
                <Text style={styles.firPar}>Kindly Upload Your Passport First Page In JPG / PNG Format.</Text>
                {/* Image */}
                <View style={styles.ParentImg}>
                    <Image source={{ uri: image_PassFirst }} style={styles.image} />
                </View>
                {/* Upload Btn */}
                <View style={styles.ParentBtn}>
                    <TouchableOpacity style={styles.btn1} onPress={() => pickImage(setImage_PassFirst)}>
                        <Text style={styles.btnTxt}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* 2 */}
            <View style={styles.line}></View>
            {/* 3 */}
            <View style={styles.firstParent}>
                <Text style={styles.fir}>Passport Signed Page</Text>
                <Text style={styles.firPar}>Kindly Upload Your Passport Signed Page In JPG / PNG Format.</Text>
                {/* Image */}
                <View style={styles.ParentImg}>
                    <Image source={{ uri: image_PassSign }} style={styles.image} />
                </View>
                {/* Upload Btn */}
                <View style={styles.ParentBtn}>
                    <TouchableOpacity style={styles.btn1} onPress={() => pickImage(setImage_PassSign)}>
                        <Text style={styles.btnTxt}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Submit Button */}
            <TouchableOpacity style={styles.My_Submit_Btn} onPress={submitFiles}>
                <Text style={styles.My_Submit_Btn_Txt}>Submit File</Text>
            </TouchableOpacity>
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:"white",
    },
    firstParent: {
        // borderWidth: 0.5,
        // borderColor: "red",
        padding: 10,
    },
    fir: {
        // borderWidth: 1,
        color: "black",
        fontSize: 20,
        marginTop: 15,
        marginBottom: 2,
        textAlign: "center",
        fontFamily: "HeeboExtra",
        letterSpacing: 1,
    },
    firPar: {
        // borderWidth: 0.5,
        fontFamily: "Kanit",
        textAlign: "center",
        paddingHorizontal: 25,
        color: "grey",
    },
    ParentImg: {
        // borderWidth: 0.5,
        paddingVertical: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        borderColor: "#EB2F06",
        borderWidth: 0.5,
        width: 100,
        height: 70,
        borderRadius: 10,
    },
    ParentBtn: {
        // borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    btn1: {
        borderColor: "#f39c12",
        paddingVertical: 4,
        width: "28%",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#f39c12",
        marginVertical: 1,
    },
    btnTxt: {
        fontSize: 14,
        letterSpacing: 1.5,
        textAlign: "center",
        fontFamily: "Kanit",
    },
    line: {
        borderWidth: 0.5,
        marginTop: 23,
        marginHorizontal: 35,
        borderColor: "darkgrey",
    },
    My_Submit_Btn: {
        // borderWidth: 0.5,
        marginVertical: 15,
        width: "70%",
        alignSelf: "center",
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: "#EB2F06"
    },
    My_Submit_Btn_Txt: {
        textAlign: "center",
        letterSpacing: 2.5,
        fontSize: 15,
        fontFamily: "HeeboExtra",
        color: "white",
        textTransform: "uppercase",
    },
})
