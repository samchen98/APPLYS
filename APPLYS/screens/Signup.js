import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {AsyncStorage} from 'react-native';
import  { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import axios from 'axios';
import { Button, Icon, Title, Text } from 'native-base';
import MainHome from './MainHome';
import styles from './Styles.js'
const config = require("../config")
import { MonoText } from '../components/StyledText';
import { tsConstructorType } from '@babel/types';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fname: '',
      lname: '',
      email: '' ,
      password:'',
      userType: 'patient',
      textstuff:'',
      physemail: '',
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

  signup = (fname, lname, email, pass, physemail) => {
    const newUser = {
      fname: fname,
      lname: lname,
      email: email,
      password: pass,
      userType: this.state.userType,
      physemail: physemail
    };

  // authenticate =(email) =>{
  //   axios.post(config.serversite + '/users/add', newUser)
  //   }
    ////
    const temp = config.serversite;

    console.log(pass.length)
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!re.test(email)){
      this.setState({
        textstuff: 'Email is invalid'
      })
    }
    else{
      if(pass.length < 10){
        this.setState({
          textstuff: 'Password must be at least 10 characters long'
        })
      }  
      else{
      axios.post(config.serversite + '/users/add', newUser)
      .then(res => {
        console.log(res.data)
        this.props.navigation.navigate('Auth');
      });
      }
    }
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
                    placeholder = "First Name"
                    placeholderTextColor = "#000000"
                    autoCapitalize = "word"
                    onChangeText={fname => this.setState({ fname })}
                    value= {this.state.fname} />

              <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Last Name"
                    placeholderTextColor = "#000000"
                    autoCapitalize = "word"
                    onChangeText={lname => this.setState({ lname })}
                    value= {this.state.lname} />

              <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#000000"
                    autoCapitalize = "none"
                    onChangeText={email => this.setState({ email })}
                    value= {this.state.email} />
                  
              <TextInput style = {styles.input}
                secureTextEntry={true}
                type = "password"
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#000000"
                autoCapitalize = "none"
                onChangeText = {password => this.setState({ password })}
                value= {this.state.password}/>
              
              <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = " Physician's Email"
                    placeholderTextColor = "#000000"
                    autoCapitalize = "none"
                    onChangeText={physemail => this.setState({ physemail })}
                    value= {this.state.physemail} />
              <Button
                style = {styles.submitButton}
               // onPressIn={() => {this.authenticate(this.state.email)}}
                onPress = {() =>  this.signup(this.state.fname, this.state.lname, this.state.email, this.state.password, this.state.physemail)}>
                  <Text style = {styles.submitButtonText}> Create Account </Text>
              </Button>

            <Text style={{fontSize: 60},{textAlign: "center"}}>{this.state.textstuff}</Text>
          </ScrollView>
        </View>
      );       

  }
  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };
  function
  
}
