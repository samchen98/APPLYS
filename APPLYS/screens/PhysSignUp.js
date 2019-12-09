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
import styles from '../styles/SignupStyles.js'
const config = require("../config")
import { MonoText } from '../components/StyledText';
import { tsConstructorType } from '@babel/types';
import Logo from '../assets/images/Logo.js';

export default class PhysSignUp extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      fname: '',
      lname: '',
      email: '' ,
      password:'',
      userType: 'physician',
      textstuff:'',
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

  signup = (fname, lname, email, pass) => {
    const newUser = {
      fname: fname,
      lname: lname,
      email: email,
      password: pass,
      userType: this.state.userType,
    };
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
    console.log("type " + this.state.userType )
      return (
        <View style = {styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>

            <View style={styles.logo1}>
            <Logo/>
          </View>
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

              <Button
                style = {styles.submitButton}
                onPress = {() => this.signup(this.state.fname, this.state.lname, this.state.email, this.state.password)}>
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
  
}
