import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import axios from 'axios';

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
    const newUser = {
      email: email,
      password: pass
    };
    axios.post('http://localhost:4000/users/add', newUser)
    .then(res => console.log(res.data));
      // alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 250,
      
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1,
      textAlign: 'center',
   },
   submitButton: {
      backgroundColor: '#000000',
      padding: 10,
      margin: 15,
      height: 40,
      textAlign: 'center',
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
   }
})