import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
} from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
} from 'firebase/firestore';
import { auth, database } from './firebase';
import { useNavigation } from '@react-navigation/native';
// Fonts Header File
import { useFonts } from "expo-font";

export default function FinalChat() {
    // --------------- Backend Part Logic ---------------
    const [messages, setMessages] = useState([]);
    useLayoutEffect(() => {
        const collectionRef = collection(database, '2 - Chat');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, querySnapshot => {
            setMessages(
                querySnapshot.docs.map(doc => ({
                    _id: doc.id, // Use doc.id as a unique key
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            );
        });
        return unsubscribe;
    }, []);
    const onSend = useCallback((newMessages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, newMessages)
        );
        const { _id, createdAt, text, user } = newMessages[0];
        addDoc(collection(database, '2 - Chat'), {
            _id,
            createdAt,
            text,
            user
        });
    }, []);
    // --------------- Backend Part Logic ---------------
    // - Font Family -
    // 1 - useState
    const [fontsLoaded, setFontsLoaded] = useState(false);
    // Expo Font Logic
    let [loaded] = useFonts({
        // ... (rest of the font loading logic)
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
    // ---------- Font Family ----------
    // Main Body
    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={false}
            showUserAvatar={false}
            onSend={newMessages => onSend(newMessages)}
            messagesContainerStyle={{
                // backgroundColor: '#FFE4DE',
                backgroundColor: 'white',
                fontFamily: "Kanit",
            }}
            textInputStyle={{
                backgroundColor: 'white',
                borderRadius: 20,
                fontFamily: "Kanit",
                letterSpacing: 1.5,
                paddingHorizontal: 5,
                color: "#EB2F06"
            }}
            user={{
                _id: auth?.currentUser?.email,
                // avatar: 'https://i.pravatar.cc/300'
                avatar: 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_640.png'
            }}
            renderBubble={(props) => (
                <Bubble
                    {...props}
                    wrapperStyle={{
                        left: {
                            // backgroundColor: '#006700', // Set the background color for receiver's messages
                            backgroundColor: '#D9D9D9', // Set the background color for receiver's messages
                            color: "black",
                        },
                        right: {
                            backgroundColor: '#EB2F06', // Set the background color for sender's messages
                        },
                    }}
                    textStyle={{
                        left: {
                            letterSpacing: 1, // Apply letterSpacing for receiver's messages
                            paddingHorizontal: 2,
                            paddingVertical: 2,
                            color: 'black',
                            fontFamily: "Kanit",
                        },
                        right: {
                            letterSpacing: 1, // Apply letterSpacing for sender's messages
                            paddingHorizontal: 2,
                            paddingVertical: 2,
                            color: 'white',
                            fontFamily: "Kanit",
                        },
                    }}
                />
            )}
            renderSend={(props) => (
                <Send {...props} containerStyle={{ justifyContent: 'center', alignItems: 'center', marginRight: 10, fontFamily: "Kanit", }}>
                    <View style={{ backgroundColor: '#f39c12', paddingHorizontal: 10, paddingVertical: 7, borderRadius: 8, fontFamily: "Kanit", }}>
                        <Text style={{ color: 'black', letterSpacing: 2, fontFamily: "Heebo", fontSize: 13.5, }}>Send</Text>
                    </View>
                </Send>
            )}
        />
    );
}
