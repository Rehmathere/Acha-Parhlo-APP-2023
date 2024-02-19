import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { firebase } from "../firestore";

export default function Registration({ navigation }) {
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
      <StatusBar backgroundColor={"#EB2F06"} />
      {/* Main Body */}
      <Text style={styles.fir}>Register</Text>
      {/* Text 1 */}
      <Text style={styles.f_txt}>First Name</Text>
      {/* TextInput 1 */}
      <TextInput
        style={styles.sec}
        placeholder=" Enter First Name "
        onChangeText={(firstName) => setFirstName(firstName)}
        autoCorrect={false}
      />
      {/* Text 2 */}
      <Text style={styles.f_txt}>Last Name</Text>
      {/* TextInput 2 */}
      <TextInput
        style={styles.sec}
        placeholder=" Enter Last Name "
        onChangeText={(lastName) => setLastName(lastName)}
        autoCorrect={false}
      />
      {/* Text 3 */}
      <Text style={styles.f_txt}>Email</Text>
      {/* TextInput 3 */}
      <TextInput
        style={styles.sec}
        placeholder=" Enter Email "
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
      />
      {/* Text 4 */}
      <Text style={styles.f_txt}>Password</Text>
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
      {/* Button 2 */}
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
      </TouchableOpacity>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "white",
  },
  fir: {
    // borderColor: "black",
    // borderWidth: 1,
    color: "#c23616",
    fontSize: 40,
    marginTop: 30,
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
    paddingVertical: 3,
    fontFamily: "Kanit",
    letterSpacing: 1.5,
  },
  but: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
    borderRadius: 50,
    marginBottom: 8,
    paddingHorizontal: 20,
    paddingVertical: 7,
    fontWeight: "bold",
  },
  Ebut: {
    color: "white",
    fontSize: 17,
    marginTop: 5,
    borderRadius: 50,
    marginBottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 7,
    fontWeight: "bold",
  },
  but_1: {
    borderColor: "#eb2f06",
    backgroundColor: "#eb2f06",
    borderWidth: 1,
  },
  but_2: {
    borderColor: "#365D04",
    backgroundColor: "#365D04",
    borderWidth: 1,
  },
});
