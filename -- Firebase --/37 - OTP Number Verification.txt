import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app"; // Updated import
import { auth } from "../firestore"; // Updated import

const firebaseConfig = {
  apiKey: "AIzaSyCpCthp0DyhjLpm5zbI5G1C_bCkY6Hqde8",
  authDomain: "awpro-f81b1.firebaseapp.com",
  databaseURL:
    "https://awpro-f81b1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "awpro-f81b1",
  storageBucket: "awpro-f81b1.appspot.com",
  messagingSenderId: "313818198041",
  appId: "1:313818198041:web:b9e32aa1fc2bcc2c193a88",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function Z_Test_Extra_Z_4() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId)
      .catch((error) => {
        console.error("Phone verification error:", error);
        Alert.alert(
          "Error",
          "Failed to send verification code. Please try again."
        );
      });
  };

  const verifyCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        Alert.alert("Success", "Verification successful!");
        // If you want to take further actions after successful verification
        // without automatically signing up the user, you can do it here.
        // For example, you can navigate to another screen or perform any
        // other necessary operations.
      })
      .catch((error) => {
        console.error("Verification error:", error);
        Alert.alert("Error", "Invalid verification code. Please try again.");
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"red"} />
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={styles.fir}>Verify Mobile Number</Text>
      <TextInput
        style={styles.sec}
        placeholder="Enter Your Mobile Number - ( +92 ) "
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        autoCompleteType="tel"
      />
      <Button
        color={"green"}
        title="Send Verification Code"
        onPress={sendVerification}
      />
      <TextInput
        style={styles.sec}
        placeholder="Enter Verification Code"
        onChangeText={setVerificationCode}
        keyboardType="number-pad"
        autoCompleteType="off"
      />
      <Button color={"blue"} title="Verify Code" onPress={verifyCode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    paddingHorizontal: 15,
  },
  fir: {
    borderColor: "yellow",
    borderWidth: 1,
    color: "black",
    fontSize: 30,
    marginTop: 3,
    marginBottom: 50,
    backgroundColor: "yellow",
    textAlign: "center",
    fontWeight: "bold",
  },
  sec: {
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 1,
    color: "black",
    fontSize: 15,
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontWeight: "bold",
  },
});
