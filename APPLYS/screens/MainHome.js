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
import ScreenController from './ScreenController'


export default class MainHome extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            page: ""
        };
    }
    handleClick = (type) => {
        this.setState({page: type})
    }
    render(){
        if(this.state.page == ""){
            return(
                <View style = {styles.container}>
                    <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                        <View style = {styles.container}>
                            <Text>gbjkkjbj</Text>
                            <TouchableOpacity
                                style = {styles.submitButton}
                                onPress = {() => this.handleClick("survey")}>
                                <Text style = {styles.submitButtonText}> Survey </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style = {styles.submitButton}
                                onPress = {() => this.handleClick("passport")}>
                                <Text style = {styles.submitButtonText}> Medical Passport </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style = {styles.submitButton}
                                onPress = {() => this.handleClick("infographics")}>
                                <Text style = {styles.submitButtonText}> Infographics </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </ScrollView>
          
              
              </View>
                
            )
        }
        else{
            return(
                <ScreenController page ={this.state.page}/>
            )
            
        }
        
    }
}
