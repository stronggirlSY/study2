import React, {useState} from "react";
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const App =() => {
 
  const [pressed, setPressed] = useState(false);
  const [name, setName] = useState('이서연');
  const [age, setAge] = useState('20');
  const [email, setEmail] = useState('leesyeon0310@gmail.com');

  const handlePress = () => {
    setPressed(!pressed);
  };

  return (
    <View style={styles.container}>
      <Text>이름:</Text>
      <TextInput 
      style={styles.input}
      placeholder="이름을 입력하세요"
      value={name}
      onChangeText={setName}
      />
      <View style={styles.buttonContainer}>
        <Button
        color="#2c2c2c"
        title={pressed ? '수정' : '저장'}
        onPress={handlePress}
         />
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

 export default App;
