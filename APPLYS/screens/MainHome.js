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
                        <View style={{flexDirection:"row"}}>
                        <View style ={styles.infodiv} >
                            <Text style={ styles.maintext}>Patient: Name {"\n"} Date of Birth{"\n"} Hospital{"\n"}Last Checkin</Text> 
                            {/* <Text style={ styles.maintext}>Date of Birth \n</Text>
                            <Text style={ styles.maintext}>Hospital \n</Text>
                            <Text style={ styles.maintext}>Last Checkin \n</Text> */}
                        </View>
                        </View>

                        <ScrollView horizontal={true}
                        pagingEnabled={true}>
                            <View style={styles.buttondiv}>
                            <TouchableOpacity
                             style = {styles.roleBtn}
                            onPress = {() => this.props.navigation.navigate("Survey")}>
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
