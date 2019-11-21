import {
    Platform,
    ScrollView,
    StyleSheet,
  } from 'react-native';
import { Left } from 'native-base';

export default StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        width: 250,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      dobPicker: {
          width: 250, 
          paddingVertical: 4,
          paddingHorizontal: 10,
          borderColor: "white",
      },
      formContainer: {
          marginBottom: 20,
      },
      formItem: {
          marginBottom: 10
      },
      roleBtn: {
        padding: 10,
        margin: 15,
        height: 90,
        alignContent: "center"
      },
      roletxt:{
        textAlign: "center",
        fontSize: 30
      },
      iamtext:{
        margin: 20,
        fontSize: 40,
        textAlign: "center"
      },
})