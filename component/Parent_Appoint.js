import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// Components File
import Home from "./Appointment/Home";
import BookAppointment from './Appointment/BookAppointment'
import Success from "./Appointment/Success";
import Completed from "./Appointment/Completed";
import Pending from "./Appointment/Pending";

// Stack Variable
const Stack = createStackNavigator();

export default function Parent_Appoint() {
    // Main Body
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* 1 - Home */}
                <Stack.Screen component={Home} name="Home"
                    options={{ headerShown: false }} />
                {/* 2 - Book Appointment Screen */}
                <Stack.Screen component={BookAppointment} name="BookAppointment"
                    options={{ headerShown: false }} />
                {/* 3 - Success Screen */}
                <Stack.Screen component={Success} name="Success"
                    options={{ headerShown: false }} />
                {/* 4 - Completed Appointments Screen */}
                <Stack.Screen component={Completed} name="Completed"
                    options={{ headerShown: false }} />
                {/* 5 - Pending Appointments Screen */}
                <Stack.Screen component={Pending} name="Pending"
                    options={{ headerShown: false }} />
                {/*  */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

