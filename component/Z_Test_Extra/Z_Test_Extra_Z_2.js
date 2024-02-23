import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase } from '../firestore';

export default function Z_Test_Extra_Z_2() {
    const navigation = useNavigation();
    // --------------------- Drawer Image Area Fetcing ---------------------
    const [image, setImage] = useState(
        'https://icon2.cleanpng.com/20180402/oaq/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6760664.4895544815226654464834.jpg'
    );
    const fetchImageFromFirestore = async () => {
        try {
            const userRef = firebase.firestore().collection('6 - Edit Profile App');

            const snapshot = await userRef.get();

            if (!snapshot.empty) {
                const userData = snapshot.docs[0].data();
                setImage(userData.image || 'https://icon2.cleanpng.com/20180402/oaq/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6760664.4895544815226654464834.jpg');
            }
        } catch (error) {
            console.error('Error fetching image from Firestore:', error);
        }
    };
    useEffect(() => {
        fetchImageFromFirestore();
    }, []); // Run once when the component mounts
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
            <Text style={styles.fir}> Image Fetch Area </Text>
            <Image source={{ uri: image }} style={styles.image} />
            <TouchableOpacity style={styles.Upload_Btn_Parent} onPress={() => navigation.navigate('Z_Test_Extra_Z_1')}>
                <Text style={styles.Upload_Btn_Parent_Txt}>Move Back To Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fir: {
        borderWidth: 0.5,
        marginVertical: 30,
        paddingVertical: 10,
        textAlign: "center",
        fontFamily: "Heebo",
        fontSize: 20,
        backgroundColor: "aqua",
    },
    Txt: {
        borderWidth: 0.5,
        borderColor: "transparent",
        textAlign: "center",
        fontFamily: "Heebo",
        paddingVertical: 10,
        fontSize: 20,
        letterSpacing: 1,
    },
    Upload_Btn_Parent: {
        backgroundColor: "black",
        borderWidth: 0.5,
        marginVertical: 20,
        marginHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 50,
    },
    Upload_Btn_Parent_Txt: {
        textAlign: "center",
        borderWidth: 0.5,
        fontSize: 18,
        fontFamily: "Kanit",
        color: "white",
        letterSpacing: 1,
    },
    image: {
        borderColor: "white",
        borderWidth: 5,
        width: 110,
        height: 110,
        borderRadius: 100,
        // marginVertical: 20,
    },
});
