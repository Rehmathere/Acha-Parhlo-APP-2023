import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
// Fonts Header File
import { useFonts } from "expo-font";

// API Key
const PALM_API_KEY = 'AIzaSyCgud3Jenrmba6pr6YZVJ298k7v20kcsjI';

export default function Virtual_Counselling() {
    // 1 - useState
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    // 2 - Function
    const generateText = async () => {
        if (inputText.trim() === "") {
            return;
        }
        const apiUrl = 'https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage';
        const requestData = {
            prompt: {
                context: '',
                examples: [],
                messages: [{ content: inputText }],
            },
            "temperature": 0.25,
            "candidate_count": 1,
            "top_k": 40,
            "top_p": 0.95
        };
        const headers = {
            'Content-Type': 'application/json',
        };
        try {
            const response = await axios.post(
                `${apiUrl}?key=${PALM_API_KEY}`,
                requestData,
                {
                    headers,
                }
            );
            // console.log(' API Response ', response.data) // added this
            if (response.status === 200) {
                if (
                    response.data &&
                    response.data.candidates &&
                    response.data.candidates.length > 0
                ) {
                    const botResponse = response.data.candidates[0].content;
                    // Add The User Input
                    const newUserMessage = {
                        id: messages.length + 1,
                        text: inputText,
                        sender: 'user',
                        timestamp: new Date().getTime(),
                    };
                    // Add The Bot Message
                    const newBotMessage = {
                        id: messages.length + 2,
                        text: botResponse,
                        sender: 'bot',
                        timestamp: new Date().getTime(),
                    };
                    setMessages([...messages, newUserMessage, newBotMessage]);
                    setInputText('');
                } else {
                    console.error(' Response Structure is not as Expected ');
                }
            } else {
                console.error(
                    ' Google Cloud API response failed with status ',
                    response.status
                );
            }
        } catch (error) {
            console.error(
                ' An Error Occured While Making The Google Cloud API Request : ',
                error
            );
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
        <SafeAreaView style={styles.container}>
            {/* Start */}
            {/* <Text style={styles.fir}>Rehmat AI GPT</Text> */}
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    // 1
                    <View
                        style={{
                            alignSelf: item.sender === "user" ? "flex-end" : "flex-start",
                            marginBottom: 12,
                        }}
                    >
                        {/* Sub 1 */}
                        <View
                            style={{
                                backgroundColor: item.sender === "user" ? "#001400" : "#D9D9D9",
                                padding: 10,
                                borderRadius: 10,
                            }}
                        >
                            {/* 1 */}
                            <Text
                                style={{
                                    color: item.sender === "user" ? "white" : "black",
                                    fontFamily: "Kanit",
                                    letterSpacing: 1,
                                    fontSize: 12,
                                }}
                                >
                                {item.sender === "user" ? item.text : item.text}
                            </Text>
                            {/* 2 */}
                            <Text
                                style={{
                                    color: item.sender === "user" ? "white" : "black",
                                    fontSize: 12,
                                    marginTop: 5,
                                    fontFamily: "Kanit",
                                    letterSpacing: 1,
                                    fontSize: 12,
                                }}
                            >
                                {new Date(item.timestamp).toLocaleTimeString()}
                            </Text>
                        </View>
                    </View>
                )}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder=" Let's Ask Anything ... ! "
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    style={styles.input}
                />
                <TouchableOpacity onPress={generateText} style={styles.sendButton}>
                    <Text style={styles.sendButtonTxt}>Ask Anything ...</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

// CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 5,
        paddingTop: 10,
        // paddingBottom: 10,
    },
    fir: {
        color: "white",
        fontSize: 24,
        marginBottom: 16,
        textAlign: "center",
        fontFamily: "Heebo",
        backgroundColor: "green",
    },
    inputContainer: {
        backgroundColor: 'white',
        // backgroundColor: '#EB2F06',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 0,
        width: '100%',
        alignSelf: 'center',
    },
    input: {
        fontSize: 15,
        color: "black",
        paddingVertical: 2,
        paddingHorizontal: 12,
        borderRadius: 10,
        fontFamily: "Kanit",
        letterSpacing: 2,
        borderColor: "#001400",
        borderWidth: 0.5,
        marginTop: 2,
        marginBottom: 10,
    },
    sendButton: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 10,
        // backgroundColor: '#007AFF',
        backgroundColor: '#001400',
    },
    sendButtonTxt: {
       textAlign: "center",
       fontFamily: "Heebo",
       letterSpacing: 2.5,
       fontSize: 15, 
       color: "white",
       textTransform: "capitalize",
    },
});