import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button,TextInput} from 'react-native';

export default function App() {
  const [user,setUser]=useState('Alan')
  const [fruit,setFruit]=useState({name:"orange",price:5})
  const pressHandler=()=>{
    setUser("Peter")
    setFruit({name:"apple",price:8})
  }
  return (
    <View style={styles.container}>
      <Text style={styles.mytext}>{user} is eating {fruit.name}which cost KSH{fruit.price}</Text>
      <TextInput style={styles.textinput}placeholder="Enter the username"
      onChange={e=>setUser(e.target.value)}/>
        <TextInput style={styles.textinput}placeholder="Enter the fruit"
        multiline
      onChange={e=>setFruit({...fruit,name:e.target.value})}/>
      <TextInput style={styles.textinput}placeholder="Enter the fruit"
        keyboardType="numeric"
      onChange={e=>setFruit({...fruit,price:e.target.value})}/>
      <View  style={styles.buttonstyle}>
        <Button title="Change"
          onPress={pressHandler}
          /></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonstyle:{
    marginTop:30
  },
  mytext:{
    fontSize:20,
   
  },
  textinput:{
    borderWidth:1,
    margin:10,
    height:50,
    width:300,

  }
});
