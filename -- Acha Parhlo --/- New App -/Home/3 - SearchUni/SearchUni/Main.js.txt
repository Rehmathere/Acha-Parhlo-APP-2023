import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, Button, TextInput, FlatList, Image, TouchableOpacity, Modal, StatusBar } from "react-native";
// Fonts Header File
import { useFonts } from "expo-font";

export default function Main() {
  // fetch API 
  // 0 - useState
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const searchRef = useRef();
  const listRef = useRef();
  const [ind, setInd] = useState(0);
  const [oldData, setOldData] = useState([]);
  // 1 - Function
  const Fetch_API = async () => {
    const url = "https://fakestoreapi.com/products"
    let result = await fetch(url);
    result = await result.json();
    setData(result)
    // console.warn(result)
  }
  // 2 - useEffect
  useEffect(() => {
    Fetch_API();
  }, [])
  // On Search Function 
  const onSearch = text => {
    if (text == '') {
      setData(oldData);
    } else {
      let tempList = data.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempList);
    }
  };
  // 1 - useState
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // Expo Font Logic
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
    <View style={{ flex: 1 }}>
      {/* StatusBar */}
      <StatusBar backgroundColor={"black"} />
      {/* Start */}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          height: 70,
          marginTop: 16,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '80%',
            height: 50,
            borderRadius: 10,
            borderWidth: 0.2,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 15,
          }}>
          <Image
            source={require('../Pics/search.png')}
            style={{ width: 24, height: 24, marginLeft: 15, opacity: 0.5 }}
          />
          <TextInput
            ref={searchRef}
            placeholder="search item here..."
            style={{ width: '76%', height: 50, paddingHorizontal: 10, fontFamily:"Kanit" }}
            value={search}
            onChangeText={txt => {
              onSearch(txt);
              setSearch(txt);
            }}
          />
          {search == '' ? null : (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => {
                searchRef.current.clear();
                onSearch('');
                setSearch('');
              }}>
              <Image
                source={require('../Pics/close.png')}
                style={{ width: 16, height: 16, opacity: 0.5 }}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={{
            marginRight: 15,
          }}
          onPress={() => {
            setVisible(true);
          }}>
          <Image
            source={require('../Pics/filter.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      {/* Flatlist Starts */}
      <FlatList
        data={data}
        ref={listRef}
        showsVerticalScrollIndicator={false}
        initialScrollIndex={ind}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.box}>
              {/* Box Border */}
              <View style={styles.box_2}>
                {/* Row 1 */}
                <View style={styles.in_box}>
                  {/* 1 - Image */}
                  <Image
                    source={{ uri: item.image }}
                    style={styles.img_fir}
                  />
                  {/* 2 - Title */}
                  <Text
                    style={styles.sec}>
                    {item.title.substring(0, 20)}
                  </Text>
                </View>
                {/* Row 2 */}
                <View style={styles.third}>
                  {/* 1 - Text */}
                  <Text style={styles.third_1}>Course Title</Text>
                  {/* 2 - Title */}
                  <Text style={styles.third_2}>Applied Science</Text>
                </View>
                {/* Row 3 */}
                <View style={styles.forth}>
                  {/* 1 */}
                  <View style={styles.forth_1}>
                    <Text style={styles.for_1}>Fee</Text>
                    <Text style={styles.for_2}>{item.price} $</Text>
                  </View>
                  {/* 2 */}
                  <View style={styles.forth_1}>
                    <Text style={styles.for_1}>Duration</Text>
                    <Text style={styles.for_22}>{item.id} Years</Text>
                  </View>
                </View>
                {/* Row 4 */}
                <View style={styles.fifth}>
                  <Text style={styles.fif_1}>Rating</Text>
                  <Text style={styles.fif_2}>{item.rating.rate}</Text>
                  <Image source={require('../Pics/star.png')} style={styles.fif_img} />
                </View>
              </View>
            </View>
          );
        }}
      />
      {/* Data Sorting */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.70)',
          }}>
          <View
            style={{
              width: '80%',
              height: 200,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            {/* Button */}
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                borderColor: "lightgrey",
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                let tempList = data.sort((a, b) =>
                  a.title > b.title ? 0 : 0,
                );
                setData(tempList);
                listRef.current.scrollToIndex({ animated: true, index: 0 });
                setVisible(false);
              }}>
              <Text style={{ fontSize: 18, color: '#000', fontFamily:"Kanit" }}> Sort By Name</Text>
            </TouchableOpacity>
            {/* Button */}
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                borderColor: "lightgrey",
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setData(data.sort((a, b) => a.price - b.price));
                listRef.current.scrollToIndex({ animated: true, index: 0 });
                setVisible(false);
              }}>
              <Text style={{ fontSize: 18, color: '#000', fontFamily:"Kanit" }}>
                Low to High Price
              </Text>
            </TouchableOpacity>
            {/* Button */}
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderColor: "lightgrey",
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setData(data.sort((a, b) => b.price - a.price));
                listRef.current.scrollToIndex({ animated: true, index: 0 });
                setVisible(false);
              }}>
              <Text style={{ fontSize: 18, color: '#000', fontFamily:"Kanit" }}>
                Hight to Low Price
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                setData(data.sort((a, b) => b.rating.rate - a.rating.rate));
                listRef.current.scrollToIndex({ animated: true, index: 0 });
                setVisible(false);
              }}>
              <Text style={{ fontSize: 18, color: '#000', fontFamily:"Kanit" }}> Sort By Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  box: {
    width: '90%',
    borderRadius: 10,
    // borderWidth: 1,
    borderColor: "black",
    alignSelf: 'center',
    marginTop: 20,
    // marginBottom: 4,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
    backgroundColor: "#f7f1e3"
  },
  box_2: {
    width: "100%",
    height: 200,
    flexDirection: "column",
    paddingVertical: 10,
  },
  in_box: {
    // borderWidth: 0.1,
    width: "100%",
    height: 50,
    flexDirection: "row",
  },
  img_fir: {
    // borderWidth: 1,
    // borderColor: "black",
    width: "20%",
    height: '100%',
    marginLeft: 9,
    borderRadius: 10,
  },
  sec: {
    letterSpacing: 0.5,
    textAlign: "center",
    fontFamily:"HeeboExtra",
    width: "70%",
    marginLeft: 10,
    color: "black",
    marginTop: 11,
    // borderWidth: 1,
    height: 20,
    fontSize: 14.5
  },
  third: {
    marginTop: 8,
    // borderWidth: 1,
    width: "100%",
    height: 48,
    flexDirection: "column",
  },
  third_1: {
    letterSpacing: 0.3,
    textAlign: "left",
    fontFamily:"Kanit",
    color: "#636e72",
    marginTop: 1,
    marginHorizontal: 14,
    // borderWidth: 1,
    height: 15,
    fontSize: 14
  },
  third_2: {
    letterSpacing: 1,
    textAlign: "left",
    fontFamily:"Heebo",
    marginHorizontal: 16,
    color: "black",
    marginTop: 3,
    // borderWidth: 1,
    height: 25,
    fontSize: 15,
  },
  forth: {
    // borderWidth: 1,
    marginTop: 2,
    paddingVertical: 1,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
  forth_1: {
    // borderWidth: 0.5,
    paddingVertical: 1,
  },
  for_1: {
    color: "#636e72",
    fontSize: 14,
    letterSpacing: 0.3,
    fontFamily:"Kanit"
  },
  for_2: {
    color: "#009432",
    fontSize: 18,
    fontFamily:"Heebo",
  },
  for_22: {
    color: "#eb2f06",
    fontSize: 18,
    fontFamily:"Heebo"
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
    fontFamily:"Kanit"
  },
  fif_2: {
    paddingHorizontal: 6,
    // borderWidth: 0.2,
    color: "#1B1464",
    fontSize: 17,
    fontFamily:"Heebo",
  },
  fif_img: {
    // borderWidth: 0.1,
    // borderColor: "black",
    width: 18,
    height: 18,
  }
})













