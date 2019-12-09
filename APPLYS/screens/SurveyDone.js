import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {Button} from 'native-base'
import {
    Text,
    View,
  } from 'react-native';
import { withNavigation } from 'react-navigation'
import Survey from './Survey';
import axios from 'axios';
import styles from '../styles/SurveyStyles.js'
const config = require("../config")

class SurveyDone extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const obj = {
            email: this.props.email,
            incorrect: this.props.incorrect,
            score: this.props.cor.toString() + "/" + this.props.tot.toString()
        }
        axios.post(config.serversite + '/users/updateScore',obj)
        .then(res => {
            console.log(res.data)
        });
    }
    render(){
        
        return(
            <View style={styles.maindiv}>
                <Text style={styles.sdtext}>Survey Complete!</Text>
                <Text style={styles.scoretext}>Your Score: {this.props.cor}/{this.props.tot}</Text>
                <Button style={styles.homebtn} onPress = {() => this.props.navigation.navigate('Home')}><Text style={styles.homebtnfont}>Back to Home</Text></Button>
            </View>
        )
    }
}
export default withNavigation(SurveyDone);
