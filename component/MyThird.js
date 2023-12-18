import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function MyThird() {
  const [button1Color, setButton1Color] = useState('lightgrey');
  const [button2Color, setButton2Color] = useState('lightgrey');
  const [button3Color, setButton3Color] = useState('lightgrey');
  const [button4Color, setButton4Color] = useState('lightgrey');
  const [button5Color, setButton5Color] = useState('lightgrey');
  // Functions
  // 1
  const handleButton1Click = () => {
    setButton1Color('green');
  };
  // 2
  const handleButton2Click = () => {
    // Button 2
    setButton2Color('green');
    // Button 1 
    setButton1Color('lightgreen');
  };
  // 3
  const handleButton3Click = () => {
    // Button 3
    setButton3Color('green');
    // Button 1 
    setButton1Color('lightgreen');
    // Button 2
    setButton2Color('lightgreen');
  };
  // 4
  const handleButton4Click = () => {
    // Button 4
    setButton4Color('green');
    // Button 1 
    setButton1Color('lightgreen');
    // Button 2
    setButton2Color('lightgreen');
    // Button 3
    setButton3Color('lightgreen');
  };
  // 5
  const handleButton5Click = () => {
    // Button 5
    setButton5Color('green');
    // Button 1 
    setButton1Color('lightgreen');
    // Button 2
    setButton2Color('lightgreen');
    // Button 3
    setButton3Color('lightgreen');
    // Button 4
    setButton4Color('lightgreen');
  };
  // Main Body
  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar backgroundColor={"green"} />
      <Text style={styles.fir}> Tracking part </Text>
      {/* Button 1 */}
      <TouchableOpacity style={[styles.Button_TO, { backgroundColor: button1Color }]} onPress={handleButton1Click}>
        <Text style={styles.Button_Text}>1</Text>
      </TouchableOpacity>
      {/* Button 2 */}
      <TouchableOpacity style={[styles.Button_TO, { backgroundColor: button2Color }]} onPress={handleButton2Click}>
        <Text style={styles.Button_Text}>2</Text>
      </TouchableOpacity>
      {/* Button 3 */}
      <TouchableOpacity style={[styles.Button_TO, { backgroundColor: button3Color }]} onPress={handleButton3Click}>
        <Text style={styles.Button_Text}>3</Text>
      </TouchableOpacity>
      {/* Button 4 */}
      <TouchableOpacity style={[styles.Button_TO, { backgroundColor: button4Color }]} onPress={handleButton4Click}>
        <Text style={styles.Button_Text}>4</Text>
      </TouchableOpacity>
      {/* Button 4 */}
      <TouchableOpacity style={[styles.Button_TO, { backgroundColor: button5Color }]} onPress={handleButton5Click}>
        <Text style={styles.Button_Text}>5</Text>
      </TouchableOpacity>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fir: {
    borderWidth: 1,
    textAlign: 'center',
    padding: 5,
    fontSize: 30,
    marginVertical: 10,
  },
  Button_TO: {
    borderWidth: 4,
    borderColor: '#EAE0DE',
    width: '20%',
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  Button_Text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
