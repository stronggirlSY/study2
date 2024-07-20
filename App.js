import React, {useState} from "react";
import {StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('이서연');
  const [age, setAge] = useState('20');
  const [email, setEmail] = useState('leesyeon0310@gmail.com');
  const clickHandler = () => {
    setName('서연');
  }
  return (
    <View style={styles.container}>
      <Text>이름: {name}, 나이: {age}, 이메일: {email} </Text>
      <View style={styles.buttonContainer}>
        <Button title='수정' onPress={clickHandler}/>
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
  }
});
