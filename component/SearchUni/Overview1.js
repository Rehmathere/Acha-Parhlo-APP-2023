import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Overview1() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Overview</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"lightyellow",
        justifyContent:"center",
        alignItems:"center"
    },
    heading:{
        fontSize: 50,
        fontWeight:"bold",
        // borderWidth: 1,
        textAlign:"center",
    },
})
