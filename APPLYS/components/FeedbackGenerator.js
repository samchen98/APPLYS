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

export default class FeedbackGenerator extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          correct: true
        };
    }

    render(){
        if(this.state.correct){
            return(
                <View>
                    <Text> Correct! </Text>
                    <Text> {this.props.feedback} </Text>
                    <Button onPress = {this.props.updateQuestion}><Text>Next</Text></Button>
                </View>
            )
        }
        else{
            return(
                <View>
                    <Text> Incorrect! </Text>
                    <Text> {this.props.feedback} </Text>
                </View>
            )
        }
        
    }
}