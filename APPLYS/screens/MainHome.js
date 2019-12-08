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
  

import styles from '../styles/MainHomeStyles'
import { tsConstructorType } from '@babel/types';



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
            <View style = {styles.maindiv}>
                <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                    <View style = {styles.container}>

                        <View><Text style={ styles.maintext}>Welcome</Text></View>
                    


                        <TouchableOpacity
                             style = {styles.roleBtn}
                            onPress = {() => this.props.navigation.navigate("Survey")}>
                            <Text style = {styles.roletxt}> Survey </Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {() => this.props.navigation.navigate("Passport")}>
                            <Text style = {styles.submitButtonText}> Medical Passport </Text>
                        </TouchableOpacity> */}
                         
                        <TouchableOpacity
                             style = {styles.roleBtn}
                            onPress = {() => this.props.navigation.navigate("Infographics")}>
                            <Text style = {styles.roletxt}> Infographics </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                             style = {styles.roleBtn}
                            onPress = {this._signOutAsync}>
                            <Text style = {styles.roletxt}> Sign Out </Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
        
            
            </View>
            
        )
        
    }
}
