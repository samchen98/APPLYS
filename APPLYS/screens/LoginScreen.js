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

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' ,
    password:'',
    logged: false
    };
  }
  static navigationOptions = {
    title: 'Please sign in',
  };
  handleEmail = (text) => {
      this.setState({ email: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text })
  }
  login = (email, pass) => {
    console.log("trye")
    this.setState({logged:true}) //this should happen after axios call works
    // const newUser = {
    //   email: email,
    //   password: pass
    // };
    // axios.post('http://localhost:4000/users/add', newUser)
    // .then(res => console.log(res.data));
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
                  onPress = {this._signInAsync}>
                  <Text style = {styles.submitButtonText}> Login </Text>
                </TouchableOpacity>
    
    
          
          </ScrollView>
    
        
        </View>
      );       

  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
  
}

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/development-mode/'
//   );
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
//   );
// }

