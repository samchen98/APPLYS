import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Text,
  StyleSheet,
  View,
} from 'react-native';


export default class Logo extends React.Component {
    render(){
        return(
            <Text style={{ fontFamily: "indie-flower", fontSize: 90 }}>STARx</Text>
        )
    }
}