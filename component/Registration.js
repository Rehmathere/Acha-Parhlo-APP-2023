import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { firebase } from "./firestore";

export default function Registration() {
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
      <Text style={styles.fir}>Registered Here</Text>
      {/* TextInput 1 */}
      <TextInput
        style={styles.sec}
        placeholder=" Enter First Name "
        onChangeText={(firstName) => setFirstName(firstName)}
        autoCorrect={false}
      />
      {/* TextInput 2 */}
      <TextInput
        style={styles.sec}
        placeholder=" Enter Last Name "
        onChangeText={(lastName) => setLastName(lastName)}
        autoCorrect={false}
      />
      {/* TextInput 3 */}
      <TextInput
        style={styles.sec}
        placeholder=" Enter Email "
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />
      {/* TextInput 4 */}
      <TextInput
        style={styles.sec}
        placeholder=" Enter Password "
        onChangeText={(password) => setPassword(password)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      {/* Button 1 */}
      <TouchableOpacity
        onPress={() => registerUser(email,password,firstName,lastName)}
        style={[styles.but, styles.but_1]}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
            color: "white",
          }}
        >
          REGISTER
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
    fontSize: 40,
    marginTop: 3,
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "red",
    textShadowRadius: 15,
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
  but_1:{
    borderColor: "orange",
    backgroundColor: "orange",
    borderWidth: 1,
  },
});
