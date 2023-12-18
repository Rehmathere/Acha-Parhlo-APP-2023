import React from 'react'
import { View, StyleSheet } from 'react-native'
import MainFaqs from './Faqs/MainFaqs'

export default function Parent_Faqs() {
    return (
        <View style={styles.container}>
            <MainFaqs />
        </View>
    )
}


// CSS
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})  