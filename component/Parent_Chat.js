import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// Fonts Header File
import { useFonts } from "expo-font";
import Chat from './Chat/Chat';

// Stack Variable
const Stack = createStackNavigator();

export default function Parent_Chat() {
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
                <Stack.Screen name='Chat' component={Chat} options={{
                    headerTitle: "Chat",
                    headerTitleStyle: {
                        fontFamily: "Heebo",
                        paddingHorizontal: 10,
                    },
                    headerPressColor: "grey",
                    // headerShown: false,
                }} />
                {/* 2 */}
                {/* - */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}


