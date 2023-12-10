import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function Screen0({ navigation }) {
    // 1 - useEffect
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Screen1');
        }, 5000);
    }, []);
    // Main Body
    return (
        <View style={styles.container}>
            <Image source={require('../Pics/acha.png')} style={styles.logo} />
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    logo: {
        width: 330,
        height: 330,
    },
});