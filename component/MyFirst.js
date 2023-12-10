import React from "react";
import MySecond from "./MySecond";
import MyThird from './MyThird'
import Rate from "./DrawerOption/RateUs/Rate";
import faqs from './Faqs/MainFaqs'
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, View, Image } from "react-native";
// Vector Icon
import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// Constant Drawer
const Drawer = createDrawerNavigator();

export default function MyFirst() {
  // Main Body
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MySecond"
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "#EB2F06",
                  borderBottomWidth: 1,
                  backgroundColor: "#EB2F06",
                  marginBottom: 20,
                }}
              >
                <Image
                  source={require("./Pics/User.png")}
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 65,
                  }}
                />
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "white",
            width: 250,
          },
          headerTitle:"loio",
          headerStyle: {
            backgroundColor: "#EB2F06",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            color: "black",
            fontSize: 15,
            fontWeight:"bold",
          },
        }}
      >
        {/* Option 1 */}
        <Drawer.Screen name="MySecond"
          options={{
            drawerLabel: "Home",
            title: "MyFirst",
            drawerIcon: () => (
              <FontAwesome name="home" size={21} color="black" style={{marginLeft: 1}} />
            )
          }}
          component={MySecond} />
        {/* Option 2 */}
        <Drawer.Screen name="MyThird"
          options={{
            drawerLabel: "Edit Profile",
            title: "MyFirst",
            drawerIcon: () => (
              <FontAwesome5 name="user-edit" size={18} color="black" style={{marginLeft: 1}} />
            )
          }}
          component={MyThird} />
        {/* Option 3 */}
        <Drawer.Screen name="faqs"
          options={{
            drawerLabel: "FAQ's",
            title: "MyFirst",
            drawerIcon: () => (
              <Ionicons name="ios-help-circle" size={27} color="black" />
            )
          }}
          component={faqs} />
        {/* Option 4 */}
        <Drawer.Screen name="Rate"
          options={{
            drawerLabel: "Rate Us",
            title: "Rate",
            drawerIcon: () => (
              <MaterialIcons name="star-rate" size={28} color="black" />
            )
          }}
          component={Rate} />
        {/* Option 5 */}
        <Drawer.Screen name="Logout"
          options={{
            drawerLabel: "Logout",
            title: "MyFirst",
            drawerIcon: () => (
              <MaterialCommunityIcons name="logout" size={29} color="black" style={{marginLeft: 1.1}} />
            )
          }}
          component={faqs} />
          {/* End */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
