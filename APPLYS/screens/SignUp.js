import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {AsyncStorage} from 'react-native';
import  { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import axios from 'axios';
import MainHome from './MainHome';
import styles from './Styles.js'

import { MonoText } from '../components/StyledText';
import { tsConstructorType } from '@babel/types';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' ,
    password:'',
    };
  }
  static navigationOptions = {
    title: 'Sign Up',
  };
  handleEmail = (text) => {
      this.setState({ email: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text })
  }
  _createaccount = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
};

  login = (email, pass) => {
      console.log("hello")
    const newUser = {
      email: email,
      password: pass
    };
    axios.post('http://localhost:4003/users/add', newUser)
    .then(res => console.log(res.data));
      // alert('email: ' + email + ' password: ' + pass)
  }
  render(){
      return (
        <View style = {styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>

              <Image
                source={
                  __DEV__
                    ? require('../assets/images/robot-dev.png')
                    : require('../assets/images/robot-prod.png')
                }
                style={styles.welcomeImage}
              />
            </View>
            <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Email"
                  placeholderTextColor = "#000000"
                  autoCapitalize = "none"
                  onChangeText={email => this.setState({ email })}
                  value= {this.state.email}
                  
                  />
                  
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Password"
                  placeholderTextColor = "#000000"
                  autoCapitalize = "none"
                  onChangeText = {password => this.setState({ password })}
                  value= {this.state.password}/>
                
                <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                this._createaccount
               }>
               <Text style = {styles.submitButtonText}> Need Account? </Text>
            </TouchableOpacity>
    
    
          
          </ScrollView>
    
        
        </View>
      );       

  }
  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };
  
}
