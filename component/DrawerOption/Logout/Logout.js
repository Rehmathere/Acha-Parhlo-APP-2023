import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
// Fonts Header File
import { useFonts } from "expo-font";
// useNavigate
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../../firestore";

export default function Logout() {
  // Modal for Appointment Booking Loading
  const [showStatus_Loading, setShowStatus_Loading] = useState(false);
  // Set TimeOut
  const ShowModal_Loading = () => {
    setShowContent(!showContent)
    // Display
    setShowStatus_Loading(true);
    // Not Display
    setTimeout(() => {
      setShowStatus_Loading(false);
      handleLogout(); // Logout after 3 seconds
    }, 3000);
  };
  // -------- Dashboard Logic ----------
  // useState
  const [email, setEmail] = useState("");
  // Change Password
  const changePassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(firebase.auth().currentUser.email)
      .then(() => {
        alert(" Password Reset Email Sent ");
      })
      .catch((error) => {
        alert(error);
      });
  };
  // useEffect
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          // Get the user's email
          const userEmail = user.email;
          // Update the state with the user's email
          setEmail(userEmail);
        } else {
          console.log("User not logged in");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
  // -------- Dashboard Logic ----------
  //  useNavigate
  const navigation = useNavigation();
  // 0 - useState
  const [showContent, setShowContent] = useState(false);
  // 1 - useState
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // Expo Font Logic
  let [loaded] = useFonts({
    Archivo: require("../../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
    Kanit: require("../../../assets/fonts/My_Soul/Kanit-Light.ttf"),
    Heebo: require("../../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
    HeeboExtra: require("../../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
    KanitBold: require("../../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
    KanitBlack: require("../../../assets/fonts/My_Soul/Kanit-Black.ttf"),
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
  // Logout function
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Navigate to login screen after logout
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.error("Logout error:", error.message);
      });
  };
  // Main Body
  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar backgroundColor={"#EB2F06"} />
      {/* Body */}
      <View style={styles.FirTxtParent}>
        <Text style={styles.FirTxt}>Want To Sign Out ?</Text>
      </View>
      {/* Image */}
      <View style={styles.FirImgParent}>
        <Image
          source={require("../../Pics/signout_1.png")}
          style={styles.FirImg}
        />
      </View>
      {/* Leaving Message */}
      <View style={styles.FirTxtParent2}>
        <Text style={styles.FirTxt2}>
          Thank you for using our app. We hope to see you again soon !
        </Text>
      </View>
      {/* Button */}
      <View style={styles.TwoBtnParent}>
        {/* 1 */}
        <TouchableOpacity style={styles.Fir_But}>
          <Text style={styles.Fir_But_Txt} onPress={() => setShowContent(true)}>
            Yes, Logout
          </Text>
        </TouchableOpacity>
        {/* 1 */}
        <TouchableOpacity style={styles.Fir_But2}>
          <Text
            style={styles.Fir_But_Txt2}
            onPress={() => navigation.navigate('E_MyDrawer')}
          >
            No, Kept Logged In
          </Text>
        </TouchableOpacity>
      </View>
      {/* 1 - Logout Modal */}
      <Modal animationType="fade" transparent={true} visible={showContent}>
        <View style={styles.Modal_Parent}>
          <View style={styles.Modal_Child}>
            <View style={styles.sub_Modal_Child}>
              <Text style={styles.Modal_Txt_2}>
                Are You Sure Want To Logout ?
              </Text>
              {/* Image Parent */}
              {/* <View style={styles.ParentImg}>
                <Image
                  source={require("../../Pics/logout_1.png")}
                  style={styles.Logout_Img}
                />
              </View> */}
              {/* Button Parent */}
              <View style={styles.Butt_Parent}>
                {/* Button 1 */}
                <View style={styles.sub_Butt_Parent}>
                  <TouchableOpacity
                    style={styles.Butt_Box_1}
                    onPress={ShowModal_Loading} // Show loader modal
                  >
                    <Text style={styles.Butt_Text_1}>Logout</Text>
                  </TouchableOpacity>
                </View>
                {/* Button 2 */}
                <View style={styles.sub_Butt_Parent}>
                  <TouchableOpacity
                    style={styles.Butt_Box_2}
                    onPress={() => setShowContent(!showContent)}
                  >
                    <Text style={styles.Butt_Text_2}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* 2 - Modal For Showing Loader And Then Logout */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={showStatus_Loading}
      >
        <View style={styles.ParentStatus}>
          <View style={styles.sub_ParentStatus}>
            <View style={styles.ParentStatusImg}>
              <Image
                source={require("../../Pics/E_Logout_G.gif")}
                style={styles.StatusImg_1}
              />
            </View>
            <Text style={styles.StatusTxt_E}>Thank you for using our service !</Text>
            <Text style={styles.StatusTxt}>We Are Signing You Out</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  fir_1: {
    // borderWidth: 0.5,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Heebo",
  },
  Modal_Parent: {
    flex: 1,
    // borderWidth: 0.5,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    justifyContent: "center",
    alignItems: "center",
  },
  Modal_Child: {
    // borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "white",
    marginHorizontal: 40,
    borderRadius: 30,
    paddingVertical: 13,
    paddingHorizontal: 11,
    width: "75%",
  },
  sub_Modal_Child: {
    // borderWidth: 0.5,
    padding: 10,
  },
  Modal_Txt_1: {
    // borderWidth: 0.5,
    fontSize: 23,
    fontFamily: "HeeboExtra",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    paddingBottom: 1,
    paddingTop: 1,
  },
  Modal_Txt_2: {
    // borderWidth: 0.5,
    fontSize: 14.5,
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "Kanit",
    textAlign: "center",
    color: "grey",
  },
  Butt_Parent: {
    // borderWidth: 0.5,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sub_Butt_Parent: {
    // borderWidth: 1,
    borderColor: "red",
  },
  Butt_Box_1: {
    // borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: "#EB2F06",
  },
  Butt_Text_1: {
    // borderWidth: 1,
    fontSize: 16,
    fontFamily: "Kanit",
    textAlign: "center",
    color: "white",
    letterSpacing: 1.5,
  },
  Butt_Text_2: {
    // borderWidth: 1,
    fontSize: 16,
    fontFamily: "Kanit",
    textAlign: "center",
    color: "black",
    letterSpacing: 1.5,
  },
  Butt_Box_2: {
    // borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: "#D1D6D9",
  },
  ParentImg: {
    // borderWidth: 0.5,
    marginBottom: 5,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Logout_Img: {
    // borderWidth: 0.5,
    // borderColor: "black",
    width: 70,
    height: 70,
  },
  FirTxtParent: {
    // borderWidth: 0.5,
    paddingTop: 65,
    paddingBottom: 20,
  },
  FirTxt: {
    // borderWidth: 0.5,
    paddingVertical: 5,
    fontFamily: "HeeboExtra",
    fontSize: 25,
    letterSpacing: 1.3,
    textAlign: "center",
  },
  FirTxtParent2: {
    // borderWidth: 0.5,
    paddingVertical: 10,
  },
  FirTxt2: {
    // borderWidth: 0.5,
    paddingVertical: 10,
    fontFamily: "Kanit",
    textAlign: "center",
    fontSize: 14,
    color: "grey",
    paddingHorizontal: 35,
    letterSpacing: 0.5,
    textTransform: "capitalize",
  },
  FirImgParent: {
    // borderWidth: 0.5,
    paddingVertical: 15,
  },
  FirImg: {
    // borderWidth: 0.5,
    borderColor: "black",
    paddingVertical: 20,
    alignSelf: "center",
    width: 170,
    height: 170,
  },
  TwoBtnParent: {
    // borderWidth: 0.5,
    paddingVertical: 7,
  },
  Fir_But: {
    borderWidth: 1,
    borderColor: "#EB2F06",
    paddingVertical: 8,
    backgroundColor: "#EB2F06",
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 10,
  },
  Fir_But_Txt: {
    // borderWidth: 0.5,
    fontFamily: "Kanit",
    color: "white",
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 2,
  },
  Fir_But2: {
    borderWidth: 0.5,
    borderColor: "#EB2F06",
    paddingVertical: 8,
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  Fir_But_Txt2: {
    // borderWidth: 0.5,
    fontFamily: "Kanit",
    color: "#EB2F06",
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 2,
  },
  ParentStatus: {
    backgroundColor: "rgba(0, 0, 0, 0.70)",
    flex: 1,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sub_ParentStatus: {
    // borderWidth: 1,
    width: "81%",
    backgroundColor: "white",
    paddingVertical: 25,
    borderRadius: 20,
  },
  ParentStatusImg: {
    // borderWidth: 0.5,
    paddingTop: 20,
    paddingBottom: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  StatusImg: {
    borderWidth: 0.5,
    borderColor: "transparent",
    // borderColor: "black",
    width: 120,
    height: 120,
  },
  StatusImg_1: {
    borderWidth: 0.5,
    borderColor: "transparent",
    borderColor: "black",
    width: 100,
    height: 65,
  },
  StatusTxt: {
    // borderWidth: 1,
    fontSize: 13,
    paddingBottom: 10,
    paddingHorizontal: 23,
    textAlign: "center",
    fontFamily: "Kanit",
    letterSpacing: 1.2,
    textTransform: "capitalize",
  },
  StatusTxt_E: {
    // borderWidth: 1,
    fontSize: 20,
    paddingBottom: 10,
    paddingHorizontal: 30,
    textAlign: "center",
    fontFamily: "HeeboExtra",
    letterSpacing: 1.5,
    textTransform: "capitalize",
  },
});
