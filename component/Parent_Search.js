import React, { useState, useEffect } from 'react'
import Main from './SearchUni/Main'
import SubMainHome from './SearchUni/SubMainHome'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DocHome from './SearchUni/DocumentPage/DocHome'
import D1_10Mark from './SearchUni/DocumentPage/D1_10Mark'
import D2_11Mark from './SearchUni/DocumentPage/D2_11Mark'
import D3_Bachelor from './SearchUni/DocumentPage/D3_Bachelor'
// Fonts Header File
import { useFonts } from "expo-font";
import D4_ID from './SearchUni/DocumentPage/D4_ID'
import D5_Ielts from './SearchUni/DocumentPage/D5_Ielts'
import D6_Gap from './SearchUni/DocumentPage/D6_Gap'
import D7_Resume from './SearchUni/DocumentPage/D7_Resume'
import D8_Passport from './SearchUni/DocumentPage/D8_Passport'
import Doc_HomeMain from './SearchUni/Doc_HomeMain'
import S_FinalSubmit from './SearchUni/S_FinalSubmit'
import S_PersonalData_1 from './SearchUni/PersonalData/S_PersonalData_1'
import PersonalData_HomeMain from './SearchUni/PersonalData_HomeMain'
import S_PersonalData_2 from './SearchUni/PersonalData/S_PersonalData_2'
import S_PersonalData_3 from './SearchUni/PersonalData/S_PersonalData_3'
import S_PersonalData_4 from './SearchUni/PersonalData/S_PersonalData_4'
import S_PersonalData_5 from './SearchUni/PersonalData/S_PersonalData_5'
import S_PersonalData_6 from './SearchUni/PersonalData/S_PersonalData_6'

// Stack Variable
const Stack = createStackNavigator();

