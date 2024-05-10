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
  Modal,
} from "react-native";
import { firebase } from "../firestore";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

export default function Registration() {
  const [showContent, setShowContent] = useState(false);
  const [showStatus_Loading, setShowStatus_Loading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordButtonText, setPasswordButtonText] = useState("");
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setPasswordButtonText("");
    } else {
      setPasswordButtonText("");
    }
  };

  const registerUser = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          firstName,
          lastName,
          email,
        });

      await firebase.auth().currentUser.sendEmailVerification();
      await firebase.auth().currentUser.reload();
      // ----- 1 - Modal For Verification Mail -----
      setShowContent(!showContent);

      const intervalId = setInterval(async () => {
        await firebase.auth().currentUser.reload();
        if (firebase.auth().currentUser.emailVerified) {
          // ----- 1 - Modal For Verification Mail -----
          setShowContent(showContent);
          clearInterval(intervalId);
          setShowStatus_Loading(true);
          setTimeout(() => {
            navigation.navigate("MyDrawer");
          }, 3000);
        }
      }, 3000);
    } catch (error) {
      alert(error.message);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={"#EB2F06"} />
        <View style={styles.E_New_Parent_Extra}>
          <View style={styles.E_New_Parent_Extra_Part_1}></View>
          <View style={styles.E_New_Parent_Extra_Part_2}></View>
        </View>
        <View style={styles.Fir_Grand_Parent}>
          <View style={styles.New_fir_Parent}>
            <View style={styles.Sub_New_fir_Parent}>
              <Image
                source={require("../Pics/logo2.png")}
                style={[styles.New_fir_Img, { tintColor: "white" }]}
              />
            </View>
          </View>
          <View style={styles.New_Sec_Parent}>
            <View style={styles.Sub_New_Sec_Parent}>
              <View style={styles.New_Sec_Part_1_Par}>
                <View style={styles.Sub_New_Sec_Part_1_Par}>
                  <Text
                    style={styles.New_Sec_Part_1_2}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Sign In
                  </Text>
                  <Text style={styles.New_Sec_Part_1_1}>Sign Up</Text>
                </View>
              </View>
              <View style={styles.New_Sec_Part_2_Par}>
                <View style={styles.Sub_New_Sec_Part_2_Par}>
                  <View style={[styles.New_Sec_Part_2_1, { marginBottom: 22 }]}>
                    <Text style={styles.New_Sec_Part_2_1_Part_1}>
                      <FontAwesome5 name="user-tie" size={20} color="black" />
                    </Text>
                    <TextInput
                      style={styles.New_Sec_Part_2_1_Part_2}
                      placeholder=" Enter Your First Name "
                      onChangeText={(firstName) => setFirstName(firstName)}
                      autoCorrect={false}
                    />
                  </View>
                  <View style={[styles.New_Sec_Part_2_1, { marginBottom: 22 }]}>
                    <Text style={styles.New_Sec_Part_2_1_Part_1}>
                      <FontAwesome5 name="user-tie" size={20} color="black" />
                    </Text>
                    <TextInput
                      style={styles.New_Sec_Part_2_1_Part_2}
                      placeholder=" Enter Your Last Name "
                      onChangeText={(lastName) => setLastName(lastName)}
                      autoCorrect={false}
                    />
                  </View>
                  <View style={styles.New_Sec_Part_2_1}>
                    <Text style={styles.New_Sec_Part_2_1_Part_1}>
                      <MaterialIcons name="email" size={20} color="black" />
                    </Text>
                    <TextInput
                      style={styles.New_Sec_Part_2_1_Part_2}
                      placeholder=" Enter Your Email "
                      onChangeText={(email) => setEmail(email)}
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="email-address"
                    />
                  </View>
                  <View style={styles.New_Sec_Part_2_2}>
                    <Text style={styles.New_Sec_Part_2_1_Part_1}>
                      <Entypo name="lock" size={20} color="black" />
                    </Text>
                    <TextInput
                      style={styles.New_Sec_Part_2_2_Part_2}
                      placeholder=" Enter Your Password "
                      onChangeText={(password) => setPassword(password)}
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry={!showPassword}
                    />
                    <View style={styles.New_Sec_Part_2_3_Part_2}>
                      <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Text style={styles.Hide_See_Pass}>
                          {passwordButtonText}{" "}
                          {showPassword ? (
                            <Ionicons
                              name="eye-off-sharp"
                              size={18}
                              color="black"
                            />
                          ) : (
                            <Ionicons name="eye" size={18} color="black" />
                          )}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => registerUser()}
                  style={[styles.Login_Button]}
                >
                  <Text style={styles.Login_Button_Text}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.Register_Parent}>
                  <Text style={styles.Register_Button_1}>
                    Already Have Account ?
                  </Text>
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
      </ScrollView>
      <Modal animationType="fade" transparent={true} visible={showContent}>
        <View style={styles.Modal_Parent}>
          <View style={styles.Modal_Child}>
            <View style={styles.sub_Modal_Child}>
              <View style={styles.ParentImg}>
                <Image
                  source={require("../Pics/Email_Check.gif")}
                  style={styles.Logout_Img}
                />
              </View>
              <Text style={styles.Modal_Txt_2}>
                Kindly Check Your Email Inbox For Verification
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        animationType="fade"
        visible={showStatus_Loading}
      >
        <View style={styles.ParentStatus}>
          <View style={styles.sub_ParentStatus}>
            <View style={styles.ParentStatusImg}>
              <Image
                source={require("../Pics/Email_Check_1_E.png")}
                style={styles.StatusImg_1}
              />
            </View>
            <Text style={styles.StatusTxt_E}>Email Verifed !</Text>
            <Text style={styles.StatusTxt}>
              Welcome ! Now You Can Use Our Services
            </Text>
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
    width: "21%",
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "77%",
  },
  sub_Modal_Child: {
    // borderWidth: 0.5,
    padding: 10,
  },
  Modal_Txt_1: {
    fontSize: 20,
    paddingBottom: 10,
    paddingHorizontal: 30,
    textAlign: "center",
    fontFamily: "HeeboExtra",
    letterSpacing: 1.5,
    textTransform: "capitalize",
  },
  Modal_Txt_2: {
    // borderWidth: 0.5,
    fontSize: 14.5,
    marginVertical: 4,
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
    paddingVertical: 30,
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
    height: 150,
  },
  StatusImg_1: {
    borderWidth: 0.5,
    borderColor: "transparent",
    borderColor: "black",
    width: 90,
    height: 80,
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
