import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import LoginScreen from '../screens/LoginScreen';
import MainHome from '../screens/MainHome'
import Survey from '../screens/Survey'
import Passport from '../screens/Passport'

//add screens here
const AppStack = createStackNavigator({
  Home: {screen: MainHome},
  Survey: {screen: Survey},
  Passport: {screen: Passport},
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
