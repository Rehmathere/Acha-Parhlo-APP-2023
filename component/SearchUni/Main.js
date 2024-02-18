import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Button, TextInput, FlatList, Image, TouchableOpacity, StatusBar, List, ScrollView } from "react-native";
// Fonts Header File
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firestore";
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Main() {
  // ---------- Backend Part Logic ----------
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const listRef = useRef();
  const [ind, setInd] = useState(0);
  const [oldData, setOldData] = useState([]);
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("1 - Add University")
      .onSnapshot((querySnapshot) => {
        const newNotes = [];
        querySnapshot.forEach((doc) => {
          const { name1, name2, name3, name4, name5, MyImage } = doc.data();
          newNotes.push({ name1, name2, name3, name4, name5, MyImage });
        });
        setNotes(newNotes);
        setOldData(newNotes);
        setData(newNotes);
      });
  }, []);
  // ---------- Backend Part Logic ----------
  // Expo Font Logic
  const [fontsLoaded, setFontsLoaded] = useState(false);
  let [loaded] = useFonts({
    Archivo: require("../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
    Kanit: require("../../assets/fonts/My_Soul/Kanit-Light.ttf"),
    Heebo: require("../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
    HeeboExtra: require("../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
    KanitBold: require("../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
    KanitBlack: require("../../assets/fonts/My_Soul/Kanit-Black.ttf"),
  });
  // It Will Load Font
  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
    }
  }, [loaded]);
  // It Tells If Font Is Loaded Or If Not Loaded Then Nothing Will Show,
  if (!fontsLoaded) {
    return null;
  }
  // Main Body  
  return (
    <ScrollView style={{ flex: 1, paddingBottom: 0, backgroundColor: "white", }}>
      <StatusBar backgroundColor={"#EB2F06"} />
      {/* Heading */}
      <View style={styles.Ext_AL_1}>
        {/* Image */}
        <View style={styles.Ext_AL_ParentImg}>
          <Image source={require("../Pics/AL_Courses_1.png")} style={styles.Ext_AL_Img} />
        </View>
        {/* Heading */}
        <Text style={styles.Ext_AL_Txt}>Explore Courses</Text>
        <Text style={styles.Ext_AL_Txt_1}>Students can explore various academic courses and can apply to different universities.</Text>
      </View>
      {/* Data From Firebase */}
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.box}
          onPress={() => navigation.navigate("SubMainHome", {
            item: {
              MyImage: item.MyImage,
              name1: item.name1,
              name2: item.name2,
              name3: item.name3,
              name4: item.name4,
              name5: item.name5,
            },
          })}
        >
          <View style={styles.box_2}>
            <View style={styles.in_box}>
              <Image source={{ uri: item.MyImage }} style={styles.img_fir} />
              <Text style={styles.sec}>{item.name1.substring(0, 15)}</Text>
            </View>
            <View style={styles.third}>
              <Text style={styles.third_1}><FontAwesome5 name="book" size={12.5} color="#EB2F06" />  Courses</Text>
              <Text style={styles.third_2}>{item.name3.substring(0, 20)}</Text>
            </View>
            <View style={styles.forth}>
              <View style={styles.forth_1}>
                <Text style={styles.for_1}><FontAwesome5 name="money-bill" size={12.5} color="#EB2F06" />  Semester Fee</Text>
                <Text style={styles.for_2}>{item.name4.substring(0, 15)}</Text>
              </View>
              <View style={styles.forth_1}>
                <Text style={styles.for_1}><AntDesign name="clockcircle" size={12.5} color="#EB2F06" />  Duration</Text>
                <Text style={styles.for_22}>{item.name5}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

// CSS
const styles = StyleSheet.create({
  box: {
    width: '85%',
    borderRadius: 15,
    // borderWidth: 1,
    borderColor: "black",
    alignSelf: 'center',
    marginTop: 16,
    // marginBottom: 4,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 15,
    // backgroundColor: "#EB2F06",
    backgroundColor: "#FCBBAC",
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
  box_2: {
    width: "100%",
    flexDirection: "column",
    paddingVertical: 7,
  },
  in_box: {
    // borderWidth: 0.1,
    width: "100%",
    height: 52,
    flexDirection: "row",
    paddingVertical: 2,
  },
  img_fir: {
    // borderWidth: 1,
    // borderColor: "black",
    width: "23%",
    height: '100%',
    marginLeft: 9,
    borderRadius: 7,
  },
  sec: {
    letterSpacing: 2,
    textAlign: "center",
    fontFamily: "KanitBold",
    width: "70%",
    marginLeft: 10,
    color: "black",
    marginTop: 11,
    // borderWidth: 1,
    //   height: 20,
    fontSize: 14,
    textTransform: "uppercase",
    paddingHorizontal: 2,
  },
  third: {
    marginTop: 10.5,
    // borderWidth: 1,
    width: "100%",
    // height: 48,
    flexDirection: "column",
  },
  third_1: {
    letterSpacing: 0.6,
    textAlign: "left",
    fontFamily: "Kanit",
    // color: "#636e72",
    marginHorizontal: 10,
    fontSize: 13.5,
    paddingVertical: 3.2,
    paddingHorizontal: 7.5,
    backgroundColor: "#dff9fb",
    borderRadius: 7,
    width: "29.5%",
    marginTop: 5,
  },
  third_2: {
    letterSpacing: 1.6,
    textAlign: "left",
    fontFamily: "Heebo",
    marginHorizontal: 12,
    color: "black",
    marginTop: 2,
    // borderWidth: 1,
    fontSize: 12.5,
    paddingVertical: 4.5,
    paddingHorizontal: 2,
    marginBottom: 2,
  },
  forth: {
    // borderWidth: 1,
    marginTop: 5,
    paddingVertical: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  forth_1: {
    // borderWidth: 0.5,
    paddingVertical: 1,
  },
  for_1: {
    // color: "#636e72",
    fontSize: 13.5,
    letterSpacing: 0.6,
    fontFamily: "Kanit",
    paddingVertical: 3.2,
    paddingHorizontal: 7.5,
    backgroundColor: "#dff9fb",
    borderRadius: 7,
  },
  for_2: {
    // color: "#009432",
    letterSpacing: 1.5,
    fontSize: 12.5,
    fontFamily: "Heebo",
    marginTop: 6,
    paddingHorizontal: 4.5,
  },
  for_22: {
    // color: "#e84118",
    letterSpacing: 1.5,
    fontSize: 12.5,
    fontFamily: "Heebo",
    marginTop: 6,
    paddingHorizontal: 4,
  },
  fifth: {
    // borderWidth: 0.5,
    height: 35,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  fif_1: {
    // borderWidth: 1,
    color: "#636e72",
    fontSize: 15,
    paddingHorizontal: 3,
    letterSpacing: 0.3,
    fontFamily: "Kanit"
  },
  fif_2: {
    paddingHorizontal: 6,
    // borderWidth: 0.2,
    color: "#1B1464",
    fontSize: 17,
    fontFamily: "Heebo",
  },
  fif_img: {
    // borderWidth: 0.1,
    // borderColor: "black",
    width: 18,
    height: 18,
  },
  modalButton: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  modalButtonText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Kanit',
  },
  Ext_Fir_Txt: {
    // borderWidth: 0.5,
    fontFamily: "KanitBold",
    fontSize: 25,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
    color: "#EB2F06",
    letterSpacing: 1.3,
  },
  E_Parent_Img: {
    borderWidth: 0.5,
    paddingVertical: 20,
  },
  Ext_AL_1: {
    // borderWidth: 0.5,
    paddingVertical: 15,
  },
  Ext_AL_ParentImg: {
    // borderWidth: 0.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 25,
  },
  Ext_AL_Img: {
    // borderWidth: 0.1,
    // borderColor: "black",
    width: 190,
    height: 160,
  },
  Ext_AL_Txt: {
    // borderWidth: 0.5,
    textAlign: "center",
    fontFamily: "HeeboExtra",
    fontSize: 22,
    letterSpacing: 1.3,
  },
  Ext_AL_Txt_1: {
    // borderWidth: 0.5,
    textAlign: "center",
    fontFamily: "Kanit",
    fontSize: 12,
    letterSpacing: 1,
    paddingHorizontal: 30,
    color: "grey",
    textTransform: "capitalize",
    letterSpacing: 1,
    paddingVertical: 6,
  }
})













