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
import {Button} from 'native-base'
import Survey from '../screens/Survey'
import styles from '../styles/SurveyStyles.js'
export default class FeedbackGenerator extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          correct: this.props.correct
        };
    }

    handlePress = () => {
        return(
            <Survey/>
        )
    }

    render(){
        if(this.state.correct){
            return(
                <View style={styles.maindiv}>
                    <Text style={styles.cortext}> Correct! </Text>
                    <Text style={styles.feedbacktext}> {this.props.feedback} </Text>
                    <Button style={styles.nextbtn} onPress = {this.props.updateQuestion}><Text style={styles.nextbtnfont} >Continue</Text></Button>
                </View>
            )
        }
        else{
            return(
                <View style={styles.maindiv}>
                    <Text style={styles.incortext}> Incorrect! </Text>
                    <Text style={styles.feedbacktext}> {this.props.feedback} </Text>
                    <Button  style={styles.nextbtn} onPress = {this.props.updateQuestion}><Text style={styles.nextbtnfont}>Continue</Text></Button>
                </View>
            )
        }
        
    }
}