import React from "react";
import { View, StyleSheet } from 'react-native'
import Parent_Appoint from "./component/Parent_Appoint";
import Parent_Splash from "./component/Parent_Splash";
import Parent_Authenticate from "./component/Parent_Authenticate";
import Parent_Search from "./component/Parent_Search";
import Parent_Drawer from "./component/Parent_Drawer";
import ApplicationStatus from "./component/Application/ApplicationStatus";
import Parent_Application from "./component/Parent_Application";
import Parent_Chat from "./component/Parent_Chat";
import Z_Test_Parent_A from "./component/Z_Test_Demo/Z_Test_Parent_A";
import Z_Test_Extra_Parent from "./component/Z_Test_Extra/Z_Test_Extra_Parent";

export default function App() {
  // Main Body
  return (
    <View style={styles.container}>
    {/* Pre 0 - Splash --- ( Completed ) */}
    {/* <Parent_Splash /> */}
    {/* 0 - Authenticate --- ( Completed ) */}
    {/* <Parent_Authenticate /> */}
    {/* 1 - Apointment --- ( Completed ) */}
    {/* <Parent_Appoint /> */}
    {/* 2 - Search Uni --- ( Completed ) */}
    {/* <Parent_Search /> */}
    {/* 3 - Parent_Drawer */}
    <Parent_Drawer />
    {/* 4 - Parent_Application --- ( Completed ) */}
    {/* <Parent_Application /> */}
    {/* 5 - Parent_Chat */}
    {/* <Parent_Chat /> */}
    {/* -------- Extra -------- */}
    {/* <MySecond /> */}
    {/* - Demo Practice Backend - */}
    {/* <Z_Test_Parent_A /> */}
    {/* - Demo Practice Backend - ( 2 ) */}
    {/* <Z_Test_Extra_Parent /> */}
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
