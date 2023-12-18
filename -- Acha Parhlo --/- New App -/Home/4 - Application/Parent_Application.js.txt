import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
// Navigation
import { createStackNavigator } from '@react-navigation/stack'
// Import Files
import ApplicationList from './Application/ApplicationList'
import ApplicationStatus from './Application/ApplicationStatus'
import { NavigationContainer } from '@react-navigation/native'
// Fonts Header File
import { useFonts } from "expo-font";

// Stack 
const Stack = createStackNavigator();

export default function Parent_Application() {
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
                <Stack.Screen component={ApplicationList} name='ApplicationList' options={{
                    headerTitleStyle:{
                        fontFamily: "Heebo",
                        letterSpacing: 0.8,
                        fontSize: 18,
                    },
                    title: "Applications Submitted"
                }} />
                {/* 2 */}
                <Stack.Screen component={ApplicationStatus} name='ApplicationStatus' options={{
                    headerTitleStyle:{
                        fontFamily: "Heebo",
                        letterSpacing: 0.8,
                        fontSize: 18,
                    },
                    title: "Application Tracking"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

