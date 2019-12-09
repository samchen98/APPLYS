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
        this.state ={
            fname: '',
            lname: '',
            email: ''
        }
    }
    static navigationOptions = {
        title: 'Home',
    };

    async componentDidMount() {
        try {
            const fname = await AsyncStorage.getItem('fname');
            const lname = await AsyncStorage.getItem('lname');
            const email = await AsyncStorage.getItem('email');
            this.setState({fname: fname, lname: lname, email: email})
          } catch (error) {
              console.log(error.message);
          }
    }
    
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render(){
        console.log(this.state.info)
        return(
            <View style = {styles.container}>
                <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                    <View style = {styles.container}>
                        <Text>PHYSICIAN SCREEN</Text>
                        <Text>Welcome, {this.state.fname} {this.state.lname}</Text>
                        <Button onPress = {() => this.props.navigation.navigate('ManageSurv')}><Text>Manage Survey Questions</Text></Button>
                        <Button onPress = {() => this.props.navigation.navigate('Patients', {email: this.state.email})}><Text>Manage Patients</Text></Button>
                        <Button
                            onPress = {this._signOutAsync}>
                            <Text style = {styles.roletxt}> Sign Out </Text>
                        </Button>
                    </View>
                    
                </ScrollView>
            </View>
            
        )
        
    }
}
