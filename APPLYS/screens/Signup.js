import React from 'react';
import {AsyncStorage} from 'react-native';
import  { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  TextInput
} from 'react-native';
import axios from 'axios';
import styles from '../styles/SignupStyles'
import layout from './LayoutStyles.js'
import { MonoText } from '../components/StyledText';
import { tsConstructorType } from '@babel/types';

import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Form, Item, Input, Label } from 'native-base';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';
var moment = require('moment');
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
      medications: "",
      userType: "patient",
      curmed: "",
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
      userType: "patient",
      conditions: [],
      medications: [],
      allergies: []
    };
    axios.post('https://powerful-savannah-08407.herokuapp.com/users/add', newUser)
    .then(res => console.log(res.data));

    //await AsyncStorage.clear();
    //this.props.navigation.navigate('Auth');
  };

  onSubmitHandler(event) {
    console.log(event.nativeEvent.text)
    //change to push into array form
    this.setState({medications: event.nativeEvent.text})
    //set curmed to blank
  }

  showMedications() {
    return(
      <Text>{this.state.medications}</Text>
    )
  }

  render() { 
    return(
        
          <Container style = {{backgroundColor: "#ffffff"}}>
            <Header transparent>
              <Left>
                <Button transparent onPress = {() => this.props.navigation.navigate("Role")}>
                  <Icon name='arrow-back' />
                  <Text>Back</Text>
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right>
                <Button transparent onPress = {() => this.props.navigation.navigate("Login")}>
                  <Text>Cancel</Text>
                </Button>
              </Right>
            </Header>
          
          <View style = {styles.signupContainer}>
            <Form style = {styles.formContainer}>
              <Item fixedLabel style={styles.formItem}>
                <Label>First Name</Label>
                <Input onChangeText={fname => this.setState({ fname })}
                      value= {this.state.fname}
                      autoCapitalize = "words"/>
              </Item>
              <Item fixedLabel style={styles.formItem}>
                <Label>Last Name</Label>
                <Input autoCapitalize = "words"
                      onChangeText = {lname => this.setState({ lname })}
                      value= {this.state.lname}/>
              </Item>
              <Item fixedLabel style={styles.formItem}>
                <Label >Date of Birth</Label>
                <DatePicker
                style = {styles.dobPicker}
                customStyles={{
                  dateInput: {
                    marginLeft: 0,
                    borderWidth: 0,
                  },
                  dateText:{
                    fontSize: 16,
                    textAlign: "left"
                  }
                }}
                date={this.state.dob}
                mode="date"
                format="YYYY-MM-DD"
                minDate="1980-01-01"
                maxDate="2010-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon = {false}
                onDateChange={(date) => {this.setState({dob: date})}}/>
              </Item>
              <Item fixedLabel style={styles.formItem}>
                <Label>Sex</Label>
                <RNPickerSelect style = {styles}
                onValueChange={(value) => {this.setState({sex:value})}}
                items={[
                    { label: 'Female', value: "female" },
                    { label: 'Male', value: "male" },
                ]}/>
              </Item>
              <Item fixedLabel style={styles.formItem}>
                <Label>Email</Label>
                  <Input autoCapitalize = "none"
                    onChangeText={email => this.setState({ email:email })}
                    value= {this.state.email}/>
              </Item>
              <Item fixedLabel style={styles.formItem}>
                <Label>Password</Label>
                <Input autoCapitalize = "none"
                  onChangeText = {password => this.setState({ password:password })}
                  value= {this.state.password}/>
              </Item>
            

              <Item fixedLabel style={styles.formItem}>
                  <Label>List your conditions:</Label>
                  <TextInput
                    onSubmitEditing={text => this.onSubmitHandler(text)}
                  />
              </Item>

              <Text>List your medications:</Text>
              <Text>{this.state.medications}</Text>
              
              <TextInput
                    onSubmitEditing={(event) => this.onSubmitHandler(event)}/>
              <Text>List your allergies:</Text>
              <Input/>
            </Form>
            <Button onPress = {this.createaccount}><Text>Next</Text></Button>
          
        </View>
        </Container>
      )
  }

   
  
  // _signInAsync = async () => {
  //   await AsyncStorage.setItem('userToken', 'abc');
  //   this.props.navigation.navigate('App');
  // };
  
}
