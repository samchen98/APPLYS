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
                <View>
                    <Text> Correct! </Text>
                    <Text> {this.props.feedback} </Text>
                    <Button onPress = {this.props.updateQuestion}><Text>Continue</Text></Button>
                </View>
            )
        }
        else{
            return(
                <View>
                    <Text> Incorrect! </Text>
                    <Text> {this.props.feedback} </Text>
                    <Button onPress = {this.props.updateQuestion}><Text>Continue</Text></Button>
                </View>
            )
        }
        
    }
}