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
const config = require("../config")

export default class ManagePatients extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        }
    }
    static navigationOptions = {
        title: 'Manage Survey',
    };

    componentDidMount() {
        axios.get(config.serversite + '/questions/getquestion', {
            params: {
              id: this.state.id
            }
          })
          .then((response) =>{
            console.log(response.data.message);
            if(response.data.message == undefined) {
              this.setState({isEnd: true})
            }
            else{
              this.setState({questiongroup: response.data.message, answerarr: response.data.message.answers, id : this.state.id + 1})
            } 
          })
          .catch(function (error) {
            // handle error
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
                        <Text>MANAGE Survey SCREEN</Text>
                        <Button><Text>Add a survey question</Text></Button>
                        
                    </View>
                    
                </ScrollView>
            </View>
            
        )
        
    }
}
