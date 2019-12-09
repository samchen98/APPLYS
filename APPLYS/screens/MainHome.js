import * as WebBrowser from 'expo-web-browser';
import {AsyncStorage} from 'react-native';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    Dimensions,
    View,
    TextInput
  } from 'react-native';
import {Icon, Title, Container, Header, Left, Body, Right, Button} from 'native-base';
import axios from 'axios';
const config = require("../config")
import Carousel from 'react-native-snap-carousel';
  

import styles from '../styles/MainHomeStyles'
import { tsConstructorType } from '@babel/types';
import LogoHeader from '../assets/images/LogoHeader';

export default class MainHome extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            fname: '',
            lname:'',
            email:'',
            physemail:'',
            score: '',
            incorrect:[]
        };
    }

    static navigationOptions =({ navigation })=> {
        return {
            headerTitle: () =>  <LogoHeader />,
            
        };
      };

    async componentDidMount() {
        try {
            const fname = await AsyncStorage.getItem('fname');
            const lname = await AsyncStorage.getItem('lname');
            const email = await AsyncStorage.getItem('email');
            const physemail = await AsyncStorage.getItem('physemail');
            const score = await AsyncStorage.getItem('score');
            const incorrect = await AsyncStorage.getItem('incorrect');
            this.setState({fname: fname, lname: lname, email:email, physemail: physemail, score: score, incorrect: JSON.parse(incorrect)})
          } catch (error) {
              console.log(error.message);
          }
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    navigate(press) {
        if(press == "Survey"){
            this.props.navigation.navigate('Survey', {email: this.state.email})
        }
    }

    surveyRender = () =>{
        console.log()
        axios.get(config.serversite + '/users/getInfo',{
            params: {
                email: this.state.email
            }
        })
          .then((response) =>{
              console.log(response)
            this.setState({score: response.data.message.score})
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    getFeed(){
        if(this.state.incorrect != null && this.state.incorrect.length != 0){
            return(
                this.state.incorrect.map(bundle =>
                    <Text key = {bundle} style = {[styles.surveyinfoText, {fontFamily: 'nunito'}]}>- {bundle}</Text>
            )
            )
        }
    }
    _renderItem = ({item, index}) => {
        if(item == "Survey"){
           // () => this.surveyRender()
            return (
                
                <View style={styles.cpage}>
                    <Text style={styles.title}>{item}</Text>
                    <Text style = {styles.score}>Your Score: {this.state.score}</Text>
                    <View style = {styles.surveyinfo}>
                        <Text style = {[styles.surveyinfoText, {fontFamily: 'nunito-bold'}]}>Information to Review:</Text>
                        <ScrollView>
                            {this.getFeed()}
                        </ScrollView>
                    </View>
                    <Button style = {styles.roleBtn}
                        onPress = {() =>  this.props.navigation.navigate('Survey', {email: this.state.email})}>
                            <Text style = {styles.roletxt}>Take the Survey</Text>
                        </Button>
                </View>
            );
        }
        else if(item == "Info"){
            return (
                <View style={styles.cpage}>
                    <Text style={styles.title}>{item}</Text>
                    <Button style = {styles.roleBtn}
                        onPress = {() =>  this.props.navigation.navigate('Infographics', {email: this.state.email})}>
                            <Text style = {styles.roletxt}> {item} </Text>
                        </Button>
                </View>
            );
        }
        else{
            return (
                <View style={styles.cpage}>
                    <Text style={styles.title}>{item}</Text>
                    <Button style = {styles.roleBtn}
                        onPress = {() =>  this.props.navigation.navigate('Infographics', {email: this.state.email})}>
                            <Text style = {styles.roletxt}> {item} </Text>
                        </Button>
                </View>
            );
        }
        
    }

   
    render(){
        return(
            <View style = {styles.maindiv}>
                <View style ={styles.infodiv} >
                    <Text style={ styles.maintext}>{this.state.fname} {this.state.lname}</Text> 
                    <Text style = {{paddingLeft: 15, fontFamily: 'nunito', fontSize:20,}}>Physician's Email: {this.state.physemail}</Text>
                    <Button style = {styles.signout} onPress={() => this._signOutAsync()} title= "Sign Out"><Text style = {styles.signouttxt}>Sign Out</Text></Button>
                </View>
                
                <View style={styles.buttondiv}>
                <Carousel
                loop = {true}
                layout={'default'}
                ref={(c) => { this._carousel = c; }}
                data={["Survey", "Info"]}
                renderItem={this._renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={300}
                />
                </View>
                
                
            </View>
            
            
        )
        
    }
}
