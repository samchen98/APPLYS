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
  import styles from '../styles/SurveyStyles'
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
                <View style={styles.qmaindiv}>
        
                  <View style={styles.qdiv}>
                    <Text >Question {this.props.questiongroup.id}:</Text>
                  
                    <Text style={{height: '75%'}}> {this.props.questiongroup.question}</Text>
                  </View>
                  
                  <View style={styles.btndiv}>
                      <Button
                          onPress = {() => this.handleClick(0)}
                          style = {{borderColor:'#7303fc',
                          borderWidth:2, margin: 5, backgroundColor:
                            this.state.selectedans === 0
                                ? "#7303fc"
                                : "white" }}>
                          <Text style = {styles.anstext}> {this.props.answerarr[0]} </Text>
                      </Button>
                      <Button
                           style = {{borderColor:'#7303fc',
                           borderWidth:2, margin: 5, backgroundColor:
                            this.state.selectedans === 1
                                ? "#7303fc"
                                : "white"}}
                          onPress = {() => this.handleClick(1)}>
                          <Text style = {styles.anstext}> {this.props.answerarr[1]}  </Text>
                      </Button>
                      <Button
                           style = {{borderColor:'#7303fc',
                           borderWidth:2, margin: 5, backgroundColor:
                            this.state.selectedans === 2
                                ? "#7303fc"
                                : "white"}}
                          onPress = {() => this.handleClick(2)}>
                          <Text style = {styles.anstext}> {this.props.answerarr[2]}  </Text>
                      </Button>
                      <Button
                           style = {{borderColor:'#7303fc',
                           borderWidth:2, margin: 5, backgroundColor:
                            this.state.selectedans === 3
                                ? "#7303fc"
                                : "white"}}
                          onPress = {() => this.handleClick(3)}>
                          <Text style = {styles.anstext}> {this.props.answerarr[3]}  </Text>
                      </Button>

                      
                      

                  </View>
                  <View style={styles.subbtndiv}>
                      <Button
                          style = {styles.submitbtn}
                          onPress = {() => this.handleSubmit(true)}>
                          <Text style = {styles.submittext}> Submit </Text>
                      </Button>
                      <Button
                          style = {styles.submitbtn}
                          onPress = {() => this.handleSubmit(false)}>
                          <Text style = {styles.submittext}> Don't Know </Text>
                      </Button>
                      </View>
                  
              </View>
                  
            )
       
        
          
      }
}