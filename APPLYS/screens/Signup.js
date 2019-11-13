import React from 'react';
import {
    Image,
    Platform,
    Picker,
    Text,
    View,
    TextInput,
    DatePickerIOS
  } from 'react-native';
import styles from './Styles.js'
import {Button} from 'native-base'
import DatePicker from 'react-native-datepicker'
import RNPickerSelect from 'react-native-picker-select';


export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname: "",
            lname: "",
            dob: "2000-01-01",
            sex: "",
            hospital: "",
            email: "",
            password: "",
            diagnosis: [],
            allergies: [],
            medications: []
        }
    }
  //   static navigationOptions = {
  //     title: 'Sign Up',
  //   };
  //   handleEmail = (text) => {
  //       this.setState({ email: text })
  //   }
  //   handlePassword = (text) => {
  //       this.setState({ password: text })
  //   }
  //   _createaccount = async () => {
  //     await AsyncStorage.clear();
  //     this.props.navigation.navigate('Auth');
  // };
  
  //   login = (email, pass) => {
  //       console.log("hello")
  //     const newUser = {
  //       email: email,
  //       password: pass
  //     };
  //     axios.post('http://localhost:4003/users/add', newUser)
  //     .then(res => console.log(res.data));
  //       // alert('email: ' + email + ' password: ' + pass)
  //   }
    render() {
        return(
            <View>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "First Name"
                  placeholderTextColor = "#000000"
                  autoCapitalize = "words"
                  onChangeText={fname => this.setState({ fname })}
                  value= {this.state.fname}/>
                  
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Last Name"
                placeholderTextColor = "#000000"
                autoCapitalize = "words"
                onChangeText = {lname => this.setState({ lname })}
                value= {this.state.lname}/>

                <Text>Date of Birth: </Text>
                <DatePicker
                style={{marginRight: 0}}
                date={this.state.dob}
                mode="date"
                placeholder="Date of Birth"
                format="YYYY-MM-DD"
                minDate="1980-01-01"
                maxDate="2010-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                showIcon = {false}
                onDateChange={(date) => {this.setState({dob: date})}}/>

                <RNPickerSelect
                    style = {styles.input}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Female', value: 'female' },
                        { label: 'Male', value: 'male' },
                    ]}/>

                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#000000"
                    autoCapitalize = "none"
                    onChangeText={email => this.setState({ email })}
                    value= {this.state.email}/>
                    
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#000000"
                autoCapitalize = "none"
                onChangeText = {password => this.setState({ password })}
                value= {this.state.password}/>


                <Button><Text>Submit</Text></Button>
            </View>
        )
    }
}