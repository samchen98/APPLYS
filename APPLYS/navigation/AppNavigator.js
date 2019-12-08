import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import LoginScreen from '../screens/LoginScreen';
import MainHome from '../screens/MainHome'
import Survey from '../screens/Survey'
import Passport from '../screens/Passport'
import Infographics from '../screens/Infographics'
import Signup from '../screens/Signup'
import SignupRole from '../screens/SignupRole'
import SurveyDone from '../screens/SurveyDone'
import PhysHome from '../screens/PhysHome'
import ManagePatients from '../screens/ManagePatients'
import ManageSurvey from '../screens/ManageSurvey'

//add screens here
const AppStack = createStackNavigator({
  Home: {screen: MainHome},
  Survey: {screen: Survey},
  Passport: {screen: Passport},
  Infographics: {screen: Infographics},
  Signup: {screen: Signup},
  Role: {screen: SignupRole},
  SurveyDone: {screen: SurveyDone}
})
const AuthStack = createStackNavigator({
  Login: {screen: LoginScreen}, 
 
})
const PhysStack = createStackNavigator({
  PhysHome : {screen: PhysHome},
  Patients: {screen: ManagePatients},
  ManageSurv: {screen: ManageSurvey}
})

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Phys: PhysStack,
    Auth: AuthStack,
    Sign: Signup,
    Role: SignupRole,
    SurveyDone: SurveyDone,
    Home: MainHome,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  })

);
