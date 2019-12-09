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
import styles from '../styles/PhysStyle'
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

    addQuestion() {

    }

    render(){
        console.log(this.state.qarr)
        return(
            <View style = {styles.container}>
                <ScrollView
                style={styles.container}
                >
                    <View style = {styles.container}>
                        <Button style = {{marginBottom: 10, backgroundColor: "#7303fc", justifyContent: 'center'}} onPress = {() => this.addQuestion()}><Text>Add New Question</Text></Button>
                        <ScrollView style={styles.container}>
                            {this.state.qarr.map(bundle =>
                            <Panel style = {{fontFamily: 'nunito'}} key = {bundle.question} title={bundle.question}>
                                <Text style = {{fontFamily: 'nunito-bold'}}>Answer Choices:</Text>
                                {bundle.answers.map(answer =>
                                    <Text style = {{fontFamily: 'nunito'}} key = {answer}>{answer}</Text>
                                ) }
                                <View style = {{flexDirection: 'row'}}>
                                    <Button style = {{backgroundColor: "#7303fc"}}><Text style = {{fontFamily: 'nunito'}}>Edit</Text></Button>
                                    <Button style = {{backgroundColor: "white", borderWidth: 1, borderColor: "#7303fc"}}><Text style = {{fontFamily: 'nunito', color: "#7303fc"}}>Delete</Text></Button>
                                </View>
                                <View
                                key ={bundle}
                                style={{
                                paddingTop: 8,
                                  borderBottomColor: '#7303fc',
                                  borderBottomWidth: 1,
                                }}
                              />
                            </Panel>) }
                            
                        </ScrollView>
                    </View>
                    
                </ScrollView>
            </View>
            
        )
        
    }
}