import React, {useState} from "react";
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('이서연');
  const [age, setAge] = useState('20');
  const [email, setEmail] = useState('leesyeon0310@gmail.com');

  return (
    <View style={styles.container}>
      <Text>이름:</Text>
      <TextInput style={styles.input}/>
      <View style={styles.buttonContainer}>
        <Button title='수정'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:30,
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth:1,
    borderColor:'#777',
    padding: 8,
    margin: 10,
    width: 300,
  }
});
