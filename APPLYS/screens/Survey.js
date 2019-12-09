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
import axios from 'axios';
import QuestionGenerator from '../components/QuestionGenerator.js';
import MainHome from './MainHome.js';
import FeedbackGenerator from '../components/FeedbackGenerator.js';
import SurveyDone from './SurveyDone'
//const questions = require('../surveyquestions/questions.json');
const config = require("../config")

export default class Survey extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          questiongroup: {},
          answerarr: [],
          isQuestion: true,
          correct : false,
          isEnd: false,
          id: 1,
          numCor: 0,
          numAns: 0,
          incorrect: [],
          email: this.props.navigation.getParam('email', 'default value'),
          incorrectFeed: []
        };
        this.getQuestions = this.getQuestions.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateQuestion = this.updateQuestion.bind(this)
        
    }

    componentDidMount() {
     // axios.get(config.serversite + '/questions/getSize')

      axios.get(config.serversite + '/questions/getquestion', {
        params: {
          id: this.state.id
        }
      })
      .then((response) =>{
        console.log(response.data.message);
        if(response.data.message == undefined) {
          this.setState({isEnd: true})
        }
        else{
          this.setState({questiongroup: response.data.message, answerarr: response.data.message.answers, id : this.state.id + 1})
        } 
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }

    getQuestions() {
      axios.get(config.serversite + '/questions/getquestion', {
        params: {
          id: this.state.id
        }
      })
      .then((response) =>{
        console.log("upd" + this.state.id)
        if(response.data.message == undefined) {
          this.setState({isEnd: true})
        }
        else{
          this.setState({questiongroup: response.data.message, answerarr: response.data.message.answers, id : this.state.id + 1})
        } 
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        if(this.state.isEnd == false){
          this.setState({isEnd: true})
        }
        
      })
    }

    getFeedback = (cor) => {
      if(cor){
        this.setState({correct: true, numAns : this.state.numAns + 1, numCor: this.state.numCor + 1, isQuestion: !this.state.isQuestion})
      }
      else{
        this.setState({correct: false, numAns : this.state.numAns + 1, isQuestion: !this.state.isQuestion, incorrect: [...this.state.incorrect, this.state.questiongroup.question], incorrectFeed: [...this.state.incorrectFeed, this.state.questiongroup.feedback]})
      }
    }

    updateQuestion = () => {
      this.setState({isQuestion: !this.state.isQuestion,})
      this.getQuestions()
    }
    
    render(){
      console.log(this.state.email)
      if(!this.state.isEnd) {
        if(this.state.isQuestion){
          return(
            <View>
              
            <QuestionGenerator getFeedback = {this.getFeedback} questiongroup = {this.state.questiongroup} answerarr = {this.state.answerarr} />
            </View>

          )
        }
        else{
          return(
            <FeedbackGenerator correct = {this.state.correct} feedback = {this.state.questiongroup.feedback} updateQuestion = {this.updateQuestion} />
          )
        }
      }
      else{
        return(
          <SurveyDone email = {this.state.email} incorrect = {this.state.incorrect}  incorrectFeed = {this.state.incorrectFeed} cor = {this.state.numCor} tot = {this.state.numAns}/>
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


// Route to delete questions for testing:
// axios.get(config.serversite + '/questions/removequestion', {
//   params: {
//     id: 1
//   }
// })
// .then(res => {console.log(res)
// }
// )



// Route to find number of items
// axios.get(config.serversite + '/questions/getsize')
//     .then(res => {console.log(res.data.count)
//     }
//     )