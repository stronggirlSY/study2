import { useState } from "react";

export default function App() {
  const [이름, set이름] = useState('이서연');
  const [나이, set나이] = useState('20');
  const [이메일, set이메일] = useState('leesyeon0310@gmail.com');

  return (
    <View style={styles.container}>
      
      <Text>이름: {이름}, 나이: {나이}, 이메일: {이메일} </Text>
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
});
