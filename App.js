import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { firebase } from "./component/firestore";
import {
  NavigationContainer,
  useNavigation,
  CommonActions,
} from "@react-navigation/native"; // Moved from DrawerNavigation
// All Header Files
import Login from "./component/Authentication/Login";
import Registration from "./component/Authentication/Registration";
import ForgetPass from "./component/Authentication/ForgetPass";
import Rate from "./component/DrawerOption/RateUs/Rate";
import Faqs from "./component/DrawerOption/Faqs/MainFaqs";
import Profile from "./component/DrawerOption/Profile/Profile";
import Logout from "./component/DrawerOption/Logout/Logout";
import WishList from "./component/DrawerOption/Wishlist/WishList";
import Drawer from "./component/DrawerOption/Drawer";
import ApplicationList from "./component/Application/ApplicationList";
import ApplicationStatus from "./component/Application/ApplicationStatus";
import Home from "./component/Appointment/Home";
import BookAppointment from "./component/Appointment/BookAppointment";
import Success from "./component/Appointment/Success";
import Completed from "./component/Appointment/Completed";
import Chat from "./component/Chat/Chat";
import Main from "./component/SearchUni/Main";
import SubMainHome from "./component/SearchUni/SubMainHome";
import DocHome from "./component/SearchUni/DocumentPage/DocHome";
import D1_10Mark from "./component/SearchUni/DocumentPage/D1_10Mark";
import D2_11Mark from "./component/SearchUni/DocumentPage/D2_11Mark";
import D3_Bachelor from "./component/SearchUni/DocumentPage/D3_Bachelor";
import D4_ID from "./component/SearchUni/DocumentPage/D4_ID";
import D5_Ielts from "./component/SearchUni/DocumentPage/D5_Ielts";
import D6_Gap from "./component/SearchUni/DocumentPage/D6_Gap";
import D7_Resume from "./component/SearchUni/DocumentPage/D7_Resume";
import D8_Passport from "./component/SearchUni/DocumentPage/D8_Passport";
import Doc_HomeMain from "./component/SearchUni/Doc_HomeMain";
import S_FinalSubmit from "./component/SearchUni/S_FinalSubmit";
import PersonalData_HomeMain from "./component/SearchUni/PersonalData_HomeMain";
import S_PersonalData_1 from "./component/SearchUni/PersonalData/S_PersonalData_1";
import S_PersonalData_2 from "./component/SearchUni/PersonalData/S_PersonalData_2";
import S_PersonalData_3 from "./component/SearchUni/PersonalData/S_PersonalData_3";
import S_PersonalData_4 from "./component/SearchUni/PersonalData/S_PersonalData_4";
import S_PersonalData_5 from "./component/SearchUni/PersonalData/S_PersonalData_5";
import S_PersonalData_6 from "./component/SearchUni/PersonalData/S_PersonalData_6";
import Screen0 from "./component/Splash1/Screen0";
import Screen1 from "./component/Splash1/Screen1";
import Screen2 from "./component/Splash1/Screen2";
import Screen3 from "./component/Splash1/Screen3";
import ChangePass from "./component/DrawerOption/ChangePass/ChangePass";
import FinalChat from "./component/Chat/FinalChat";
import Virtual_Counselling from "./component/_Counselling_/Virtual_Counselling";
import Page_Vir_Consult from "./component/_Counselling_/Page_Vir_Consult";

const Stack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

