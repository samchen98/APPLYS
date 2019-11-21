import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput
  } from 'react-native';
import styles from './Styles.js'
import {Button} from 'native-base'
import QuestionGenerator from '../components/QuestionGenerator.js';
import MainHome from './MainHome.js';
import FeedbackGenerator from '../components/FeedbackGenerator.js';
const questions = require('../surveyquestions/questions.json');

export default class Survey extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          qnum : 0,
          answerarr: [],
          isQuestion: true,
          correct : true
        };
    }

    getAnswers = () => {
      var answerarr = []
      var answers = questions.question[this.state.qnum].answers
      answers.map(function(answer){
        answerarr.push(answer)        
      })
      return answerarr
    }

    getFeedback = () => {
      console.log(this.state.isQuestion)
      this.setState({isQuestion: !this.state.isQuestion})
    }
    updateQuestion = () => {
      this.setState({isQuestion: !this.state.isQuestion, qnum : this.state.qnum + 1})
    }
    
    render(){
      if(questions.question.length > this.state.qnum) {
        if(this.state.isQuestion){
          var answerarr = this.getAnswers()
          return(
            <QuestionGenerator getFeedback = {this.getFeedback} questionnum = {this.state.qnum} question = {questions.question[this.state.qnum].prompt} answerarr = {answerarr} />
          )
        }
        else{
          return(
            <FeedbackGenerator updateQuestion = {this.updateQuestion} feedback = {questions.question[this.state.qnum].feedback}/>
          )
        }
      }
      else{
        return(
          <MainHome/>
        )
      }
    }
}





//Route to add questions for testing:
// const questionsid = {
//   id: 1,
//   question: "what did the fox say?"
// };
// const temp = config.serversite;

// axios.post(config.serversite + '/questions/getquestion', questionsid)
// .then(res => {console.log(res)
// }
// )



// Route to get questions from ID


// const questionsid = {
//   id: 1,
//   question: "what did the fox say?"
// };
// const temp = config.serversite;

// axios.post(config.serversite + '/questions/getquestion', questionsid)
// .then(res => {console.log(res.data)
// }
// )
