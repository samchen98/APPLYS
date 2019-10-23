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
import {Button} from 'native-base'
//

export default class Survey extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
        };
    }
    handleClick = (type) => {
        this.setState({page: type})
    }
    render(){
      return(
        <View style={{height: '100%', backgroundColor: '#43D51E'}}>

          <View>
            <Text >Question 1 </Text>
          
          <Text style={{height: '75%'}}> question goes here</Text>
          </View>
          
          
          <View  style={{ marginBottom: 0}}>
                      <TouchableOpacity
                          style = {styles.questionButton}
                          onPress = {() => this.handleClick("passport")}>
                          <Text style = {styles.submitButtonText}> Yes </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style = {styles.questionButton}
                          onPress = {() => this.handleClick("passport")}>
                          <Text style = {styles.submitButtonText}> Somewhat </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style = {styles.questionButton}
                          onPress = {() => this.handleClick("passport")}>
                          <Text style = {styles.submitButtonText}> No </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          style = {styles.questionSubmitButton}
                          onPress = {() => this.handleClick("passport")}>
                          <Text style = {styles.submitButtonText}> Submit </Text>
                      </TouchableOpacity>
          
          </View>
        
        </View>
          
      )
        
    }
}

const styles1 = StyleSheet.create({
  qbackground:{
    backgroundColor: '#43D51E'

  },
  button:{
    backgroundColor: '#000000',
    borderColor: '#fff'
  }
});





