import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {AsyncStorage} from 'react-native';
import  { Component } from 'react';
import {Button} from 'native-base'
import {
  Image,
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
import layout from './LayoutStyles'

import { MonoText } from '../components/StyledText';
import { tsConstructorType } from '@babel/types';

const config = require("../config")

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' ,
    password:'',
    };
  }
  static navigationOptions = {
    title: 'Sign In',
  };
  handleEmail = (text) => {
      this.setState({ email: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text })
  }
  _createaccount = async () => {
    //await AsyncStorage.clear();
    this.props.navigation.navigate('Role');
};

  login = (email, pass) => {

    const newUser = {
      email: email,
      password: pass
    };
    const temp = config.serversite;
    console.log(pass.length)

    
    axios.post(config.serversite + '/users/auth', newUser)
    .then(res => {if(res.data.success = true){
      console.log("nice!")
      this.props.navigation.navigate('App');
   
    }
    else{
      console.log("Email invalid")
    }
    });
      
  }

  render(){
      return (
        <View style = {layout.container}>
          <View style={layout.welcomeContainer}>
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
            value= {this.state.email}/>
            
            
          <TextInput style = {styles.input}
          secureTextEntry={true}
          type = "password"
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
        </View>
      );       

  }
  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };
  
}
