import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// Files
import Z_Test_1_A from './Z_Test_1_A'
import Z_Test_2_A from './Z_Test_2_A'
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Z_Test_3_A from './Z_Test_3_A';
import Z_Test_Part_1 from './Z_Test_Part_1';
import Z_Test_Part_2 from './Z_Test_Part_2';
import Z_Test_Part_3 from './Z_Test_Part_3';

// Constant Variable
const Stack = createStackNavigator();

export default function Z_Test_Parent_A() {
    // Main Body
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* 1 */}
                <Stack.Screen component={Z_Test_1_A} name="Z_Test_1_A"
                    options={{ headerShown: false }} />
                {/* 2 */}
                <Stack.Screen component={Z_Test_2_A} name="Z_Test_2_A"
                    options={{ headerShown: false }} />
                {/* 3 */}
                <Stack.Screen component={Z_Test_3_A} name="Z_Test_3_A"
                    options={{ headerShown: false }} />
                {/* 4 */}
                <Stack.Screen component={Z_Test_Part_1} name="Z_Test_Part_1"
                    options={{ headerShown: false }} />
                {/* 5 */}
                <Stack.Screen component={Z_Test_Part_2} name="Z_Test_Part_2"
                    options={{ headerShown: false }} />
                {/* 6 */}
                <Stack.Screen component={Z_Test_Part_3} name="Z_Test_Part_3"
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

