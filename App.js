import React from "react";
import { View, StyleSheet } from 'react-native'
import Parent_Appoint from "./component/Parent_Appoint";
import Parent_Splash from "./component/Parent_Splash";
import Parent_Authenticate from "./component/Parent_Authenticate";
import Parent_Search from "./component/Parent_Search";
import Parent_Drawer from "./component/Parent_Drawer";
import MySecond from "./component/MySecond";
import WishList from "./component/DrawerOption/Wishlist/WishList";

export default function App() {
  // Main Body
  return (
    <View style={styles.container}>
    {/* Pre 0 - Splash */}
    {/* <Parent_Splash /> */}
    {/* 0 - Authenticate */}
    {/* <Parent_Authenticate /> */}
    {/* 1 - Apointment */}
    {/* <Parent_Appoint /> */}
    {/* 2 - Search Uni */}
    {/* <Parent_Search /> */}
    {/* 3 - Parent_Drawer */}
    <Parent_Drawer />
    {/* - Extra - */}
    {/* <WishList /> */}
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
