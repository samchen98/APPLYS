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
import QuestionGenerator from '../components/QuestionGenerator.js';
import MainHome from './MainHome.js';
const questions = require('../surveyquestions/questions.json');

export default class Survey extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          qnum : 0,
          answerarr: []
        };
    }

    getAnswers = () => {
      var answerarr = []
      var answers = questions.question[this.state.qnum].answers
      answers.map(function(answer){
        console.log(answer)
        answerarr.push(answer)        
      })
      return answerarr
    }

    updateQuestion = () => {
      this.setState({qnum : this.state.qnum + 1})
    }
    
    render(){
      console.log(questions)
        if(questions.question.length > this.state.qnum){
          var answerarr = this.getAnswers()
          return(
            <QuestionGenerator updateQuestion = {this.updateQuestion} questionnum = {this.state.qnum} question = {questions.question[this.state.qnum].prompt} answerarr = {answerarr} />
          )
        }
        else{
          return(
            <MainHome/>
          )
        }
      
        
    }
}






