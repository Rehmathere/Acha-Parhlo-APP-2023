import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
// Import Extra
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firestore";
import MyHeader from "./MyHeader";


export default function Login() {
  // Navigation Variable
  const navigation = useNavigation();
  // useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Function
  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };
  // Main Body
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#EB2F06"} />
      <View style={styles.Sec_Parent_E}>
        <Text style={styles.fir_E}>Welcome</Text>
        <Text style={styles.sec_E}>Sign in To Continue</Text>
      </View>
      {/* Main Body */}
      <View style={styles.Sub_Sec_Parent}>
        <Text style={styles.fir}>Login</Text>
        {/* Text 1 */}
        <Text style={styles.f_txt}>Email</Text>
        {/* TextInput 1 */}
        <TextInput
          style={[styles.sec, { marginBottom: 17 }]}
          placeholder=" Enter Your Email "
          onChangeText={(email) => setEmail(email)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {/* Text 2 */}
        <Text style={styles.f_txt}>Password</Text>
        {/* TextInput 1 */}
        <TextInput
          style={styles.sec}
          placeholder=" Enter Your Password "
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        {/* Change Password */}
        <View style={styles.passView}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgetPass")}
            style={styles.pass}
          >
            <Text style={styles.passTxt}>Forget Password</Text>
          </TouchableOpacity>
        </View>
        {/* Button 1 */}
        <TouchableOpacity
          onPress={() => loginUser(email, password)}
          style={[styles.but, styles.but_1]}
        >
          <Text
            style={{
              fontFamily: "Heebo",
              fontSize: 16,
              textAlign: "center",
              color: "white",
              letterSpacing: 3,
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        {/* Button 2 */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Registration")}
          style={[styles.but, styles.but_2]}
        >
          <Text
            style={{
              fontFamily: "Heebo",
              fontSize: 13,
              letterSpacing: 0.7,
              textAlign: "center",
              color: "white",
            }}
          >
            Don't Have An Account ? Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Sub_Sec_Parent:{
    paddingHorizontal: 25,
  },
  fir: {
    // borderColor: "black",
    // borderWidth: 1,
    color: "#c23616",
    fontSize: 42,
    marginTop: 35,
    marginBottom: 15,
    letterSpacing: 1.5,
    fontFamily: "HeeboExtra",
    paddingHorizontal: 3,
  },
  f_txt: {
    // borderWidth: 1,
    paddingHorizontal: 5,
    fontFamily: "Heebo",
    fontSize: 14,
    letterSpacing: 1,
  },
  sec: {
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 0.5,
    color: "black",
    fontSize: 15,
    marginTop: 5,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontFamily: "Kanit",
    letterSpacing: 1.5,
  },
  but: {
    color: "white",
    fontSize: 18,
    marginTop: 15,
    borderRadius: 50,
    marginBottom: 9,
    paddingHorizontal: 20,
    paddingVertical: 9,
    fontWeight: "bold",
  },
  but_1: {
    borderColor: "#0652DD",
    backgroundColor: "#0652DD",
    borderWidth: 1,
  },
  but_2: {
    borderColor: "#eb2f06",
    backgroundColor: "#eb2f06",
    borderWidth: 1,
  },
  passView: {
    borderColor: "transparent",
    borderWidth: 1,
    paddingVertical: 1,
    alignItems: "flex-end",
  },
  pass: {
    borderRadius: 20,
    backgroundColor: "black",
    width: "43%",
    paddingVertical: 2,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: "black",
  },
  passTxt: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    letterSpacing: 1.5,
    fontFamily: "Kanit",
  },
  fir_E: {
    // borderColor: "white",
    // borderWidth: 1,
    color: "white",
    fontSize: 45,
    marginTop: 20,
    marginBottom: 0,
    marginHorizontal: 49.5,
    fontFamily: "HeeboExtra",
    textShadowColor: "black",
    textShadowRadius: 15,
    letterSpacing: 2.6,
    textAlign: "center",
  },
  sec_E: {
    // borderColor: "white",
    // borderWidth: 1,
    color: "#DAFE00",
    fontSize: 21.1,
    marginTop: 3,
    marginBottom: 30,
    marginHorizontal: 49.5,
    fontFamily: "Heebo",
    textAlign: "center",
    textShadowColor: "black",
    textShadowRadius: 15,
    letterSpacing: 1,
  },
  Sec_Parent_E: {
    height: 155,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    backgroundColor: "#EB2F06",
    shadowColor: "red",
    elevation: 25,
  },
});
