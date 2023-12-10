import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
// Fonts Header File
import { useFonts } from "expo-font";


export default function WishList() {
    const students = [
        // { id: '1', name: 'Alice' },
        // { id: '2', name: 'Bob' },
        // { id: '3', name: 'Charlie' },
        // { id: '4', name: 'David' },
        // { id: '5', name: 'Eva' },
    ];
    // If Data Is Zero Then It Return s No Text Here Otherwise Show The Data
    const renderEmpty = () => {
        return (
            <>
                {/* // Empty Pic */}
                <View style={styles.ParentEmpty}>
                    <Image source={ require('../../Pics/empty.png') } style={styles.EmptyPic} />
                </View>
                {/* // No Text */}
                <Text style={styles.noText}>No Wish List Here</Text>
            </>
        );
    };
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    // Expo Font Logic
    let [loaded] = useFonts({
        Archivo: require("../../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
        Kanit: require("../../../assets/fonts/My_Soul/Kanit-Light.ttf"),
        Heebo: require("../../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
        HeeboExtra: require("../../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
        KanitBold: require("../../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
        KanitBlack: require("../../../assets/fonts/My_Soul/Kanit-Black.ttf"),
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
        <View style={styles.container}>
            {students.length === 0 ? (
                renderEmpty()
            ) : (
                <FlatList
                    data={students}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <View style={styles.sec}>
                        <Text style={styles.fir}>{item.name}</Text>
                    </View>}
                />
            )}
        </View>
    );
};

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    sec: {
        backgroundColor: 'yellow', marginTop: 20,
    },
    fir: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 20,
        borderWidth: 1,
        textAlign: 'center',
    },
    noText: {
        fontSize: 28,
        color: 'red',
        letterSpacing: 1,
        // borderWidth: 1,
        color: "grey",
        textAlign: "center",
        marginTop: 10,
        fontFamily: "Kanit",
    },
    ParentEmpty:{
        // borderWidth: 0.5,
        paddingVertical: 10,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 200,
    },
    EmptyPic:{
        // borderColor:"black",
        // borderWidth: 0.5,
        paddingVertical: 10,
    },
});
