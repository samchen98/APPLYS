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

export default class Survey extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            survey: true
        };
    }
    handleClick = (type) => {
        this.setState({page: type})
    }
    render(){
        if(this.state.survey){
            return(
              <View style={{height: '100%', backgroundColor: '#43D51E'}}>

                <View>
                  <Text >Question 1 </Text>
                
                <Text style={{height: '75%'}}> question goes here</Text>
                </View>
                
                
                <View  style={{ marginBottom: 0}}>
                <Button raised={true}  title= 'Yes' />
                <Button title= 'Somewhat'/>
                <Button title= 'No'/>
                <Button title= 'Submit'/>
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





