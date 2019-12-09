//STYLE SHEET FOR CONTAINERS (VIEW ADJUSTMENTS)
import {
    Platform,
    ScrollView,
    StyleSheet,
  } from 'react-native';

export default StyleSheet.create({
  container: { //ENTIRE SCREEN
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  contentContainer: { //MAIN CONTAINER OF ALL CONTENT WITHIN SCREEN
      paddingTop: 30,
      backgroundColor: '#FFF',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  
  
});
  