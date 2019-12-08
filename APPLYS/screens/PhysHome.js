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


export default class PhysHome extends React.Component{
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Home',
    };
    
    render(){
        return(
            <View style = {styles.container}>
                <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                    <View style = {styles.container}>
                        <Text>PHYSICIAN SCREEN</Text>
                        <Button onPress = {() => this.props.navigation.navigate('ManageSurv')}><Text>Manage Survey Questions</Text></Button>
                        <Button onPress = {() => this.props.navigation.navigate('Patients')}><Text>Manage Patients</Text></Button>
                    </View>
                    
                </ScrollView>
            </View>
            
        )
        
    }
}
