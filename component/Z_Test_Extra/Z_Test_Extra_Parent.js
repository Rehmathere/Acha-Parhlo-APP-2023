import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Z_Test_Extra_Z_1 from "./Z_Test_Extra_Z_1";
import Z_Test_Extra_Z_2 from "./Z_Test_Extra_Z_2";
import Z_Test_Extra_Z_3 from "./Z_Test_Extra_Z_3";
// Fonts Header File
import { useFonts } from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import Z_Test_Extra_Z_4 from "./Z_Test_Extra_Z_4";
import Z_Test_Extra_Z_5 from "./Z_Test_Extra_Z_5";
import Z_Test_Extra_Z_6 from "./Z_Test_Extra_Z_6";

// Constant Variable
const Stack = createStackNavigator();

export default function Z_Test_Extra_Parent() {
  // ---------- Font Family ----------
  // 1 - useState
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // Expo Font Logic
  let [loaded] = useFonts({
    Archivo: require("../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
    Kanit: require("../../assets/fonts/My_Soul/Kanit-Light.ttf"),
    Heebo: require("../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
    HeeboExtra: require("../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
    KanitBold: require("../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
    KanitBlack: require("../../assets/fonts/My_Soul/Kanit-Black.ttf"),
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
  // ---------- Font Family ----------
  // Main Body
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "white", // Background color for the header
          },
          headerTintColor: "black", // Text color for header items
          headerTitleStyle: {
            letterSpacing: 1.5,
            fontSize: 15,
            color: "black", // Text color for header title
          },
          headerBackTitleStyle: {
            color: "black", // Text color for back button label
          },
          headerBackTitleVisible: false, // Hide default back button label
          headerBackVisible: true, // Show back button
          headerBackImage: () => (
            <View
              style={{
                marginLeft: 2,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  // backgroundColor: "#E0E0E0",
                  backgroundColor: "#FFD5CB",
                  borderRadius: 50,
                  borderWidth: 0.5,
                  borderColor: "#FFD5CB",
                  paddingHorizontal: 7,
                  paddingVertical: 6.5,
                }}
              >
                <Text style={{ color: "black", borderRadius: 5, }}><Ionicons name="chevron-back" size={24} color="black" /></Text>
              </View>
            </View>
          ),
        }}
      >
        {/* 1 */}
        <Stack.Screen
          component={Z_Test_Extra_Z_1}
          name="Z_Test_Extra_Z_1"
          options={{
            headerShown: false,
          }}
        />
        {/* 2 */}
        <Stack.Screen
          component={Z_Test_Extra_Z_2}
          name="Z_Test_Extra_Z_2"
          options={{
            headerTitle: "Screen 2",
          }}
        />
        {/* 3 */}
        <Stack.Screen
          component={Z_Test_Extra_Z_3}
          name="Z_Test_Extra_Z_3"
          options={{
            headerTitle: "Screen 3",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
