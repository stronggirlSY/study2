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

 //네임프레스드랑 이즈네임에디팅중 1나만 있어도됨


//->이거다필요없음;;;;;;;



 //취미
 
//  const [hobby, setHobby] = useState(false);
//  const [hobbypressed, setHobbypressed] = useState(false); 

//  const hobbypress = () => {
//   setHobbypressed(!hobbypressed);
//  }; //하비프레스: 하비프레스드(false)를 true인 상황으로 바꿔줌

//  submitBtn = () => {
//   this.setState({text: this.state.inputText});
// }

// state = {
//   text: '',
//   inputText:''
// }

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

        {/* //일단 이까지가 버튼 칸 해결해야할것: 엑스포 찍었을때 오류나는거;(이건뷰를스크롤뷰로바꿔서.이건다시뷰로바꿔놓긴함..)

        //여기서부터 취미... 만들어야할것:입력필드 안에 쓴 게 밖으로 text로 구현되도록

        <Text>취미 목록</Text>
        <TextInput
        style={styles.input}
        value={hobby}
        onChangeText={(text) => this.setState({inputText: text})}
        />

        <View style={styles.buttonContainer}>
          <Button title="입력" 
          onPress={this.submitBtn}
          />
        </View>


        //list 형태로 정의하기  */}
      </View>
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
