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
  // Change Password
  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert(" Password Reset Email Sent ");
      })
      .catch((error) => {
        alert(error);
      });
  };

  // Main Body
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#EB2F06"} />
      {/* Main Body */}
      <Text style={styles.fir}>Login</Text>
      {/* Text 1 */}
      <Text style={styles.f_txt}>Email</Text>
      {/* TextInput 1 */}
      <TextInput
        style={[styles.sec,{marginBottom: 17}]}
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
          onPress={() => {forgetPassword()}}
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
            fontFamily:"Heebo",
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
            fontFamily:"Heebo",
            fontSize: 14,
            letterSpacing: 0.7,
            textAlign: "center",
            color: "white",
          }}
        >
          Don't Have An Account ? Register Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    paddingHorizontal: 15,
  },
  fir: {
    // borderColor: "black",
    // borderWidth: 1,
    color: "#c23616",
    fontSize: 40,
    marginTop: 35,
    marginBottom: 15,
    letterSpacing: 1.5,
    fontFamily:"HeeboExtra",
    paddingHorizontal: 14.8,
  },
  f_txt:{
    // borderWidth: 1,
    paddingHorizontal: 14.8,
    fontFamily:"Heebo",
    fontSize: 19,
  },
  sec: {
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    fontSize: 16,
    marginTop: 5,
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontFamily:"Kanit",
    letterSpacing: 0.5,
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
    fontSize: 13,
    textAlign:"center",
    letterSpacing: 1,
    fontFamily:"Kanit",
  },
});
