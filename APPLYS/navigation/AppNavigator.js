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

//add screens here
const AppStack = createStackNavigator({
  Home: {screen: MainHome},
  Survey: {screen: Survey},
  Passport: {screen: Passport},
  Infographics: {screen: Infographics},
  Signup: {screen: Signup}
})
const AuthStack = createStackNavigator({
  Login: {screen: LoginScreen}, 
})

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  })

);
