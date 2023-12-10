import React, { useState, useEffect } from 'react';
import Collapsible from 'react-native-collapsible';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
// Fonts Header File
import { useFonts } from "expo-font";

export default function MainFaqs() {
    // Expo Font Logic
    let [loaded] = useFonts({
        Archivo: require("../../../assets/fonts/My_Soul/ArchivoBlack-Regular.ttf"),
        Kanit: require("../../../assets/fonts/My_Soul/Kanit-Light.ttf"),
        Heebo: require("../../../assets/fonts/My_Soul/Heebo-Medium.ttf"),
        HeeboExtra: require("../../../assets/fonts/My_Soul/Heebo-ExtraBold.ttf"),
        KanitBold: require("../../../assets/fonts/My_Soul/Kanit-Bold.ttf"),
        KanitBlack: require("../../../assets/fonts/My_Soul/Kanit-Black.ttf"),
    });
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        if (loaded) {
            setFontsLoaded(true);
        }
    }, [loaded]);
    // Data
    const data = [
        {
            question: 'Why Acha Parhlo ?',
            answer: 'Acha Parhlo offers a comprehensive range of services for Australia study visa aspirants. This includes guidance on visa application processes, university selection, appointment booking with consultants, and application tracking to ensure a smooth journey towards studying in Australia.',
        },
        {
            question: 'Is there a dedicated portal for consultants on the Acha Parhlo website ?',
            answer: 'Yes, Acha Parhlo provides a specialized portal for consultants. Consultants can access this portal to manage appointments, view client information, and streamline their interactions with aspiring students.',
        },
        {
            question: 'Does Acha Parhlo offer career counseling services ?',
            answer: 'Absolutely! Acha Parhlo provides comprehensive career counseling sessions to help individuals make informed decisions about their academic and professional paths.',
        },
        {
            question: 'Can I track the status of my visa application ?',
            answer: 'Yes, definitely! Acha Parhlo provides a convenient application tracking feature. Once you submitted your visa application, you can easily track its progress through our website. Simply log in to your account and access the Application Tracking section for real-time updates.',
        },
        {
            question: 'How can I book an appointment with a consultant ?',
            answer: 'Booking an appointment with our consultants is easy! Simply navigate to the Consultant Booking section on our website, choose your preferred consultant, select a convenient time slot, and follow the prompts to confirm your appointment.',
        },
        {
            question: 'What kind of support does Acha Parhlo provide during the university application process ?',
            answer: 'Acha Parhlo offers assistance throughout the university application process. We provide guidance on choosing suitable universities based on your preferences and qualifications.',
        },
        {
            question: 'Why choose Australia for higher education ?',
            answer: 'Australia is renowned for its high-quality education system, diverse cultural experiences, and a wide range of courses and degrees offered by its world-class universities. Additionally, it provides a safe and welcoming environment for international students.',
        },
        // Add more questions and answers as needed
    ];
    // 
    const [collapse, setCollapse] = useState(Array(data.length).fill(true));
    // Function
    const toggleCollapse = (index) => {
        const newCollapse = [...collapse];
        newCollapse[index] = !newCollapse[index];
        setCollapse(newCollapse);
    };
    // Fonts If Not Loaded Then It Null Otherwise Not Null
    if (!fontsLoaded) {
        return null; // Return a loader or null while fonts are loading
    }
    // Main Body
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Status Bar */}
                <StatusBar backgroundColor={"#EB2F06"} />
                <Text style={styles.fir}>Frequently Asked Question ( FAQ's )</Text>
                <Text style={styles.fir_par}>Explore Acha Parhlo's Comprehensive FAQs: Your Ultimate Guide to Navigating Australia Study Visas, University Applications, Consultant Services, Career Counseling, and More!</Text>
                {/* View For Padding Purposes */}
                <View style={styles.sub_ll}>
                    {data.map((item, index) => (
                        // Parent View
                        <View key={index}>
                            {/* Question Box */}
                            <TouchableOpacity style={styles.sec1} onPress={() => toggleCollapse(index)}>
                                <View style={styles.sec1_View}>
                                    <Text style={styles.sec1_text}>{item.question}</Text>
                                    <View style={styles.icon}>
                                        <AntDesign
                                            name={collapse[index] ? 'plus' : 'minus'}
                                            size={22}
                                            color="black"
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* Answer */}
                            <Collapsible collapsed={collapse[index]}>
                                <View style={styles.View_ans}>
                                    <Text style={styles.ans}>{item.answer}</Text>
                                </View>
                            </Collapsible>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    fir: {
        borderWidth: 1,
        borderColor:"transparent",
        color: 'black',
        borderWidth: 1,
        marginHorizontal: 19,
        marginVertical: 10,
        marginBottom: 15,
        marginTop: 40,
        textAlign: "center",
        fontSize: 22,
        letterSpacing: 1,
        fontFamily:"Heebo"
    },
    fir_par: {
        borderWidth: 1,
        borderColor:"transparent",
        color: 'black',
        borderWidth: 1,
        marginHorizontal: 33,
        marginBottom: 30,
        textAlign: "center",
        fontSize: 13,
        letterSpacing: 1,
        fontFamily:"Kanit"
    },
    sub_ll: {
        paddingTop: 10,
        paddingBottom: 80,
    },
    sec1: {
        borderWidth: 1,
        borderColor: "transparent",
        backgroundColor: "#f6e58d",
        paddingVertical: 1,
        marginHorizontal: 20,
        marginTop: 20,
        paddingHorizontal: 5,
        borderRadius: 3,
    },
    sec1_View: {
        borderWidth: 1,
        borderColor: "transparent",
        paddingVertical: 4,
        paddingHorizontal: 4,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    sec1_text: {
        fontSize: 16,
        paddingTop: 4,
        width: "85%",
        fontFamily:"Heebo",
        borderWidth: 1,
        borderColor: "transparent",
        letterSpacing: 0.2,
    },
    icon: {
        borderWidth: 1,
        borderColor: "transparent",
        width: "10%",
        height: 25,
        alignSelf: "center"
    },
    View_ans: {
        borderWidth: 1,
        borderColor: "transparent",
        marginHorizontal: 20,
        marginVertical: 2,
        paddingVertical: 9,
        backgroundColor: "#F8EDC9",
        paddingHorizontal: 8,
        borderRadius: 3,
    },
    ans: {
        borderWidth: 1,
        borderColor: "transparent",
        paddingHorizontal: 0,
        color: "black",
        letterSpacing: 0.2,
        fontSize: 12.5,
        fontFamily:"Kanit",
    }
})
