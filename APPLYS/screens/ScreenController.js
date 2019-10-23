import * as WebBrowser from 'expo-web-browser';
import React from 'react';
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
import styles from './Styles.js'
import Survey from './Survey.js'

export default class ScreenController extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            page: this.props.page
        };
    }
    render() {
        if(this.state.page == "survey") {
            return(
                <Survey/>
            )
        }
        else if(this.state.page == "passport") {
            return(
                <Passport/>
            )
        }
        else if(this.state.page == "infographics") {
            return(
                <Text>infographics</Text>
            )
        }
    }
}