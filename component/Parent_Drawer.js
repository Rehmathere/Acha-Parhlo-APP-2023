import React, { useState, useEffect } from "react";
import MyDrawer from "./DrawerOption/Drawer";
import Rate from './DrawerOption/RateUs/Rate'
import faqs from './DrawerOption/Faqs/MainFaqs'
import Profile from "./DrawerOption/Profile/Profile";
import Logout from "./DrawerOption/Logout/Logout";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, View, Image } from "react-native";
// Vector Icon
import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
// Fonts Header File
import { useFonts } from "expo-font";
import WishList from "./DrawerOption/Wishlist/WishList";

// Constant Drawer
const Drawer = createDrawerNavigator();

export default function Parent_Drawer() {
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
          headerTitle: "Home",
          headerStyle: {
            backgroundColor: "#EB2F06",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily:"Heebo",
            letterSpacing: 1.9,
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            color: "black",
            fontSize: 16,
            fontFamily:"Kanit",
            letterSpacing: 0.5,
          },
        }}
      >
        {/* Option 1 */}
        <Drawer.Screen name="MyDrawer"
          options={{
            drawerLabel: "Home",
            title: "My_Drawer",
            headerTitle:"Home",
            headerTitleStyle:{
              fontFamily:"Kanit",
              letterSpacing: 1.4,
            },
            drawerIcon: () => (
              <FontAwesome name="home" size={21} color="#EA2027" style={{ marginLeft: 2 }} />
            )
          }}
          component={MyDrawer} />
        {/* Option 2 */}
        <Drawer.Screen name="Profile"
          options={{
            drawerLabel: "Edit Profile",
            headerTitle: "Edit Profile",
            title: "Edit Profile",
            headerTitleStyle:{
              fontFamily:"Kanit",
              letterSpacing: 1.4,
            },
            drawerIcon: () => (
              <FontAwesome5 name="user-edit" size={18} color="#EA2027" style={{ marginLeft: 2 }} />
            )
          }}
          component={Profile} />
        {/* Option 3 */}
        <Drawer.Screen name="Wishlist"
          options={{
            drawerLabel: "Wishlist",
            headerTitle: "Wishlist",
            headerTitleStyle:{
              fontFamily:"Kanit",
              letterSpacing: 1.4,
            },
            title: "WishList",
            drawerIcon: () => (
              <MaterialCommunityIcons name="heart-box" size={27} color="#EA2027" />
              )
            }}
            component={WishList} />
        {/* Option 4 */}
        <Drawer.Screen name="faqs"
          options={{
            drawerLabel: "FAQ's",
            headerTitle: "FAQ's",
            headerTitleStyle:{
              fontFamily:"Kanit",
              letterSpacing: 1.4,
            },
            title: "MyThird",
            drawerIcon: () => (
              <Ionicons name="ios-help-circle" size={27} color="#EA2027" />
            )
          }}
          component={faqs} />
        {/* Option 5 */}
        <Drawer.Screen name="Rate"
          options={{
            drawerLabel: "Rate Us",
            title: "Rate",
            headerTitle:"Rate Us",
            headerTitleStyle:{
              fontFamily:"Kanit",
              letterSpacing: 1.4,
            },
            drawerIcon: () => (
              <MaterialIcons name="star-rate" size={28} color="#EA2027" />
            )
          }}
          component={Rate} />
        {/* Option 6 */}
        <Drawer.Screen name="Logout"
          options={{
            drawerLabel: "Logout",
            title: "Logout",
            drawerIcon: () => (
              <MaterialCommunityIcons name="logout" size={29} color="#EA2027" style={{ marginLeft: 2 }} />
            )
          }}
          component={Logout} />
        {/* End */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
