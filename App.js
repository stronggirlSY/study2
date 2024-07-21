import React, {useState} from "react";
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const App =() => {
 
  const [Namepressed, setNamePressed] = useState(false);
  const [name, setName] = useState('이서연');
  const [age, setAge] = useState('20');
  const [email, setEmail] = useState('leesyeon0310@gmail.com');
  const [isnameEditing, setIsNameEditing] = useState(false);
  const [isageEditing, setIsageEditing] = useState(false);


  const handleNamePress = () => {
    setNamePressed(!Namepressed);
  };
  const handleNameEditToggle = () => {
    setIsNameEditing(!isnameEditing);
  };

  const handleNameButtonPress = () => {
    handleNamePress();
    handleNameEditToggle(); 
  };

  return (

    //이름칸
    <View style={styles.container}>

      <Text>이름:</Text>
      {isnameEditing ? (
      <TextInput 
      style={styles.input}
      placeholder="이름을 입력하세요"
      value={name}
      onChangeText={setName}
      onSubmitEditing={handleNameEditToggle}/>
      ) : (
        <Text style={styles.text}>{name}</Text>
      )} 

      <View style={styles.buttonContainer}>
        <Button
        color= "#000000"
        title={Namepressed ? '저장' : '수정'}
        onPress={handleNameButtonPress}
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
