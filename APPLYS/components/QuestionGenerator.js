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
import styles from "../screens/Styles"
import {Button} from 'native-base'

export default class QuestionGenerator extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          answerarr: []
        };
    }
    //need to do axios call to determine if answer is correct or not; then return correct/incorrect back to survey page
    // handleSubmit(){
    //     this.props.getFeedback()
    // }
    render(){
            return(
                <View style={{height: '100%'}}>
        
                  <View style={{height: '30%', backgroundColor: '#43D51E'}}>
                    <Text >Question {this.props.questionnum + 1}:</Text>
                  
                    <Text style={{height: '75%'}}> {this.props.question}</Text>
                  </View>
                  
                  <View>
                      <Button
                          onPress = {() => this.handleClick("passport")}>
                          <Text style = {styles.submitButtonText}> {this.props.answerarr[0]} </Text>
                      </Button>
                      <Button
                          style = {styles.questionButton}
                          onPress = {() => this.handleClick("passport")}>
                          <Text style = {styles.submitButtonText}> {this.props.answerarr[1]}  </Text>
                      </Button>
                      <Button
                          style = {styles.questionButton}
                          onPress = {() => this.handleClick("passport")}>
                          <Text style = {styles.submitButtonText}> {this.props.answerarr[2]}  </Text>
                      </Button>
                      <Button
                          style = {styles.questionSubmitButton}
                          onPress = {() => this.handleClick("passport")}>
                          <Text style = {styles.submitButtonText}> {this.props.answerarr[3]}  </Text>
                      </Button>
                  </View>
                  <View>
                      <Button
                          style = {styles.questionSubmitButton}
                          onPress = {this.props.getFeedback}>
                          <Text style = {styles.submitButtonText}> Submit </Text>
                      </Button>
                      <Button
                          style = {styles.questionSubmitButton}
                          onPress = {() => this.handleClick("passport")}>
                          <Text style = {styles.submitButtonText}> Don't Know </Text>
                      </Button>
                  </View> 
              </View>
                  
            )
       
        
          
      }
}