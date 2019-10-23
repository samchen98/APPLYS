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
import {Button} from 'native-base'
//

export default class Passport extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            passport: true
        };
    }
    handleClick = (type) => {
        this.setState({page: type})
    }
    render(){
        if(this.state.passport){
            return(
              <View style={{height: '100%', backgroundColor: '#43D51E'}}>
                  <Button title= 'Back'/>
                  <View>
                      <text>name:
                          Age:
                      </text>
                  <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
                  </View>
                  <View style={{height: '30%'}}>
                      <text>condition and description </text>  
                  </View>
                  
                  <View style={{height: '30%'}}>
                    <text>list of medications:</text>
                  </View>
                
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

const styles1 = StyleSheet.create({
  qbackground:{
    backgroundColor: '#43D51E'

  },
  button:{
    backgroundColor: '#000000',
    borderColor: '#fff'
  }
});