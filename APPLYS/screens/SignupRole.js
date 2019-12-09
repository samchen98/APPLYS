import React from 'react';
import  { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import axios from 'axios';
import styles from '../styles/SignupStyles'
import layout from './LayoutStyles'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
export default class SignupRole extends Component {
    handlePress(type) {
      if(type == "patient"){
        this.props.navigation.navigate('Sign');
      }
      else if(type == "physician") {
        this.props.navigation.navigate('PhysSignUp');
      }
      
    }
  render() {
    return (
      <Container style = {{backgroundColor: "#92e66c"}}>
        <Header transparent>
            <Left>
            </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button hasText transparent onPress = {() => this.props.navigation.navigate("Auth")}>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
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
        <View style = {{justifyContent: 'center', alignItems: 'center'}}> 
            <Text style = {styles.iamtext}>I am a...</Text>
            <Button style = {styles.roleBtn} onPress = {() => this.handlePress("patient")}><Text style = {styles.roletxt}>Patient</Text></Button>
            <Button style = {styles.roleBtn} onPress = {() => this.handlePress("parent")}><Text style = {styles.roletxt}>Parent</Text></Button>
            <Button style = {styles.roleBtn} onPress = {() => this.handlePress("physician")}><Text style = {styles.roletxt}>Physician</Text></Button>
        </View>
      </Container>
    );
  }
}