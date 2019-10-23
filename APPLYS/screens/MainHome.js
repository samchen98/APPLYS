import * as WebBrowser from 'expo-web-browser';
import {AsyncStorage} from 'react-native';
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


export default class MainHome extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            page: ""
        };
    }
    static navigationOptions = {
        title: 'Home',
    };
    handleClick = (type) => {
        this.setState({page: type})
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    render(){
        return(
            <View style = {styles.container}>
                <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                    <View style = {styles.container}>
                        <Text>THE HOME SCREEN</Text>
                        <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {() => this.props.navigation.navigate("Survey")}>
                            <Text style = {styles.submitButtonText}> Survey </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {() => this.props.navigation.navigate("Passport")}>
                            <Text style = {styles.submitButtonText}> Medical Passport </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {() => this.props.navigation.navigate("Infographics")}>
                            <Text style = {styles.submitButtonText}> Infographics </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {this._signOutAsync}>
                            <Text style = {styles.submitButtonText}> Sign Out </Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
        
            
            </View>
            
        )
        
    }
}
