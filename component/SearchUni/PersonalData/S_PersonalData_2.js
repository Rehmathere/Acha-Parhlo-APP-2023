import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
// useNavigate
import { useNavigation } from '@react-navigation/native'
// Fonts Header File
import { useFonts } from "expo-font";

export default function S_PersonalData_2() {
    // Pre 0 - useState
    const [info1, setInfo1] = useState("");
    const [info2, setInfo2] = useState("");
    const [info3, setInfo3] = useState("");
    const [info4, setInfo4] = useState("");
    const [info5, setInfo5] = useState("");
    const [info6, setInfo6] = useState("");
    const [info7, setInfo7] = useState("");
    const [info8, setInfo8] = useState("");
    const [info9, setInfo9] = useState("");
    const [info10, setInfo10] = useState("");
    const [info11, setInfo11] = useState("");
    const [info12, setInfo12] = useState("");
    const [info13, setInfo13] = useState("");
    const [info14, setInfo14] = useState("");
    const [info15, setInfo15] = useState("");
    const [info16, setInfo16] = useState("");
    const [info17, setInfo17] = useState("");
    // 0 - useNavigate
    const navigation = useNavigation();
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
            <ScrollView>
                <Text style={styles.fir_1}>Personal Detail</Text>
                {/* Information Area */}
                <View style={styles.Sec_Parent}>
                    {/* 1 */}
                    <Text style={styles.inputTitleTxt}>Title</Text>
                    <TextInput
                        placeholder=" Enter Title "
                        value={info1}
                        onChangeText={(text) => setInfo1(text)}
                        style={styles.inputTitle}
                    />
                    {/* 2 */}
                    <Text style={styles.inputTitleTxt}>Family Name as per Passport</Text>
                    <TextInput
                        placeholder=" Enter Family Name as per Passport "
                        value={info2}
                        onChangeText={(text) => setInfo2(text)}
                        style={styles.inputTitle}
                    />
                    {/* 3 */}
                    <Text style={styles.inputTitleTxt}>Given Name as per Passport</Text>
                    <TextInput
                        placeholder=" Enter Given Name as per Passport "
                        value={info3}
                        onChangeText={(text) => setInfo3(text)}
                        style={styles.inputTitle}
                        keyboardType="number-pad"
                    />
                    {/* 4 - Date */}
                    {/* 5 - Gender */}
                    {/* 6 */}
                    <Text style={styles.inputTitleTxt}>Country Of Birth</Text>
                    <TextInput
                        placeholder=" Enter Country Of Birth "
                        value={info4}
                        onChangeText={(text) => setInfo4(text)}
                        style={styles.inputTitle}
                    />
                    {/* 7 */}
                    <Text style={styles.inputTitleTxt}>City Of Birth</Text>
                    <TextInput
                        placeholder=" Enter City Of Birth "
                        value={info5}
                        onChangeText={(text) => setInfo5(text)}
                        style={styles.inputTitle}
                    />
                    {/* 8 */}
                    <Text style={styles.inputTitleTxt}>Country of Citizenship</Text>
                    <TextInput
                        placeholder=" Enter Country of Citizenship "
                        value={info6}
                        onChangeText={(text) => setInfo6(text)}
                        style={styles.inputTitle}
                    />
                    {/* 9 */}
                    <Text style={styles.inputTitleTxt}>Dual Citizen</Text>
                    <TextInput
                        placeholder=" Enter Dual Citizen "
                        value={info7}
                        onChangeText={(text) => setInfo7(text)}
                        style={styles.inputTitle}
                    />
                    {/* 10 */}
                    <Text style={styles.inputTitleTxt}>Email Address</Text>
                    <TextInput
                        placeholder=" Enter Email Address "
                        value={info8}
                        onChangeText={(text) => setInfo8(text)}
                        style={styles.inputTitle}
                    />
                    {/* 11 */}
                    <Text style={styles.inputTitleTxt}>First Language Spoken</Text>
                    <TextInput
                        placeholder=" Enter First Language Spoken "
                        value={info9}
                        onChangeText={(text) => setInfo9(text)}
                        style={styles.inputTitle}
                    />
                    {/* 12 */}
                    <Text style={styles.inputTitleTxt}>Marital Status</Text>
                    <TextInput
                        placeholder=" Enter Marital Status "
                        value={info10}
                        onChangeText={(text) => setInfo10(text)}
                        style={styles.inputTitle}
                    />
                    {/* 13 */}
                    <Text style={styles.inputTitleTxt}>Have any medical or health issue that may prevent you from getting your visa</Text>
                    <TextInput
                        placeholder=" Enter Yes / No "
                        value={info11}
                        onChangeText={(text) => setInfo11(text)}
                        style={styles.inputTitle}
                    />
                    {/* 14 */}
                    <Text style={styles.inputTitleTxt}>Do you have disability, impairment or long term medical condition?</Text>
                    <TextInput
                        placeholder=" Enter Yes / No "
                        value={info12}
                        onChangeText={(text) => setInfo12(text)}
                        style={styles.inputTitle}
                    />
                    {/* 14 */}
                    <Text style={styles.inputTitleTxt}>Been convicted of any crime or offence in any Country</Text>
                    <TextInput
                        placeholder=" Enter Yes / No "
                        value={info13}
                        onChangeText={(text) => setInfo13(text)}
                        style={styles.inputTitle}
                    />
                    {/* 15 */}
                    <Text style={styles.inputTitleTxt}>Home Country Address with Suburb, City, State, Country & postcode</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={info14}
                        onChangeText={(text) => setInfo14(text)}
                        style={styles.inputTitle}
                    />
                    {/* 16 */}
                    <Text style={styles.inputTitleTxt}>Home Country Phone Number with Area & Country Code</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={info15}
                        onChangeText={(text) => setInfo15(text)}
                        style={styles.inputTitle}
                        keyboardType="number-pad"
                    />
                    {/* 17 */}
                    <Text style={styles.inputTitleTxt}>Visa refusal of Australia</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={info16}
                        onChangeText={(text) => setInfo16(text)}
                        style={styles.inputTitle}
                    />
                    {/* 18 */}
                    <Text style={styles.inputTitleTxt}>Been refused entry to any Country</Text>
                    <TextInput
                        placeholder=" Enter Answer "
                        value={info17}
                        onChangeText={(text) => setInfo17(text)}
                        style={styles.inputTitle}
                    />
                    {/* Button */}
                    <TouchableOpacity style={styles.BtnBox} onPress={() => navigation.navigate('PersonalData_HomeMain')}>
                        <Text style={styles.BtnBoxTxt}>Confirm Proceed</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fir_1: {
        // borderWidth: 0.5,
        textAlign: "center",
        fontSize: 25,
        letterSpacing: 1,
        fontFamily: "HeeboExtra",
        paddingBottom: 25,
        textTransform: "uppercase",
        paddingTop: 60,
    },
    Sec_Parent: {
        // borderWidth: 0.5,
        marginVertical: 10,
        paddingVertical: 10,
    },
    inputTitle: {
        marginHorizontal: 16,
        borderWidth: 0.5,
        borderColor: "#EB2F06",
        borderRadius: 20,
        paddingVertical: 1.5,
        paddingLeft: 20,
        fontSize: 14,
        letterSpacing: 0.5,
        fontFamily:"Kanit",
        marginBottom: 15,
        textDecorationColor: "white",
    },
    inputTitleTxt:{
        marginHorizontal: 16,
        // borderWidth: 0.5,
        fontSize: 13,
        fontFamily:"Heebo",
        paddingVertical: 6,
        letterSpacing: 0.5,
        textTransform:"capitalize",
    },
    BtnBox:{
        marginVertical: 15,
        marginHorizontal: 16,
        borderColor: "#EB2F06",
        backgroundColor:"#EB2F06",
        borderWidth: 1,
        paddingVertical: 4.5,
        borderRadius: 20,
    },
    BtnBoxTxt:{
        color: "white",
        borderRadius: 20,
        borderColor: "transparent",
        borderWidth: 1,
        paddingVertical: 1,
        textAlign:"center",
        fontFamily: "Heebo",
        letterSpacing: 2.5,
        fontSize: 20,
    },
})
