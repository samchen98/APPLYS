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

export default class Passport extends React.Component{
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
                <Text>name:                  Age:
                </Text>
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
                <Text>condition and description </Text>  
            </View>
            
            <View style={{height: '30%'}}>
              <Text>list of medications:</Text>
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