import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
// Import Extra
import { useNavigation } from "@react-navigation/native";
import { firebase } from "./firestore";

export default function Login() {
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
      <StatusBar backgroundColor={"red"} />
      <Text style={styles.fir}>Login Form</Text>
      {/* TextInput 1 */}
      <TextInput
        style={styles.sec}
        placeholder=" Enter Email "
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/* TextInput 1 */}
      <TextInput
        style={styles.sec}
        placeholder=" Enter Password "
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
            fontWeight: "bold",
            fontSize: 15,
            textAlign: "center",
            color: "white",
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
            fontWeight: "bold",
            fontSize: 15,
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
    backgroundColor: "white",
    paddingHorizontal: 15,
  },
  fir: {
    borderColor: "white",
    borderWidth: 1,
    color: "black",
    fontSize: 30,
    marginTop: 3,
    marginBottom: 50,
    backgroundColor: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  sec: {
    borderColor: "black",
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  but: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  but_1: {
    borderColor: "blue",
    backgroundColor: "blue",
    borderWidth: 1,
  },
  but_2: {
    borderColor: "red",
    backgroundColor: "red",
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
    paddingVertical: 1,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "black",
  },
  passTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
