import React, {useState} from "react";
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
    setIsNameEditing(!isnameEditing); //핸들네임에딧토글: 이즈내임에디팅(기본값이false(수정))를 true(완료)로 반전시키는 역할을 함 
  };

  const handleNameButtonPress = () => {
    handleNamePress();
    handleNameEditToggle();  //핸들네임버튼프레스->핸들네임프레스,핸들네임에딧토글 두개가 동시에 시현되도록 함
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
// 이메일 정의




 //취미

 const [hobby, setHobby] = useState(false);
 const [hobbypressed, setHobbypressed] = useState(false); 

 const hobbypress = () => {
  setHobbypressed(!hobbypressed);
 }; //하비프레스: 하비프레스드(false)를 true인 상황으로 바꿔줌

 submitBtn = () => {
  this.setState({text: this.state.inputText});
}

state = {
  text: '',
  inputText:''
}

  return (

    //이름칸
   
    <KeyboardAwareScrollView style={styles.container}>
    <Text>이름:</Text>
    {isnameEditing ? // true -> 인풋필드 false ->텍스트 렌더링
     (<TextInput    // 인풋 필드창이 뜬다
    style={styles.input}
    placeholder="이름을 입력하세요" 
    value={name} // 입력 필드의 현재 값 설정
    onChangeText={setName} // 인풋 필드창에 텍스트를 입력할때마다 입력하는 값을 name으로 만듦 (새로고침처럼)
    onSubmitEditing={handleNameEditToggle}/> // 종료하면 핸들네임에딧토글로 편집모드 종료 
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

      // 일단 이까지가 버튼 칸 해결해야할것: 엑스포 찍었을때 오류나는거;(이건뷰를스크롤뷰로바꿔서.)

      //여기서부터 취미...

      <Text>취미 목록</Text>
      <TextInput
      style={styles.input}
      value={hobby}
      onChangeText={(text) => this.setState.({inputText: text})}
      />

      <View style={styles.buttonContainer}>
        <Button title="입력" 
        onPress={this.submitBtn}
        />
      </View>
      




    </KeyboardAwareScrollView>
   );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'left',
    justifyContent: 'left',
  },
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
