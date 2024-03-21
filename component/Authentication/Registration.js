import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { firebase } from "../firestore";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';

export default function Registration() {
  // ---- Toggle Password ----
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [passwordButtonText, setPasswordButtonText] = useState(""); // Button text state
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
  // ---- Toggle Password ----
  // 0 - Navigation Variable
  const navigation = useNavigation();
  // useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Function
  registerUser = async (email, password, firstName, lastName) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "awpro-f81b1.firebaseapp.com",
          })
          .then(() => {
            alert(" Verification Email Has Been Sent ");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName,
                lastName,
                email,
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      });
  };
  // Main Body
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={"#EB2F06"} />
        {/* -------------------------------  Old Logic Code  ------------------------------------ */}
        {/* Main Body
        <Text style={styles.fir}>Register</Text>
        Text 1
        <Text style={styles.f_txt}>First Name</Text>
        TextInput 1
        <TextInput
          style={styles.sec}
          placeholder=" Enter First Name "
          onChangeText={(firstName) => setFirstName(firstName)}
          autoCorrect={false}
        />
        Text 2
        <Text style={styles.f_txt}>Last Name</Text>
        TextInput 2
        <TextInput
          style={styles.sec}
          placeholder=" Enter Last Name "
          onChangeText={(lastName) => setLastName(lastName)}
          autoCorrect={false}
        />
        Text 3
        <Text style={styles.f_txt}>Email</Text>
        TextInput 3
        <TextInput
          style={styles.sec}
          placeholder=" Enter Email "
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        Text 4
        <Text style={styles.f_txt}>Password</Text>
        TextInput 4
        <TextInput
          style={styles.sec}
          placeholder=" Enter Password "
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        Button 1
        <TouchableOpacity
          onPress={() => registerUser(email, password, firstName, lastName)}
          style={[styles.but, styles.but_1]}
        >
          <Text
            style={{
              fontFamily: "Heebo",
              fontSize: 16,
              textAlign: "center",
              color: "white",
              letterSpacing: 2,
            }}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
        Button 2
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[styles.Ebut, styles.but_2]}
        >
          <Text
            style={{
              fontFamily: "Heebo",
              fontSize: 13.5,
              textAlign: "center",
              color: "white",
              letterSpacing: 1.5,
            }}
          >
            Already have Account ? LOGIN
          </Text>
        </TouchableOpacity> */}
        {/* -------------------------------  Old Logic Code  ------------------------------------ */}
        {/* -------------------------------  Old Logic Code  ------------------------------------ */}
        {/* --  New Logic Code  -- */}
        {/* New Main Code */}
        <View style={styles.E_New_Parent_Extra}>
          {/* Part 1 */}
          <View style={styles.E_New_Parent_Extra_Part_1}>
            {/* Box Color Area */}
          </View>
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
              <Image source={require("../Pics/logo2.png")} style={styles.New_fir_Img} />
            </View>
          </View>
          {/* 2 - Email Part */}
          <View style={styles.New_Sec_Parent}>
            <View style={styles.Sub_New_Sec_Parent}>
              {/* 1 */}
              <View style={styles.New_Sec_Part_1_Par}>
                <View style={styles.Sub_New_Sec_Part_1_Par}>
                  <Text style={styles.New_Sec_Part_1_2} onPress={() => navigation.navigate("Login")}>Sign In</Text>
                  <Text style={styles.New_Sec_Part_1_1}>Sign Up</Text>
                </View>
              </View>
              {/* 2 */}
              <View style={styles.New_Sec_Part_2_Par}>
                <View style={styles.Sub_New_Sec_Part_2_Par}>
                  {/* Names Text Input */}
                  {/* Name 1 */}
                  <View style={[styles.New_Sec_Part_2_1, { marginBottom: 22, }]}>
                    <Text style={styles.New_Sec_Part_2_1_Part_1}><FontAwesome5 name="user-tie" size={20} color="black" /></Text>
                    <TextInput
                      style={styles.New_Sec_Part_2_1_Part_2}
                      placeholder=" Enter Your First Name "
                      onChangeText={(firstName) => setFirstName(firstName)}
                      autoCorrect={false}
                    />
                  </View>
                  {/* Name 2 */}
                  <View style={[styles.New_Sec_Part_2_1, { marginBottom: 22, }]}>
                    <Text style={styles.New_Sec_Part_2_1_Part_1}><FontAwesome5 name="user-tie" size={20} color="black" /></Text>
                    <TextInput
                      style={styles.New_Sec_Part_2_1_Part_2}
                      placeholder=" Enter Your Last Name "
                      onChangeText={(lastName) => setLastName(lastName)}
                      autoCorrect={false}
                    />
                  </View>
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
                </View>
                {/* Login Button */}
                <TouchableOpacity
                  onPress={() => registerUser(email, password, firstName, lastName)}
                  style={[styles.Login_Button]}
                >
                  <Text
                    style={styles.Login_Button_Text}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
                {/* Register Button */}
                <View style={styles.Register_Parent}>
                  {/* 1 */}
                  <Text style={styles.Register_Button_1}>Already Have Account ?</Text>
                  {/* 2 */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    style={styles.Register_Button_2}
                  >
                    <Text style={styles.Register_Button_2_Text}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* ---------------------- */}
        {/* --  New Logic Code  -- */}
      </ScrollView>
    </View>
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
    paddingVertical: 0,
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
    paddingTop: 5,
    paddingBottom: 0,
    // backgroundColor: "yellow",
  },
  Sub_New_Sec_Part_2_Par: {
    borderWidth: 0,
    // backgroundColor: "yellow",
    paddingTop: 20,
    paddingBottom: 25,
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
    marginTop: 22,
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
    paddingTop: 13,
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
