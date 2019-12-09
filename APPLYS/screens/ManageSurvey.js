import * as WebBrowser from 'expo-web-browser';
import {AsyncStorage} from 'react-native';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    View,
    TextInput
} from 'react-native';
import styles from './Styles.js'
import { Button, Icon, Title, Text } from 'native-base';
import Panel from './Panel'
import axios from 'axios';
const config = require("../config")
var qarr = []

export default class ManagePatients extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            qarr: [],
        }
    }
    static navigationOptions = {
        title: 'Manage Survey',
    };

    componentDidMount(){
        axios.get(config.serversite + '/questions/getAllQuestions')
          .then((response) =>{
            this.setState({qarr: response.data.questions})
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    render(){
        console.log(this.state.qarr)
        return(
            <View style = {styles.container}>
                <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                    <View style = {styles.container}>
                        <Text>MANAGE Survey SCREEN</Text>
                        <Button><Text>Add a survey question</Text></Button>
                        <ScrollView style={styles.container}>
                            {this.state.qarr.map(bundle =>
                            <Panel title={bundle.question}>
                                <Text>Answer Choices:</Text>
                                {bundle.answers.map(answer =>
                                    <Text>{answer}</Text>
                                ) }
                                <Button><Text>Edit Question</Text></Button>
                                <Button><Text>Delete Question</Text></Button>
                            </Panel>) }
                            
                        </ScrollView>
                    </View>
                    
                </ScrollView>
            </View>
            
        )
        
    }
}
