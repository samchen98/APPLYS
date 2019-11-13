import React from 'react';
import  { Component } from 'react';
import {Button} from 'native-base'
import {
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import styles from './Styles.js'
import layout from './LayoutStyles'

export default class SignupRole extends Component {
    handlePress(type) {
        if(type == "patient"){
            this.props.navigation.navigate('Sign');
        }
        
    }
    render(){
        return (
            <View>
                <Text>I am a...</Text>
                <Button onPress = {() => this.handlePress("patient")}><Text>Patient</Text></Button>
                <Button onPress = {() => this.handlePress("parent")}><Text>Parent</Text></Button>
                <Button onPress = {() => this.handlePress("physician")}><Text>Physician</Text></Button>
            </View>
        )
    }
}