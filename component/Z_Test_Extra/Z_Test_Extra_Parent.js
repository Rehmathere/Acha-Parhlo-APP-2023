import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Z_Test_Extra_Z_1 from './Z_Test_Extra_Z_1';
import Z_Test_Extra_Z_2 from './Z_Test_Extra_Z_2';
import Z_Test_Extra_Z_3 from './Z_Test_Extra_Z_3';
import Z_Test_Extra_Z_4 from './Z_Test_Extra_Z_4';
import Z_Test_Extra_Z_5 from './Z_Test_Extra_Z_5';
import Z_Test_Extra_Z_6 from './Z_Test_Extra_Z_6';

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
          options={{
            headerTitle: "Page 2",
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
          }} />
        {/* 3 */}
        <Stack.Screen component={Z_Test_Extra_Z_3} name="Z_Test_Extra_Z_3"
          options={{
            headerTitle: "Page 3",
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
          }} />
        {/* 4 */}
        <Stack.Screen component={Z_Test_Extra_Z_4} name="Z_Test_Extra_Z_4"
          options={{
            headerTitle: "Page 4",
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
          }} />
        {/* 5 */}
        <Stack.Screen component={Z_Test_Extra_Z_5} name="Z_Test_Extra_Z_5"
          options={{
            headerTitle: "Page 5",
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
          }} />
        {/* 6 */}
        <Stack.Screen component={Z_Test_Extra_Z_6} name="Z_Test_Extra_Z_6"
          options={{
            headerTitle: "Last Page",
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}