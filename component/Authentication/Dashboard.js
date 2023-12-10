import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { firebase } from "../firestore";

export default function Dashboard() {
  // useState
  const [name, setName] = useState("");
  // Change Password
  const changePassword = () => {
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(() => {
      alert(" Password Reset Email Sent ")
    }).catch((error) => {
      alert(error)
    })
  }
  // useEffect
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const snapshot = await firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .get();
  
        if (snapshot.exists) {
          const userData = snapshot.data();
          setName(userData); // Update state with the user data
        } else {
          console.log("User Does Not Exist");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);  
  // Main Body
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.fir}>Hello, {name.firstName}</Text>
      {/* Button 1 */}
      <TouchableOpacity
        onPress={() => {firebase.auth().signOut()}}
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
          LOGOUT
        </Text>
      </TouchableOpacity>
      {/* Button 2 */}
      <TouchableOpacity
        onPress={() => {changePassword()}}
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
          Change Password
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    backgroundColor: "white",
    color: "black",
    fontSize: 40,
    marginTop: 3,
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowRadius: 15,
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
    borderColor: "red",
    backgroundColor: "red",
    borderWidth: 1,
  },
});
