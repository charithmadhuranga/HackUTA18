/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

//import { HomeScreen, AddPlantScreen } from './AppContainer/Screens'
import HomeScreen from './AppContainer/Screens/HomeScreen';
import AddPlantScreen from './AppContainer/Screens/AddPlantScreen';
import AddSuccessScreen from './AppContainer/Screens/AddSuccessScreen';
import PlantInfoScreen from './AppContainer/Screens/PlantInfoScreen';
import DashboardScreen from './AppContainer/Screens/DashboardScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    AddPlant: {
      screen: AddPlantScreen,
    },
    AddSuccess: {
      screen: AddSuccessScreen,
      headerMode: 'screen',
    },
    PlantInfo: {
      screen: PlantInfoScreen,
    },
    Dashboard: {
      screen: DashboardScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return (
      /*<LinearGradient colors={['#11998e', '#38ef7d']} style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </LinearGradient>*/
      <RootStack />
    );
  }
}
