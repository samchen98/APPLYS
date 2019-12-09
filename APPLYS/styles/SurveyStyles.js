import {
    Platform,
    ScrollView,
    StyleSheet,
  } from 'react-native';
import { Left } from 'native-base';

export default StyleSheet.create({
// QuestionGenerator.js
qmaindiv:{
  // backgroundColor: 'white', 
   //flex: 1, 
   //justifyContent: "center",
   //alignItems: "center",
  // display:'flex',
  // flexDirection:'column',
  height:'100%',
},
btndiv:{
  padding:5,
  //alignItems: "center",
  //display:'flex',
  height:'40%',
  //flexDirection:'column',
  //alignSelf:'flex-end',
},
subbtndiv:{
  //padding:2,
  height:'20%',
},
qdiv:{
backgroundColor:'white',
height: '40%',

},
submitbtn:{
  margin: 5,
  backgroundColor:'#7303fc',

  borderColor:'#7303fc',
  borderWidth:2,
},
submittext:{
  color:'black',
},
anstext:{
color:'black',

},
//Feedback Generator.js
cortext:{
  padding: 30,
  fontSize:40,
  fontFamily: 'nunito',
  justifyContent: "center",
  textAlign: "center",
  color: 'green',
},
incortext:{
  padding: 30,
  fontSize:40,
  fontFamily: 'nunito',
  justifyContent: "center",
  textAlign: "center",
  color: 'red',
},

feedbacktext:{
  padding: 20,
  fontSize:25,
  fontFamily: 'nunito',
  justifyContent: "center",
  textAlign: "center",
  color: 'black',
},

nextbtn: {
  padding: 20,
  margin: 30,
  height: 90,
  width: 300,
  backgroundColor: "#7303fc",
  textAlign: "center",
  justifyContent: 'center', 
  alignItems: 'center',
  borderRadius: 20,
  shadowColor: 'rgba(0, 0, 0, 0.4)',
  shadowOpacity: 0.7,
  elevation: 3,
  shadowRadius: 15,
  shadowOffset : { width: 1, height: 13},
  color:"#7303fc",
},
nextbtnfont:{
  fontFamily: 'nunito',
  fontSize: 20,
  color:"white",
},
//surveyDone.js
      homebtn: {
        padding: 30,
        margin: 30,
        height: 90,
        width: 300,
        backgroundColor: "#7303fc",
        textAlign: "center",
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOpacity: 0.7,
        elevation: 3,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 13},
        color:"#7303fc",
      },
      homebtnfont:{
        fontFamily: 'nunito',
        fontSize: 20,
        color:"white",
      },
      sdtext:{
          padding: 30,
          fontSize:40,
          fontFamily: 'nunito',
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: 'black',

      },
      scoretext:{
        padding: 30,
        fontSize:35,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: 'black',
        fontFamily: 'nunito',

    },
      maindiv:{
        backgroundColor: 'white', 
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        display:'flex',
      }
      })