export default function Parent_Search() {
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    // Expo Font Logic
    let [loaded] = useFonts({
        Archivo: require("../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
        Kanit: require("../assets/fonts/My_Soul/Kanit-Light.ttf"),
        Heebo: require("../assets/fonts/My_Soul/Heebo-Medium.ttf"),
        HeeboExtra: require("../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
        KanitBold: require("../assets/fonts/My_Soul/Kanit-Bold.ttf"),
        KanitBlack: require("../assets/fonts/My_Soul/Kanit-Black.ttf"),
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
        <NavigationContainer>
            <Stack.Navigator>
                {/* 1 */}
                {/* <Stack.Screen name='Main' component={Main} options={{
                    headerTitle: "Course Details",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                    },
                    headerPressColor: "grey"
                }} /> */}
                {/* 2 */}
                <Stack.Screen name='SubMainHome' component={SubMainHome} options={{
                    headerTitle: "Course Details",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                    },
                    headerPressColor: "grey",
                }} />
                {/* 3 */}
                <Stack.Screen name='DocHome' component={DocHome} options={{
                    headerTitle: "Upload Docs",
                    headerTitleStyle: {
                        fontFamily: "Heebo",    
                    },
                    headerPressColor: "grey"
                }} />
                {/* Now For Doc Upload Navigation */}
                {/* Doc 1 */}
                <Stack.Screen name='D1_10Mark' component={D1_10Mark} options={{
                    headerTitle: "10th Marksheet And Certificate",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 17,
                    },
                    headerPressColor: "grey"
                }} />
                {/* Doc 2 */}
                <Stack.Screen name='D2_11Mark' component={D2_11Mark} options={{
                    headerTitle: "11th Marksheet And Certificate",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 17,
                    },
                    headerPressColor: "grey"
                }} />
                {/* Doc 3 */}
                <Stack.Screen name='D3_Bachelor' component={D3_Bachelor} options={{
                    headerTitle: "Bachelor Transcript And Degree",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 16.5,
                    },
                    headerPressColor: "grey"
                }} />
                {/* Doc 4 */}
                <Stack.Screen name='D4_ID' component={D4_ID} options={{
                    headerTitle: "ID Card ( Front And Back )",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 16.5,
                    },
                    headerPressColor: "grey"
                }} />
                {/* Doc 5 */}
                <Stack.Screen name='D5_Ielts' component={D5_Ielts} options={{
                    headerTitle: "IELTS Score Copy",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 16.5,
                    },
                    headerPressColor: "grey"
                }} />
                {/* Doc 6 */}
                <Stack.Screen name='D6_Gap' component={D6_Gap} options={{
                    headerTitle: "Any Gap Proof",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 16.5,
                    },
                    headerPressColor: "grey"
                }} />
                {/* Doc 7 */}
                <Stack.Screen name='D7_Resume' component={D7_Resume} options={{
                    headerTitle: "Updated Resume",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 16.5,
                    },
                    headerPressColor: "grey"
                }} />
                {/* Doc 8 */}
                <Stack.Screen name='D8_Passport' component={D8_Passport} options={{
                    headerTitle: "Passport",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 17,
                    },
                    headerPressColor: "grey"
                }} />
                {/* Doc 9 */}
                <Stack.Screen name='Doc_HomeMain' component={Doc_HomeMain} options={{
                    headerTitle: "Documents",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 17,
                        color: "white",
                    },
                    headerStyle:{
                        backgroundColor: "#EB2F06",
                    },
                    headerPressColor: "grey",
                    headerTintColor: "white",
                }} />
                {/* Doc 10 */}
                <Stack.Screen name='S_FinalSubmit' component={S_FinalSubmit} options={{
                    headerShown: false,
                }} />
                {/* Now For Personal Data Navigation */}
                {/* P D 1 */}
                <Stack.Screen name='PersonalData_HomeMain' component={PersonalData_HomeMain} options={{
                    headerTitle: "Personal Data",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 17,
                        color: "black",
                    },
                    headerPressColor: "grey",
                    headerTintColor: "black",
                }} />
                {/* P D 2 */}
                <Stack.Screen name='S_PersonalData_1' component={S_PersonalData_1} options={{
                    headerTitle: "Page 1",
                    headerTitleStyle: {
                        // fontFamily: "Heebo",
                        fontSize: 17,
                        color: "white",
                    },
                    headerStyle:{
                        backgroundColor: "#EB2F06",
                    },
                    headerPressColor: "grey",
                    headerTintColor: "white",
                }} />
                {/* P D 2 */}
                <Stack.Screen name='S_PersonalData_2' component={S_PersonalData_2} options={{
                    headerTitle: "Page 2",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 17,
                        color: "white",
                    },
                    headerStyle:{
                        backgroundColor: "#EB2F06",
                    },
                    headerPressColor: "grey",
                    headerTintColor: "white",
                }} />
                {/* P D 3 */}
                <Stack.Screen name='S_PersonalData_3' component={S_PersonalData_3} options={{
                    headerTitle: "Page 3",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 17,
                        color: "white",
                    },
                    headerStyle:{
                        backgroundColor: "#EB2F06",
                    },
                    headerPressColor: "grey",
                    headerTintColor: "white",
                }} />
                {/* P D 4 */}
                <Stack.Screen name='S_PersonalData_4' component={S_PersonalData_4} options={{
                    headerTitle: "Page 4",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 17,
                        color: "white",
                    },
                    headerStyle:{
                        backgroundColor: "#EB2F06",
                    },
                    headerPressColor: "grey",
                    headerTintColor: "white",
                }} />
                {/* P D 5 */}
                <Stack.Screen name='S_PersonalData_5' component={S_PersonalData_5} options={{
                    headerTitle: "Page 5",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 17,
                        color: "white",
                    },
                    headerStyle:{
                        backgroundColor: "#EB2F06",
                    },
                    headerPressColor: "grey",
                    headerTintColor: "white",
                }} />
                {/* P D 6 */}
                <Stack.Screen name='S_PersonalData_6' component={S_PersonalData_6} options={{
                    headerTitle: "Page 6",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        fontSize: 17,
                        color: "white",
                    },
                    headerStyle:{
                        backgroundColor: "#EB2F06",
                    },
                    headerPressColor: "grey",
                    headerTintColor: "white",
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


