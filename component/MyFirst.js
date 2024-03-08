import React, { useState } from "react";
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

// API Key
const PALM_API_KEY = 'AIzaSyCgud3Jenrmba6pr6YZVJ298k7v20kcsjI';

export default function MyFirst() {
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
      console.log(' API Response ',response.data) // added this
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
  // Main Body
  return (
    <SafeAreaView style={styles.container}>
      {/* Start */}
      <Text style={styles.fir}>Rehmat AI GPT</Text>
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
                backgroundColor: item.sender === "user" ? "#007AFF" : "#E5E5EA",
                padding: 10,
                borderRadius: 10,
              }}
            >
              {/* 1 */}
              <Text
                style={{
                  color: item.sender === "user" ? "white" : "black",
                }}
              >
                {item.sender === "user" ? item.text : item.text}
              </Text>
              {/* 2 */}
              <Text
                style={{
                  color: item.sender === "user" ? "white" : "black",
                  fontSize: 12,
                  marginTop: 4,
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
      placeholder=" Let's Chat.. "
      value={inputText}
      onChangeText={(text) => setInputText(text)}
      style={styles.input}
      />
      <TouchableOpacity onPress={generateText} style={styles.sendButton}>
        <Ionicons name="send" size={24} color="white" />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EB2F06",
    paddingHorizontal: 10,
    paddingTop: 24,
    paddingBottom: 10,
  },
  fir: {
    color: "white",
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  input: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3
  },
  sendButton:{
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#007AFF',

  },
});