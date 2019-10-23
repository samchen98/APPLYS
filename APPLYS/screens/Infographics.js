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
import {Button} from 'native-base'
//

export default class Infographics extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            survey: true
        };
    }
    handleClick = (type) => {
        this.setState({page: type})
    }
    render(){
        return(
            <Text> info</Text>
        )
    }
}






