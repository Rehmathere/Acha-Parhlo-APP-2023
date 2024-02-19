import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Z_Test_Extra_Z_1 from './Z_Test_Extra_Z_1';
import Z_Test_Extra_Z_2 from './Z_Test_Extra_Z_2';
import Z_Test_Extra_Z_3 from './Z_Test_Extra_Z_3';


// Constant Variable
const Stack = createStackNavigator();

export default function Z_Test_Extra_Parent() {
    // Main Body
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* 1 */}
                <Stack.Screen component={Z_Test_Extra_Z_1} name="Z_Test_Extra_Z_1"
                    options={{ headerShown: false }} />
                {/* 2 */}
                <Stack.Screen component={Z_Test_Extra_Z_2} name="Z_Test_Extra_Z_2"
                    options={{ headerShown: false }} />
                {/* 3 */}
                <Stack.Screen component={Z_Test_Extra_Z_3} name="Z_Test_Extra_Z_3"
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

