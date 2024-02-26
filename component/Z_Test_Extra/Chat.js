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
import { signOut } from 'firebase/auth';
import { auth, database } from '../Chat/firebase';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import colors from './colors';

export default function Chat() {

const [messages, setMessages] = useState([]);
const navigation = useNavigation();

useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        style={{
          marginRight: 10
        }}
      >
        <AntDesign name="logout" size={24} color={colors.gray} style={{marginRight: 10}}/>
      </TouchableOpacity>
    )
  });
}, [navigation]);

useLayoutEffect(() => {
  const collectionRef = collection(database, '2 - Chat');
  const q = query(collectionRef, orderBy('createdAt', 'desc'));

  const unsubscribe = onSnapshot(q, querySnapshot => {
    setMessages(
      querySnapshot.docs.map(doc => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user
      }))
    );
  });
  return unsubscribe;
}, []);

const onSend = useCallback((messages = []) => {
  setMessages(previousMessages =>
    GiftedChat.append(previousMessages, messages)
  );
  const { _id, createdAt, text, user } = messages[0];    
  addDoc(collection(database, '2 - Chat'), {
    _id,
    createdAt,
    text,
    user
  });
}, []);

return (
  <GiftedChat
    messages={messages}
    showAvatarForEveryMessage={false}
    showUserAvatar={false}
    onSend={messages => onSend(messages)}
    messagesContainerStyle={{
      backgroundColor: '#FFE4DE'
    }}
    textInputStyle={{
      backgroundColor: '#fff',
      borderRadius: 20,
    }}
    user={{
      _id: auth?.currentUser?.email,
      avatar: 'https://i.pravatar.cc/300'
    }}
    renderBubble={(props) => (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#015E01', // Set the background color for receiver's messages
          },
          right: {
            backgroundColor: '#EB2F06', // Set the background color for sender's messages
          },
        }}
        textStyle={{
          left: {
            letterSpacing: 1, // Apply letterSpacing for receiver's messages
            paddingHorizontal: 5,
            paddingVertical: 3,
            color: 'white',
          },
          right: {
            letterSpacing: 1, // Apply letterSpacing for sender's messages
            paddingHorizontal: 5,
            paddingVertical: 3,
            color: 'white',
          },
        }}
      />
    )}
    renderSend={(props) => (
      <Send {...props} containerStyle={{ justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
        <View style={{ backgroundColor: 'blue', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10, }}>
          <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1, }}>Send</Text>
        </View>
      </Send>
    )}
  />
);
}
