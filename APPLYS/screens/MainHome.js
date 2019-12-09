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
            fname: '',
            lname:'',
            email:'',
            physemail:''
        };
    }

    static navigationOptions = {
        title: 'Home',
    };

    async componentDidMount() {
        try {
            const fname = await AsyncStorage.getItem('fname');
            const lname = await AsyncStorage.getItem('lname');
            const email = await AsyncStorage.getItem('email');
            const physemail = await AsyncStorage.getItem('physemail');
            this.setState({fname: fname, lname: lname, email:email, physemail: physemail})
          } catch (error) {
              console.log(error.message);
          }
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render(){
        return(
            <View style = {styles.maindiv}>
                <View style={{flexDirection:"row"}}>
                <View style ={styles.infodiv} >
                    <Text style={ styles.maintext}>{this.state.fname} {this.state.lname}</Text> 
                    <Text>Physician's Email: {this.state.physemail}</Text>
                </View>
                </View>

                <ScrollView horizontal={true}
                pagingEnabled={true}>
                    <View style={styles.buttondiv}>
                    <TouchableOpacity
                        style = {styles.roleBtn}
                    onPress = {() => this.props.navigation.navigate("Survey", {email: this.state.email})}>
                    <Text style = {styles.roletxt}> Survey </Text>
                </TouchableOpacity>
                
                    
                <TouchableOpacity
                        style = {styles.roleBtn}
                    onPress = {() => this.props.navigation.navigate("Infographics")}>
                    <Text style = {styles.roletxt}> Infographics </Text>
                </TouchableOpacity>
                    </View>
                
                </ScrollView>

                
                <TouchableOpacity
                        style = {styles.roleBtn}
                    onPress = {this._signOutAsync}>
                    <Text style = {styles.roletxt}> Sign Out </Text>
                </TouchableOpacity>
                    
                
            </View>
            
            
        )
        
    }
}
