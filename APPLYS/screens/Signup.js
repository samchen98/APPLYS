import React from 'react';
import {AsyncStorage} from 'react-native';
import  { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import axios from 'axios';
import styles from './Styles.js'
import layout from './LayoutStyles.js'
import { MonoText } from '../components/StyledText';
import { tsConstructorType } from '@babel/types';

import {Button} from 'native-base';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fname: "",
      lname: "",
      dob: "2000-01-01",
      sex: "",
      hospital: "",
      email: "",
      password: "",
      diagnosis: [],
      allergies: [],
      medications: [],
      userType: "patient"
    };
  }
  static navigationOptions = {
    title: 'Sign Up',
  };
  
  createaccount = () => {
    const newUser = {
      fname: this.state.fname,
      lname: this.state.lname,
      dob: this.state.dob,
      sex: this.state.sex,
      email: this.state.email,
      password: this.state.password,
      userType: "patient"
    };
    axios.post('https://powerful-savannah-08407.herokuapp.com/users/add', newUser)
    .then(res => console.log(res.data));

    //await AsyncStorage.clear();
    //this.props.navigation.navigate('Auth');
  };

  render() {
    return(
        <View style = {layout.contentContainer}>
          <ScrollView>
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "First Name"
              placeholderTextColor = "#000000"
              autoCapitalize = "words"
              onChangeText={fname => this.setState({ fname })}
              value= {this.state.fname}/>
              
            <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Last Name"
            placeholderTextColor = "#000000"
            autoCapitalize = "words"
            onChangeText = {lname => this.setState({ lname })}
            value= {this.state.lname}/>

            <Text>Date of Birth: </Text>
            <DatePicker
            style={{marginRight: 0}}
            date={this.state.dob}
            mode="date"
            placeholder="Date of Birth"
            format="YYYY-MM-DD"
            minDate="1980-01-01"
            maxDate="2010-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon = {false}
            onDateChange={(date) => {this.setState({dob: date})}}/>

            <RNPickerSelect
                style = {styles.input}
                onValueChange={(value) => {this.setState({sex:value})}}
                items={[
                    { label: 'Female', value: 'female' },
                    { label: 'Male', value: 'male' },
                ]}/>

            <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#000000"
                autoCapitalize = "none"
                onChangeText={email => this.setState({ email:email })}
                value= {this.state.email}/>
                
            <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Password"
            placeholderTextColor = "#000000"
            autoCapitalize = "none"
            onChangeText = {password => this.setState({ password:password })}
            value= {this.state.password}/>


            <Button onPress = {this.createaccount}><Text>Submit</Text></Button>
            </ScrollView>
        </View>
      )
  }

   
  
  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };
  
}
