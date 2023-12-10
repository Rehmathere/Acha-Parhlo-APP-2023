import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
// Fonts
import { useFonts } from "expo-font";
// Image Header File
import * as ImagePicker from 'expo-image-picker'
// useNavigation
import { useNavigation } from '@react-navigation/native'

export default function D2_11Mark() {
    // 0 - useNavigation
    const navigation = useNavigation();
    // 1 - Image useState
    const [image_11Mark, setImage_11Mark] = useState(null);
    const [image_11Cert, setImage_11Cert] = useState(null);
    // 2 - Image Function
    const pickImage11Mark = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImage_11Mark(result.assets[0].uri);
        }
    }
    const pickImage11Cert = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImage_11Cert(result.assets[0].uri);
        }
    }
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
        const checkImagesUploaded = () => {
            // If both images are uploaded, navigate to the DocHome page
            if (image_11Mark && image_11Cert) {
                navigation.navigate('DocHome');
            }
        };
        // Check for font loading
        if (loaded) {
            setFontsLoaded(true);
        }
        // Check for both images uploaded whenever image states change
        checkImagesUploaded();
    }, [image_11Mark, image_11Cert, loaded, navigation]);
    // It Tells If Font Is Loaded Or If Not Loaded Then Nothing Will Show,
    if (!fontsLoaded) {
        return null;
    }
    // Main Body
    return (
        <View style={styles.container}>
            {/* StatusBar */}
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* 1 */}
            <View style={styles.firstParent}>
                <Text style={styles.fir}>11th Marksheet</Text>
                <Text style={styles.firPar}>Kindly Upload Your 11th Class Marksheet In JPG / PNG Format.</Text>
                {/* Image */}
                <View style={styles.ParentImg}>
                    <Image source={{ uri: image_11Mark }} style={styles.image} />
                </View>
                {/* Upload Btn */}
                <View style={styles.ParentBtn}>
                    <TouchableOpacity style={styles.btn1} onPress={pickImage11Mark}>
                        <Text style={styles.btnTxt}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* 2 */}
            <View style={styles.line}></View>
            {/* 3 */}
            <View style={styles.firstParent}>
                <Text style={styles.fir}>11th Certificate</Text>
                <Text style={styles.firPar}>Kindly Upload Your 11th Class Certificate In JPG / PNG Format.</Text>
                {/* Image */}
                <View style={styles.ParentImg}>
                    <Image source={{ uri: image_11Cert }} style={styles.image} />
                </View>
                {/* Upload Btn */}
                <View style={styles.ParentBtn}>
                    <TouchableOpacity style={styles.btn1} onPress={pickImage11Cert}>
                        <Text style={styles.btnTxt}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        fontSize: 22,
        marginTop: 3,
        marginBottom: 2,
        textAlign: "center",
        fontFamily: "HeeboExtra"
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
        borderColor: "white",
        borderWidth: 1,
        width: 150,
        height: 90,
        borderRadius: 10,
    },
    ParentBtn: {
        // borderWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    btn1: {
        borderColor: "#EB2F06",
        padding: 5,
        width: "37%",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#EB2F06",
        marginVertical: 10,
    },
    btnTxt: {
        fontSize: 17,
        letterSpacing: 1,
        color: "white",
        textAlign: "center",
        fontFamily: "Kanit",
    },
    line: {
        borderWidth: 0.5,
        marginVertical: 12,
        marginHorizontal: 35,
        borderColor: "darkgrey",
    }
})
