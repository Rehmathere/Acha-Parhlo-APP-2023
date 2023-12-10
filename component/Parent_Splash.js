import React from 'react'
import Screen0 from './Splash1/Screen0'
import Screen1 from './Splash1/Screen1'
import Screen2 from './Splash1/Screen2'
import Screen3 from './Splash1/Screen3'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Constant Variable
const Stack = createStackNavigator();

export default function Parent_Splash() {
  // Main Body
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Screen 0 */}
        <Stack.Screen
          name="Screen0"
          component={Screen0}
          options={{headerShown:false}}
        />
        {/* Screen 1 */}
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{headerShown:false}}
        />
        {/* Screen 2 */}
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{headerShown:false}}
        />
        {/* Screen 3 */}
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

