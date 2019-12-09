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
import axios from 'axios';
const config = require("../config")
import Panel from './Panel'

export default class ManagePatients extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            parr: [],
            email: this.props.navigation.getParam('email', 'default value'),
        }
    }
    static navigationOptions = {
        title: 'Manage Patients',
    };

    componentDidMount(){
        console.log(this.state.email)
        axios.get(config.serversite + '/users/getAllPatients',{
            params: {
                physemail: this.state.email
            }
        })
          .then((response) =>{
              console.log(response)
            this.setState({parr: response.data.message})
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    render(){
        return(
            <View style = {styles.container}>
                <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                    <View style = {styles.container}>
                        <ScrollView>
                            {this.state.parr.map(bundle =>
                                <Panel key={bundle.fname} title= {bundle.fname.concat(" " , bundle.lname)}>
                                    <Text style = {{fontFamily: 'nunito'}} key = {bundle.email}>Email: {bundle.email}</Text>
                                    <Text style = {{fontFamily: 'nunito'}} key={bundle.surveyScore}>Score: {bundle.surveyScore}</Text>
                                    <Text style = {{fontFamily: 'nunito-bold', marginTop: 5}} key={bundle.surveyScore}>Missed Questions:</Text>
                                    {bundle.incorrectAns.map(q =>
                                    <Text style = {{fontFamily: 'nunito'}} key ={q}>{q}</Text>
                                ) }
                                <View
                                key ={bundle}
                                style={{
                                paddingTop: 8,
                                  borderBottomColor: '#7303fc',
                                  borderBottomWidth: 1,
                                }}
                              />
                                </Panel>
                                ) }
                        </ScrollView>
                    </View>
                    
                </ScrollView>
            </View>
            
        )
        
    }
}