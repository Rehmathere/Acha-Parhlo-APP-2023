import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default function MySecond() {
  const students = [
    // { id: '1', name: 'Alice' },
    // { id: '2', name: 'Bob' },
    // { id: '3', name: 'Charlie' },
    // { id: '4', name: 'David' },
    // { id: '5', name: 'Eva' },
  ];

  // If Data Is Zero Then It Return s No Text Here Otherwise Show The Data
  const renderEmpty = () => {
    return <Text style={styles.noText}>No Text Here</Text>;
  };

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
    backgroundColor: 'yellow',marginTop: 20,
  },
  fir: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 20,
    borderWidth: 1,
    textAlign: 'center',
  },
  noText: {
    fontSize: 40,
    fontWeight:"bold",    
    color: 'red',
    // borderWidth: 1,
    textAlign:"center",
    marginTop: 300,
  },
});
