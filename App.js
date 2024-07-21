import React, {useState} from "react";
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const App =() => {
 
  const [Namepressed, setNamePressed] = useState(false);
  const [Agepressed,setAgePressed] = useState(false);
  const [Emailpressed,setEmailPressed] = useState(false);
  const [name, setName] = useState('이서연');
  const [age, setAge] = useState('20');
  const [email, setEmail] = useState('leesyeon0310@gmail.com');
  const [isnameEditing, setIsNameEditing] = useState(false);
  const [isageEditing, setIsageEditing] = useState(false);
  const [isEmailEditing,setIsEmailEditing] = useState(false);


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
// 이름정의

  const handleAgePress = () => {
    setAgePressed(!Agepressed);
  };

  const handleAgeEditToggle = () => {
    setIsageEditing(!isageEditing);
  };

  const handleAgeButtonPress = () => {
    handleAgePress();
    handleAgeEditToggle();
  };

// 나이정의

const handleEmailPress = () => {
  setEmailPressed(!Emailpressed);
};

const handleEmailEditToggle = () => {
  setIsEmailEditing(!isEmailEditing);
};

const handleEmailButtonPress = () => {
  handleEmailPress();
  handleEmailEditToggle();
};

  return (

    //이름칸
    <View style={styles.container}>

      <Text>이름:</Text>
      {isnameEditing ?
       (<TextInput 
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
        color= "#ffffff"
        title={Namepressed ? '저장' : '수정'}
        onPress={handleNameButtonPress}
         />
      </View>

      <Text>나이:</Text>
      {isageEditing ?
       (<TextInput 
      style={styles.input}
      placeholder="나이를 입력하세요"
      value={age}
      onChangeText={setAge}
      onSubmitEditing={handleAgeEditToggle}/>
      ) : (
        <Text style={styles.text}>{age}</Text>
      )} 

      <View style={styles.buttonContainer}>
        <Button
        color= "#ffffff"
        title={Agepressed ? '저장' : '수정'}
        onPress={handleAgeButtonPress}
         />
      </View>

      <Text>이메일:</Text>
      {isEmailEditing ?
       (<TextInput 
      style={styles.input}
      placeholder="이메일을 입력하세요"
      value={email}
      onChangeText={setEmail}
      onSubmitEditing={handleEmailEditToggle}/>
      ) : (
        <Text style={styles.text}>{email}</Text>
      )} 

      <View style={styles.buttonContainer}>
        <Button
        color= "#ffffff"
        title={Emailpressed ? '저장' : '수정'}
        onPress={handleEmailButtonPress}
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
    marginTop: 15,
    merginBottum: 10,
    backgroundColor: "#0000FF",
    paddingHorizontal: 5,
    borderRadius:5,
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