function App() {
  const toggleDrawer = () => {
    navigation.dispatch(CommonActions.toggleDrawer());
  };
  // --------------------- Drawer Image Area Fetcing ---------------------
  const [image, setImage] = useState(
    "https://icon2.cleanpng.com/20180402/oaq/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6760664.4895544815226654464834.jpg"
  );
  // Fetching user image from Firestore
  const fetchImageFromFirestore = async () => {
    try {
      const userRef = firebase.firestore().collection("6 - Edit Profile App");
      const snapshot = await userRef.get();
      if (!snapshot.empty) {
        const userData = snapshot.docs[0].data();
        setImage(
          userData.image ||
            "https://icon2.cleanpng.com/20180402/oaq/kisspng-computer-icons-avatar-login-user-avatar-5ac207e6760664.4895544815226654464834.jpg"
        );
      }
    } catch (error) {
      console.error("Error fetching image from Firestore:", error);
    }
  };
  useEffect(() => {
    fetchImageFromFirestore();
  }, []);
  // 0 - Navigation Variable
  const navigation = useNavigation();
  // Expo Font Logic
  // 1 - useState
  const [fontsLoaded, setFontsLoaded] = useState(false);
  let [loaded] = useFonts({
    Archivo: require("./assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
    Kanit: require("./assets/fonts/My_Soul/Kanit-Light.ttf"),
    Heebo: require("./assets/fonts/My_Soul/Heebo-Medium.ttf"),
    HeeboExtra: require("./assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
    KanitBold: require("./assets/fonts/My_Soul/Kanit-Bold.ttf"),
    KanitBlack: require("./assets/fonts/My_Soul/Kanit-Black.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
    }
  }, [loaded]);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppDrawer.Navigator
      initialRouteName="MyDrawer"
      drawerContent={(props) => (
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
            {/* Displaying user image */}
            <Image
              source={{ uri: image }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 65,
                borderWidth: 5,
                borderColor: "#E2DEDE",
              }}
            />
          </View>
          <DrawerItemList {...props} />
        </SafeAreaView>
      )}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "white",
          width: 230,
        },
        headerTitle: "Home",
        headerStyle: {
          backgroundColor: "#EB2F06",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "Heebo",
          letterSpacing: 1.9,
        },
        drawerActiveTintColor: "red",
        drawerLabelStyle: {
          color: "black",
          fontSize: 16,
          fontFamily: "Kanit",
          letterSpacing: 0.5,
        },
      }}
    >
      <AppDrawer.Screen
        name="E_MyDrawer"
        component={Drawer}
        options={{
          drawerLabel: "Dashboard",
          headerPressColor: "#EB2F06",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "#EB2F06",
          title: "E_My_Drawer",
          headerTitle: " ",
          headerTitleStyle: {
            fontFamily: "Kanit",
            letterSpacing: 2,
          },
          drawerIcon: () => (
            <FontAwesome
              name="home"
              size={21}
              color="#EA2027"
              style={{ marginLeft: 2 }}
            />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Edit Profile",
          headerTitle: "Edit Profile",
          headerTitleStyle: {
            fontFamily: "Kanit",
            letterSpacing: 1.5,
            fontSize: 15,
          },
          drawerIcon: () => (
            <FontAwesome5
              name="user-edit"
              size={18}
              color="#EA2027"
              style={{ marginLeft: 2 }}
            />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Password"
        component={ChangePass}
        options={{
          drawerLabel: "Password",
          headerTitle: "Reset Password",
          headerTitleStyle: {
            fontFamily: "Kanit",
            letterSpacing: 1.5,
            fontSize: 15,
          },
          drawerIcon: () => (
            <FontAwesome5 name="key" size={18} color="#EA2027" />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Wishlist"
        component={WishList}
        options={{
          drawerLabel: "Wishlist",
          headerTitle: "My Wishlist",
          headerTitleStyle: {
            fontFamily: "Kanit",
            letterSpacing: 1.5,
            fontSize: 15,
          },
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="heart-box"
              size={27}
              color="#EA2027"
            />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Faqs"
        component={Faqs}
        options={{
          drawerLabel: "FAQ's",
          headerTitle: "FAQ's",
          headerTitleStyle: {
            fontFamily: "Kanit",
            letterSpacing: 1.5,
            fontSize: 15,
          },
          drawerIcon: () => (
            <Ionicons name="help-circle-sharp" size={27} color="#EA2027" />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Rate"
        component={Rate}
        options={{
          drawerLabel: "Rate Us",
          headerTitle: "Rate Us",
          headerTitleStyle: {
            fontFamily: "Kanit",
            letterSpacing: 1.5,
            fontSize: 15,
          },
          drawerIcon: () => (
            <MaterialIcons name="star-rate" size={28} color="#EA2027" />
          ),
        }}
      />
      <AppDrawer.Screen
        name="Logout"
        component={Logout}
        options={{
          drawerLabel: "Logout",
          headerTitle: "Logout",
          headerTitleStyle: {
            fontFamily: "Kanit",
            letterSpacing: 1.5,
            fontSize: 15,
          },
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="logout"
              size={29}
              color="#EA2027"
              style={{ marginLeft: 2 }}
            />
          ),
        }}
      />
      {/* The End */}
    </AppDrawer.Navigator>
  );
}

export default () => {
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
                marginLeft: 1.1,
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
                  paddingHorizontal: 7.5,
                  paddingVertical: 6.5,
                }}
              >
                <Text style={{ color: "black", borderRadius: 5 }}>
                  <Ionicons name="chevron-back" size={24} color="black" />
                </Text>
              </View>
            </View>
          ),
        }}
      >
        {/* -------- Per - Splash.js -------- */}
        <Stack.Screen
          name="Screen0"
          component={Screen0}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{ headerShown: false }}
        />
        {/* ---------------------------- */}
        {/* -------- 0 - Authenticate -------- */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPass"
          component={ForgetPass}
          options={{
            headerTitle: "Forget Password",
            headerTitleStyle: {
              fontFamily: "Kanit",
              color: "white",
              letterSpacing: 1.5,
              fontSize: 14,
            },
            headerPressColor: "white",
            headerStyle: {
              backgroundColor: "#EB2F06",
            },
            headerTintColor: "white",
          }}
        />
        {/* ---------------------------- */}
        {/* -------- 0 - App.js -------- */}
        <Stack.Screen
          name="MyDrawer"
          component={App}
          options={{
            headerShown: false,
          }}
        />
        {/* -------- 1 - Parent_Application.js -------- */}
        <Stack.Screen
          component={ApplicationList}
          name="ApplicationList"
          options={{
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
            title: "Application List",
          }}
        />
        <Stack.Screen
          component={ApplicationStatus}
          name="ApplicationStatus"
          options={{
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
            title: "Application Tracking",
          }}
        />
        {/* -------- 2 - Parent_Appoint.js -------- */}
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
            title: "Appointment",
          }}
        />
        <Stack.Screen
          component={BookAppointment}
          name="BookAppointment"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Success}
          name="Success"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Completed}
          name="Completed"
          options={{
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
            title: "Appointment History",
          }}
        />
        {/* -------- 3 - Parent_Search.js -------- */}
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerTitle: "Courses",
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
            // headerStyle: {
            //   elevation: 5,
            //   shadowColor: '#000',
            //   shadowOffset: { width: 0, height: 2 },
            //   shadowOpacity: 0.25,
            //   shadowRadius: 3.84,
            // },
          }}
        />
        <Stack.Screen
          name="SubMainHome"
          component={SubMainHome}
          options={{
            headerTitle: "Course Details",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="DocHome"
          component={DocHome}
          options={{
            headerTitle: "Upload Docs",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        {/* Now For Doc Upload Navigation */}
        <Stack.Screen
          name="D1_10Mark"
          component={D1_10Mark}
          options={{
            headerTitle: "10th Class Records",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="D2_11Mark"
          component={D2_11Mark}
          options={{
            headerTitle: "11th Class Records",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="D3_Bachelor"
          component={D3_Bachelor}
          options={{
            headerTitle: "Bachelor Records",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="D4_ID"
          component={D4_ID}
          options={{
            headerTitle: "ID Card ( Front , Back )",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="D5_Ielts"
          component={D5_Ielts}
          options={{
            headerTitle: "IELTS Score Copy",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="D6_Gap"
          component={D6_Gap}
          options={{
            headerTitle: "Gap Record",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="D7_Resume"
          component={D7_Resume}
          options={{
            headerTitle: "Resume",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="D8_Passport"
          component={D8_Passport}
          options={{
            headerTitle: "Passport",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="Doc_HomeMain"
          component={Doc_HomeMain}
          options={{
            headerTitle: "Documents",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
              color: "white",
            },
            headerStyle: {
              backgroundColor: "#EB2F06",
            },
            headerPressColor: "white",
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="S_FinalSubmit"
          component={S_FinalSubmit}
          options={{
            headerShown: false,
          }}
        />
        {/* Now For Personal Data Navigation */}
        <Stack.Screen
          name="PersonalData_HomeMain"
          component={PersonalData_HomeMain}
          options={{
            headerTitle: "Personal Data",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="S_PersonalData_1"
          component={S_PersonalData_1}
          options={{
            headerTitle: "Page 1",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="S_PersonalData_2"
          component={S_PersonalData_2}
          options={{
            headerTitle: "Page 2",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="S_PersonalData_3"
          component={S_PersonalData_3}
          options={{
            headerTitle: "Page 3",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="S_PersonalData_4"
          component={S_PersonalData_4}
          options={{
            headerTitle: "Page 4",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="S_PersonalData_5"
          component={S_PersonalData_5}
          options={{
            headerTitle: "Page 5",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        <Stack.Screen
          name="S_PersonalData_6"
          component={S_PersonalData_6}
          options={{
            headerTitle: "Page 6",
            headerTitleStyle: {
              fontFamily: "Heebo",
              fontSize: 15,
              letterSpacing: 1.5,
            },
          }}
        />
        {/* -------- 4 - Parent_Chat.js -------- */}
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerTitle: "Chat",
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
          }}
        />
        <Stack.Screen
          name="FinalChat"
          component={FinalChat}
          options={{
            headerTitle: "Start Chat",
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
          }}
        />
        {/* -------- 5 - Parent_Counselling.js -------- */}
        <Stack.Screen
          name="Page_Vir_Consult"
          component={Page_Vir_Consult}
          options={{
            headerTitle: "Virtual Consultancy",
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
          }}
        />
        <Stack.Screen
          name="Virtual_Counselling"
          component={Virtual_Counselling}
          options={{
            headerTitle: "Ask Anything",
            headerTitleStyle: {
              fontFamily: "Heebo",
              letterSpacing: 1.5,
              fontSize: 15,
            },
          }}
        />
        {/* ------------------------------------------------------ */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// ----------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------  Final App.js Above ( Don't Delete )   ---------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------
// import React from "react";
// import { View, StyleSheet } from 'react-native'
// import Z_Test_Extra_Parent from "./component/Z_Test_Extra/Z_Test_Extra_Parent";

// export default function App() {
//   // Main Body
//   return (
//     <View style={styles.container}>
//       {/* ------------------------------------------------ */}
//       {/* Pre 0 - Splash --- ( Completed ) */}
//       {/* <Parent_Splash /> */}
//       {/* 0 - Authenticate --- ( Completed ) */}
//       {/* <Parent_Authenticate /> */}
//       {/* 1 - Apointment --- ( Completed ) */}
//       {/* <Parent_Appoint /> */}
//       {/* 2 - Search Uni --- ( Completed ) */}
//       {/* <Parent_Search /> */}
//       {/* 3 - Parent_Drawer --- ( Completed ) */}
//       {/* <Parent_Drawer /> */}
//       {/* 4 - Parent_Application --- ( Completed ) */}
//       {/* <Parent_Application /> */}
//       {/* 5 - Parent_Chat */}
//       {/* <Parent_Chat /> */}
//       {/* -------- Extra -------- */}
//       {/* <MySecond /> */}
//       {/* - Demo Practice Backend - */}
//       {/* <Z_Test_Parent_A /> */}
//       {/* - Demo Practice Backend - ( 2 ) */}
//       <Z_Test_Extra_Parent />
//       {/* ------------------------------------------------ */}

//     </View>
//   );
// }

// // CSS
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// })
