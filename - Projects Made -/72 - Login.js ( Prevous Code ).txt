import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
// Import Extra
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firestore";
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
// Linear Gradient
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  // Navigation Variable
  const navigation = useNavigation();
  // useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [passwordButtonText, setPasswordButtonText] = useState(""); // Button text state
  // Function
  const loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // Change button text based on visibility state
    if (showPassword) {
      setPasswordButtonText("");
    } else {
      setPasswordButtonText("");
    }
  };

  // Main Body
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={"#EB2F06"} />
        {/* --  New Logic Code  -- */}
        {/* New Main Code */}
        <View style={styles.E_New_Parent_Extra}>
          {/* Part 1 */}
          {/* <LinearGradient colors={["#FF522B", "#FF8970"]} style={{ paddingVertical: 7, }}> */}
            <View style={styles.E_New_Parent_Extra_Part_1}>
              {/* Box Color Area */}
            </View>
          {/* </LinearGradient> */}
          {/* Part 2 */}
          <View style={styles.E_New_Parent_Extra_Part_2}>
            {/* Box Color Area */}
          </View>
        </View>
        {/* ---------------------- */}
        {/* 1 - Logo Part */}
        <View style={styles.Fir_Grand_Parent}>
          <View style={styles.New_fir_Parent}>
            <View style={styles.Sub_New_fir_Parent}>
              <Image source={require("../Pics/logo2.png")} style={[ styles.New_fir_Img , { tintColor: 'white' } ]} />
            </View>
          </View>
          {/* 2 - Email Part */}
          <View style={styles.New_Sec_Parent}>
            <View style={styles.Sub_New_Sec_Parent}>
              {/* 1 */}
              <View style={styles.New_Sec_Part_1_Par}>
                <View style={styles.Sub_New_Sec_Part_1_Par}>
                  <Text style={styles.New_Sec_Part_1_1}>Sign In</Text>
                  <Text style={styles.New_Sec_Part_1_2} onPress={() => navigation.navigate("Registration")}>Sign Up</Text>
                </View>
              </View>
              {/* 2 */}
              <View style={styles.New_Sec_Part_2_Par}>
                <View style={styles.Sub_New_Sec_Part_2_Par}>
                  {/* Input 1 */}
                  <View style={styles.New_Sec_Part_2_1}>
                    <Text style={styles.New_Sec_Part_2_1_Part_1}><MaterialIcons name="email" size={20} color="black" /></Text>
                    <TextInput
                      style={styles.New_Sec_Part_2_1_Part_2}
                      placeholder=" Enter Your Email "
                      onChangeText={(email) => setEmail(email)}
                      autoCapitalize="none"
                      autoCorrect={false}
                    />
                  </View>
                  {/* Input 2 */}
                  <View style={styles.New_Sec_Part_2_2}>
                    <Text style={styles.New_Sec_Part_2_1_Part_1}><Entypo name="lock" size={20} color="black" /></Text>
                    <TextInput
                      style={styles.New_Sec_Part_2_2_Part_2}
                      placeholder=" Enter Your Password "
                      onChangeText={(password) => setPassword(password)}
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry={!showPassword} // Toggle password visibility
                    />
                    <View style={styles.New_Sec_Part_2_3_Part_2}>
                      <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Text style={styles.Hide_See_Pass}>
                          {passwordButtonText}{" "}
                          {showPassword ? (
                            <Ionicons name="eye-off-sharp" size={18} color="black" />
                          ) : (
                            <Ionicons name="eye" size={18} color="black" />
                          )}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* Forget Password */}
                  <View style={styles.New_Sec_Part_2_3_Forget_Parent}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("ForgetPass")}
                      style={styles.New_Sec_Part_2_3_Forget}
                    >
                      <Text style={styles.New_Sec_Part_2_3_Forget_Txt}>Forget Password ?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Login Button */}
                <TouchableOpacity
                  onPress={() => loginUser(email, password)}
                  style={[styles.Login_Button]}
                >
                  <Text
                    style={styles.Login_Button_Text}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
                {/* Register Button */}
                <View style={styles.Register_Parent}>
                  {/* 1 */}
                  <Text style={styles.Register_Button_1}>Don't Have An Account ?</Text>
                  {/* 2 */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Registration")}
                    style={styles.Register_Button_2}
                  >
                    <Text style={styles.Register_Button_2_Text}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* ---------------------- */}
        {/* --  New Logic Code  -- */}
      </ScrollView >
    </View >
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  E_New_Parent_Extra: {
    borderWidth: 0,
    flex: 1,
  },
  E_New_Parent_Extra_Part_1: {
    borderWidth: 0,
    paddingVertical: 120,
    backgroundColor: "#EB2F06",
  },
  E_New_Parent_Extra_Part_2: {
    borderWidth: 0,
    flex: 1,
    // backgroundColor: "lightgreen",
    paddingVertical: 200,
  },
  Fir_Grand_Parent: {
    borderWidth: 0,
    // backgroundColor: "lightyellow",
    position: "absolute",
    alignSelf: "center",
    flex: 1,
  },
  New_fir_Parent: {
    borderWidth: 0,
    paddingVertical: 35,
    paddingHorizontal: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow"
  },
  Sub_New_fir_Parent: {
    borderWidth: 0,
    padding: 5,
    width: "60%",
  },
  New_fir_Img: {
    borderWidth: 0,
    // borderColor: "black",
    width: "95%",
    height: 112,
    alignSelf: "center",
  },
  New_Sec_Parent: {
    borderWidth: 0,
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  Sub_New_Sec_Parent: {
    backgroundColor: "white",
    borderWidth: 0,
    paddingTop: 32,
    paddingBottom: 30,
    paddingHorizontal: 13,
    paddingVertical: 5,
    width: "91%",
    borderRadius: 1,
    // borderColor: "transparent", // Set border color to transparent
    shadowColor: "black", // Set shadow color to black
    shadowOffset: { width: 0, height: 2 }, // Adjust shadow offset as needed
    shadowOpacity: 0.5, // Adjust shadow opacity as needed
    shadowRadius: 5, // Adjust spread of shadow as needed
    elevation: 20, // Set elevation to 0 to prevent shadow on Android
  },
  New_Sec_Part_1_Par: {
    borderWidth: 0,
    padding: 5,
  },
  Sub_New_Sec_Part_1_Par: {
    borderWidth: 0.5,
    borderColor: "grey",
    paddingVertical: 1,
    paddingHorizontal: 1,
    width: "85%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 50,
    // backgroundColor: "yellow",
  },
  New_Sec_Part_1_1: {
    backgroundColor: "#EB2F06",
    width: "52%",
    paddingVertical: 4,
    borderRadius: 50,
    fontFamily: "Kanit",
    textAlign: "center",
    letterSpacing: 2,
    fontSize: 15,
    color: "white",
  },
  New_Sec_Part_1_2: {
    // backgroundColor: "white",
    width: "48%",
    paddingVertical: 4,
    borderRadius: 50,
    fontFamily: "Kanit",
    textAlign: "center",
    letterSpacing: 2,
    fontSize: 15,
    color: "#EB2F06",
  },
  New_Sec_Part_2_Par: {
    borderWidth: 0,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  Sub_New_Sec_Part_2_Par: {
    borderWidth: 0,
    // backgroundColor: "yellow",
    paddingTop: 25,
    paddingBottom: 13,
  },
  New_Sec_Part_2_1: {
    backgroundColor: "white",
    borderBottomWidth: 1.3,
    borderBottomColor: "#EB2F06",
    width: "97%",
    alignSelf: "center",
    padding: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  New_Sec_Part_2_2: {
    borderWidth: 0,
    marginTop: 25,
    backgroundColor: "white",
    width: "97%",
    borderBottomWidth: 1.3,
    borderBottomColor: "#EB2F06",
    alignSelf: "center",
    padding: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  New_Sec_Part_2_1_Part_1: {
    borderWidth: 0,
    paddingVertical: 5.5,
    width: "12%",
    // backgroundColor: "lightgreen",
    textAlign: "center",
  },
  New_Sec_Part_2_1_Part_2: {
    borderWidth: 0,
    paddingVertical: 0.5,
    width: "88%",
    paddingHorizontal: 5,
    fontFamily: "Kanit",
    letterSpacing: 1,
    fontSize: 14,
  },
  New_Sec_Part_2_2_Part_2: {
    borderWidth: 0,
    paddingVertical: 0.5,
    width: "76%",
    paddingHorizontal: 5,
    fontFamily: "Kanit",
    letterSpacing: 1,
    fontSize: 14,
  },
  New_Sec_Part_2_3_Part_2: {
    borderWidth: 0,
    paddingVertical: 6,
    width: "12%",
  },
  New_Sec_Part_2_3_Forget_Parent: {
    borderWidth: 0,
    width: "100%",
    alignSelf: "center",
    paddingTop: 15,
    paddingBottom: 3,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 2.5,
  },
  New_Sec_Part_2_3_Forget: {
    borderWidth: 0,
    paddingVertical: 4,
    paddingHorizontal: 1,
  },
  New_Sec_Part_2_3_Forget_Txt: {
    borderWidth: 0,
    textAlign: "right",
    fontFamily: "Heebo",
    fontSize: 12,
    letterSpacing: 0.5,
    color: "#EB2F06",
  },
  Login_Button: {
    borderWidth: 0,
    backgroundColor: "#EB2F06",
    marginVertical: 0,
    marginHorizontal: 30,
    borderRadius: 20,
    paddingVertical: 4.5,
  },
  Login_Button_Text: {
    borderRadius: 20,
    borderWidth: 0,
    width: "90%",
    alignSelf: "center",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Kanit",
    letterSpacing: 2,
  },
  Register_Parent: {
    borderWidth: 0,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Register_Button_1: {
    borderWidth: 0,
    width: "60%",
    paddingVertical: 1,
    textAlign: "center",
    fontFamily: "Kanit",
    fontSize: 11.5,
    letterSpacing: 1.5,
  },
  Register_Button_2: {
    borderWidth: 0,
    paddingVertical: 3,
    width: "21%"
  },
  Register_Button_2_Text: {
    borderWidth: 0,
    paddingVertical: 1,
    textAlign: "center",
    fontSize: 11.5,
    fontFamily: "Heebo",
    color: "#EB2F06",
    letterSpacing: 0.5,
  },
});
