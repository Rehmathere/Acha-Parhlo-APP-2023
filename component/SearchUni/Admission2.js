import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Admission2() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Admisssion Details</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"lightblue",
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
