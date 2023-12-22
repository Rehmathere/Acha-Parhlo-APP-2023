import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Modal, Image } from 'react-native'
// Fonts Header File
import { useFonts } from "expo-font";

export default function Logout() {
    // 0 - useState
    const [showContent, setShowContent] = useState(false)
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
    }
    // Main Body
    return (
        <View style={styles.container}>
            {/* StatusBar */}
            <StatusBar backgroundColor={"#EB2F06"} />
            {/* Body */}
            <Text style={styles.fir_1}>Logout Screen</Text>
            {/* Button */}
            <TouchableOpacity style={styles.Fir_But}>
                <Text style={styles.Fir_But_Txt} onPress={() => setShowContent(true)}>Logout</Text>
            </TouchableOpacity>
            {/* Logout Modal */}
            <Modal 
            animationType="fade"
            transparent={true}
            visible={showContent}
            >
                <View style={styles.Modal_Parent}>
                    <View style={styles.Modal_Child}>
                        <View style={styles.sub_Modal_Child}>
                            <Text style={styles.Modal_Txt_1}>Logout</Text>
                            <Text style={styles.Modal_Txt_2}>Are You Sure Want To Logout ?</Text>
                            {/* Image Parent */}
                            <View style={styles.ParentImg}>
                                <Image source={ require('../../Pics/logout.png') } style={styles.Logout_Img} /> 
                            </View>
                            {/* Button Parent */}
                            <View style={styles.Butt_Parent}>
                                {/* Button 1 */}
                                <View style={styles.sub_Butt_Parent}>
                                    <TouchableOpacity style={styles.Butt_Box_1}>
                                        <Text style={styles.Butt_Text_1}>Logout</Text>
                                    </TouchableOpacity>
                                </View>
                                {/* Button 2 */}
                                <View style={styles.sub_Butt_Parent}>
                                    <TouchableOpacity style={styles.Butt_Box_2} onPress={() => setShowContent(!showContent)}>
                                        <Text style={styles.Butt_Text_2}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
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
    },
    fir_1: {
        borderWidth: 0.5,
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Heebo",
    },
    Fir_But: {
        borderWidth: 1,
        borderColor: "blue",
        paddingVertical: 5,
        backgroundColor: "blue",
        margin: 30,
        borderRadius: 20,
    },
    Fir_But_Txt: {
        // borderWidth: 0.5,
        fontFamily: "Heebo",
        color: "white",
        textAlign: "center",
        fontSize: 18,
    },
    Modal_Parent: {
        flex: 1,
        borderWidth: 0.5,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        justifyContent: "center",
        alignItems: "center",
    },
    Modal_Child: {
        borderWidth: 0.5,
        borderColor: "white",
        backgroundColor: "white",
        marginHorizontal: 40,
        borderRadius: 20,
        paddingVertical: 11,
        paddingHorizontal: 11,
        width: "70%",
    },
    sub_Modal_Child: {
        // borderWidth: 0.5,
        padding: 10,
    },
    Modal_Txt_1: {
        // borderWidth: 0.5,
        fontSize: 28,
        fontFamily: "HeeboExtra",
        textAlign:"center",
    },
    Modal_Txt_2: {
        // borderWidth: 0.5,
        fontSize: 14.5,
        marginVertical: 4,
        fontFamily: "Kanit",
        textAlign:"center",
        color:"grey",
    },
    Butt_Parent: {
        // borderWidth: 0.5,
        paddingVertical: 10,
        flexDirection:"row",
        justifyContent:"space-around",
    },
    sub_Butt_Parent:{
        // borderWidth: 1,
        borderColor:"red",
    },
    Butt_Box_1: {
        // borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor:"#EB2F06",
    },
    Butt_Text_1: {
        // borderWidth: 1,
        fontSize: 16,
        fontFamily: "Heebo",
        textAlign: "center",
        color:"white",
        letterSpacing: 1,
    },
    Butt_Text_2: {
        // borderWidth: 1,
        fontSize: 16,
        fontFamily: "Heebo",
        textAlign: "center",
        color:"black",
        letterSpacing: 1,
    },
    Butt_Box_2: {
        // borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor:"#bdc3c7",
    },
    ParentImg:{
        // borderWidth: 0.5,
        marginBottom: 5,
        paddingVertical: 6,
        justifyContent:"center",
        alignItems:"center",
    },
    Logout_Img:{
        // borderWidth: 0.5,
        // borderColor: "black",
        width: 70,
        height: 70,
    },
})

