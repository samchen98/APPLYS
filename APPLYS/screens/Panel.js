import React from 'react';
import {
    StyleSheet,Text,View,Image,TouchableHighlight,Animated
    } from 'react-native'; //Step 1
import { TrackingConfigurations } from 'expo/build/AR';

class Panel extends React.Component{
    constructor(props){
        super(props);
        this.icons = {     //Step 2
            'up'    : require('../assets/images/robot-dev.png'),
            'down'  : require('../assets/images/robot-prod.png')
        };

        this.state = {       //Step 3
            title: props.title,
            expanded    : true,
            animation   : new Animated.Value(),
            first : true,
        };
    }

    toggle(){
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
        finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded  //Step 2
        });

        this.state.animation.setValue(initialValue);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }
    
    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }

    // attach = () => {
    //     if(this.state.first == true && this.state.expanded == true){
    //         this.setState({first: false})
    //         return(
    //             <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
    //                 {this.props.children}
    //             </View>
    //         )
            
    //     }
    // }


    render(){
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];   //Step 4
        }

        //Step 5
        return ( 
            <Animated.View style={[styles.container,{height: this.state.animation}]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>

            </Animated.View>
        );
    }
}
var styles = StyleSheet.create({
    container   : {
        backgroundColor: '#fff',
        margin:10,
        overflow:'hidden'
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    }
});

export default Panel;