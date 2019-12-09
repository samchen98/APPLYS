import {
    Platform,
    ScrollView,
    StyleSheet,
    Dimensions
  } from 'react-native';
import { Left } from 'native-base';


export default StyleSheet.create({
  cpage:{
    width: 300,
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    elevation: 3,
    shadowRadius: 15,
    shadowOffset : { width: 1, height: 13},
    marginBottom: 50
  },
  title: {
    fontSize: 40,
    fontFamily: 'nunito-bold',
    margin: 10,
 
  },
  score: {
    fontSize: 25,
    marginBottom: 10,
  },
  surveyinfo: {
    height: 270,
    width: 230,
  },
  surveyinfoText:{
    fontSize: 18
  },
  roleBtn: {
    padding: 10,
    margin: 30,
    height: 90,
    width: 230,
    backgroundColor: 'purple',
    textAlign: "center",
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 20,
    // shadowColor: 'rgba(0, 0, 0, 0.4)',
    // shadowOpacity: 0.7,
    // elevation: 3,
    // shadowRadius: 15,
    // shadowOffset : { width: 1, height: 13},
  },
  roletxt:{
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontFamily: 'nunito'
  },
  physBtn: {
    backgroundColor: "white",
    margin: 20,
    width: 350,
    height: 80,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  physBtnText: {
    color: "black",
    fontFamily: 'nunito',
    fontSize:28,
  },
  buttondivphys:{
    flex: 1, 
    alignItems: "center",
    flexDirection:"column",
  },
  maintextPhys: {
    paddingLeft: 15,
    paddingTop: 5,
    fontSize:35,
    color: 'black',
    fontFamily:'nunito'
  },
  signout: {
    backgroundColor: 'purple',
    width: 95,
    margin: 15,
    position: 'absolute',
    right: 0,
    textAlign: "center",
    justifyContent: 'center', 
    alignItems: 'center',
  },
  signouttxt: {
    color: 'white',
    fontSize: 14,
  },
     
    maindiv:{
      backgroundColor: "purple",
      flex: 1, 
      justifyContent: "center",
      alignItems: "center",
      //flexDirection:"row",
      display:'flex',
    }, 
    maintext:{
      paddingLeft: 15,
      paddingTop: 5,
      paddingBottom: 10,
      fontSize:55,
      color: 'black',
      fontFamily:'nunito'

    },
      infodiv:{
        backgroundColor:'white', 
        height: 140,
        width: Dimensions.get('window').width,
        flexDirection:"column",
        shadowColor: "#000",
        shadowOffset: {width:0, height: 8},
        shadowOpacity: 0.3,
        shadowRadius: 6,
        zIndex: 5,
        marginBottom: 20
      },
      buttondiv:{
        backgroundColor: 'purple', 
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        marginTop:50,

      },
})