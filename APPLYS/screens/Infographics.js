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
    WebView
  } from 'react-native';
import styles from './Styles.js'
import {Button} from 'native-base'
//

export default class Infographics extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            survey: true
        };
    }
    componentDidMount() {
        Linking.openURL('https://simplebooklet.com/embed.php?wpKey=OMxyro9O0hGQRTvnIhmMOg&source=embed').catch(err => console.error('An error occurred', err));
    }
    handleClick = (type) => {
        this.setState({page: type})
    }
    render(){
        return(
                <Image source={{uri:'https://simplebooklet.com/embed.php?wpKey=OMxyro9O0hGQRTvnIhmMOg&source=embed'}} style={{marginTop: 20,
                maxHeight: 200,
                width: 320, height: 320}}/>
            
        )
    }
}






