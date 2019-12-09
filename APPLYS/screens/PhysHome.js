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
import { Button, Icon, Title, Text } from 'native-base';
import styles from '../styles/MainHomeStyles'
import LogoHeader from '../assets/images/LogoHeader';
import axios from 'axios';
const config = require("../config")
import Carousel from 'react-native-snap-carousel';

export default class PhysHome extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            fname: '',
            lname: '',
            email: ''
        }
    }
    static navigationOptions = {
        title: 'Home',
    };

    async getIt() {
        if(this.state.fname == ''){
        try {
            const physinfo = await AsyncStorage.getItem('physinfo');
            const pi = JSON.parse(physinfo)
            this.setState({fname: pi.fname, lname: pi.lname, email: pi.email})
          } catch (error) {
              console.log(error.message);
          }
        }
    }
    
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render(){
        this.getIt()
        return(
            <View style = {styles.maindiv}>
                <View style ={styles.infodiv} >
                    <Text style={ styles.maintextPhys}>Welcome, </Text>
                    <Text style={ styles.maintext}>{this.state.fname} {this.state.lname}</Text> 
                    <Button style = {styles.signout} onPress={() => this._signOutAsync()} title= "Sign Out"><Text style = {styles.signouttxt}>Sign Out</Text></Button>
                </View>
                <View style={styles.buttondivphys}>
                    <Button style = {styles.physBtn} onPress = {() => this.props.navigation.navigate('ManageSurv')}><Text style = {styles.physBtnText}>Manage Survey Questions</Text></Button>
                    <Button style = {styles.physBtn} onPress = {() => this.props.navigation.navigate('Patients', {email: this.state.email})}><Text style = {styles.physBtnText}>Manage Patients</Text></Button>
    
                </View>
                    
            </View>
            
        )
        
    }
}
