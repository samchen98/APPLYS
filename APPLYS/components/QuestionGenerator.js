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
          answerarr: [],
          selectedans: -1,
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //need to do axios call to determine if answer is correct or not; then return correct/incorrect back to survey page
    handleSubmit(know){
        if(!know){
            this.props.getFeedback(false)
        }
        else{
            if(this.props.questiongroup.correctanswer == this.state.selectedans){
                this.props.getFeedback(true)
            }
            else{
                this.props.getFeedback(false)
            }
        }
        
    }
    handleClick = (ans) => {
        this.setState({selectedans: ans})
    }
    render(){
            return(
                <View style={{height: '100%'}}>
        
                  <View style={{height: '30%', backgroundColor: '#43D51E'}}>
                    <Text >Question {this.props.questiongroup.id}:</Text>
                  
                    <Text style={{height: '75%'}}> {this.props.questiongroup.question}</Text>
                  </View>
                  
                  <View>
                      <Button
                          onPress = {() => this.handleClick(0)}
                          style = {{backgroundColor:
                            this.state.selectedans === 0
                                ? "red"
                                : "grey"}}>
                          <Text style = {styles.submitButtonText}> {this.props.answerarr[0]} </Text>
                      </Button>
                      <Button
                           style = {{backgroundColor:
                            this.state.selectedans === 1
                                ? "red"
                                : "grey"}}
                          onPress = {() => this.handleClick(1)}>
                          <Text style = {styles.submitButtonText}> {this.props.answerarr[1]}  </Text>
                      </Button>
                      <Button
                           style = {{backgroundColor:
                            this.state.selectedans === 2
                                ? "red"
                                : "grey"}}
                          onPress = {() => this.handleClick(2)}>
                          <Text style = {styles.submitButtonText}> {this.props.answerarr[2]}  </Text>
                      </Button>
                      <Button
                           style = {{backgroundColor:
                            this.state.selectedans === 3
                                ? "red"
                                : "grey"}}
                          onPress = {() => this.handleClick(3)}>
                          <Text style = {styles.submitButtonText}> {this.props.answerarr[3]}  </Text>
                      </Button>
                  </View>
                  <View>
                      <Button
                          style = {styles.questionSubmitButton}
                          onPress = {() => this.handleSubmit(true)}>
                          <Text style = {styles.submitButtonText}> Submit </Text>
                      </Button>
                      <Button
                          style = {styles.questionSubmitButton}
                          onPress = {() => this.handleSubmit(false)}>
                          <Text style = {styles.submitButtonText}> Don't Know </Text>
                      </Button>
                  </View> 
              </View>
                  
            )
       
        
          
      }
}