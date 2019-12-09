import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {AsyncStorage} from 'react-native';
import  { Component } from 'react';
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
import styles from '../styles/SignupStyles'
import layout from './LayoutStyles'
import { Button, Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { MonoText } from '../components/StyledText';
import { tsConstructorType } from '@babel/types';
import Logo from '../assets/images/Logo.js';

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

  async storePatient(data) {
    await AsyncStorage.setItem('userToken', "1");
    await AsyncStorage.setItem('fname', data.fname);
    await AsyncStorage.setItem('lname', data.lname);
    await AsyncStorage.setItem('email', data.email);
    await AsyncStorage.setItem('score', data.score);
    await AsyncStorage.setItem('physemail', data.physemail);
    return
  }

  async storePhysician(data) {
    await AsyncStorage.setItem('userToken', "1");
    await AsyncStorage.setItem('fname', data.fname);
    await AsyncStorage.setItem('lname', data.lname);
    await AsyncStorage.setItem('email', data.email);
    return
  }

  login = async(email, pass) => {
    const newUser = {
      email: email,
      password: pass
    };

    axios.post(config.serversite + '/users/auth', newUser)
    .then(res=> {if(res.data.success = true){
      if(res.data.message.userType == "patient"){
        this.storePatient(res.data.message)
        this.props.navigation.navigate('App');
      }
      else if(res.data.message.userType == "physician"){
        this.storePhysician(res.data.message)
        this.props.navigation.navigate('Phys');
      }
    }
    else{
      console.log("Email invalid")
    }
    });
      
  }

  render(){
      return (
        <View style = {layout.container}>
          <View style={styles.logo}>
            <Logo/>
          </View>
          <Form style= {styles.form}>
            <Item floatingLabel style = {{height: 65}} >
              <Label style = {{fontFamily: 'nunito', height: 40}}>Email</Label>
              <Input 
                autoCapitalize = "none"
                onChangeText={email => this.setState({ email })}
                value= {this.state.email}/>
             </Item>
            <Item floatingLabel style = {{height: 65}}>
              <Label style = {{fontFamily: 'nunito', height: 40}}>Password</Label>
              <Input
              secureTextEntry={true}
              type = "password"
              autoCapitalize = "none"
              onChangeText = {password => this.setState({ password })}
              value= {this.state.password}/>
            </Item>
          </Form>
          <Button
          style = {[styles.loginButton, {backgroundColor: "purple"}]}
          onPress = {
            () => this.login(this.state.email, this.state.password)
          }>
          <Text style = {[styles.submitButtonText,{color: "white"}]}> Login </Text>
          </Button>

          <Button
              style = {[styles.loginButton, {backgroundColor: "white", borderColor:"purple", borderWidth: 2}]}
              onPress = {
              this._createaccount
              }>
              <Text style = {[styles.submitButtonText, {color: "purple"}]}> Sign Up </Text>
          </Button>
        </View>
      );       

  }
  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };
  
}
