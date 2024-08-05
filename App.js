import React, {useState, Component} from "react";

import {StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const App =() => {
 
  const [Namepressed, setNamePressed] = useState(false);
  const [Agepressed,setAgePressed] = useState(false);
  const [Emailpressed,setEmailPressed] = useState(false);
  const [name, setName] = useState('이서연');
  const [age, setAge] = useState('20');
  const [email, setEmail] = useState('leesyeon0310@gmail.com');
  const [text,setText] = useState('');
  const [inputText,setInputText] = useState('');

  state = {
    text: '',
    inputText: ''
 
  };
 
  submitBtn = () => {
    setText(inputText);
  };


 //취미
 
  return (

    //이름칸
   
  <KeyboardAwareScrollView>
    <View>
     <View style={{height:200}}></View>
      <Text>이름:</Text>
      <View style={{flexDirection: 'row', alignItems:'center'}}>
      {Namepressed ? // true -> 인풋필드 false ->텍스트 렌더링
      (<TextInput    // 인풋 필드창이 뜬다
      style={styles.input}
      placeholder="이름을 입력하세요" 
      value={name} // 입력 필드의 현재 값 설정
      onChangeText={setName} // 인풋 필드창에 텍스트를 입력할때마다 입력하는 값을 name으로 만듦 (새로고침처럼) -> 위로 올라가는거
      onSubmitEditing={()=>setNamePressed(!Namepressed)}/> // 키보드에서 완료 버튼 누르면 나오는거 
      ) //트루일때
      : ( //false일때
        <Text style={styles.text}>{name}</Text>
      )}
      <View style={{flex:1}}/> 
        <View style={styles.buttonContainer}>
          <Button
          color= "#ffffff"
          title={Namepressed ? '저장'//트루
            : '수정'} //false
          onPress={() => setNamePressed(!Namepressed)} 
          />
        </View>
        </View>
        <View/>
    <Text>나이:</Text>
    <View style={{flexDirection: 'row', alignItems:'center'}}>
     {Agepressed ?
        (<TextInput 
        style={styles.input}
        placeholder="나이를 입력하세요"
        value={age}
        onChangeText={setAge}
        onSubmitEditing={() => setAgePressed(!Agepressed)}/>
        ) : (
          <Text style={styles.text}>{age}</Text>
        )} 
      <View style={{flex:1}}/> 
        <View style={styles.buttonContainer}>
          <Button
          color= "#ffffff"
          title={Agepressed ? '저장' : '수정'}
          onPress={() => setAgePressed(!Agepressed)}
          />
          </View>
        </View>

        <Text>이메일:</Text>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
        {Emailpressed ?
        (<TextInput 
        style={styles.input}
        placeholder="이메일을 입력하세요"
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={() => setEmailPressed(!Emailpressed)}/>
        ) : (
          <Text style={styles.text}>{email}</Text>
        )} 
        <View style={{flex:1}}/> 
        <View style={styles.buttonContainer}>
          <Button
          color= "#ffffff"
          title={Emailpressed ? '저장' : '수정'}
          onPress={() => setEmailPressed(!Emailpressed)}
          />
          </View>
        </View>
      </View>
      <Text>취미 목록</Text>
        <TextInput
            style={styles.input}
            onChangeText={(text) => {setInputText(text)}}
            placeholder="취미를 입력해주세요."
          />
          <Button title="저장" onPress = {submitBtn} />
          <Text style = {styles.text}>{text}</Text>
    </KeyboardAwareScrollView>
   );
}

const styles = StyleSheet.create({
  text: {
    fontSize:30,
  },
  buttonContainer: {
    marginTop: 15,
    merginBottom: 10,
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
