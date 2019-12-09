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
            <View>
                <Text>Survey Complete!</Text>
                <Text>Your Score: {this.props.cor}/{this.props.tot}</Text>
                <Button onPress = {() => this.props.navigation.navigate('Home')}><Text>Back to Home</Text></Button>
            </View>
        )
    }
}
export default withNavigation(SurveyDone);
