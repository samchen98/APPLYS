import {
    Platform,
    ScrollView,
    StyleSheet,
  } from 'react-native';
import { Left } from 'native-base';

export default StyleSheet.create({

      roleBtn: {
        padding: 30,
        margin: 30,
        height: 90,
        width: 300,
        backgroundColor: "white",
        textAlign: "center",
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOpacity: 0.7,
        elevation: 3,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 13},
        color:"#071073",
      },
      roletxt:{
        textAlign: "center",
        fontSize: 30,
        color: "black",
        
        
      },
     
      maindiv:{
        backgroundColor: '#7303FC', 
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
      },
      maintext:{
          padding: 20,
          fontSize:40,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: 'black',
          fontFamily: "Indie Flower",


      }
})