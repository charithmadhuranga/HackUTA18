import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation';
import { Container, Button, Content, Text, Icon } from 'native-base';

import styles from '../Styles/Screens/HomeScreenStyles';

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#11998e',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button transparent>
        <Icon style={styles.settingsButton} name='ios-settings' />
        </Button>
      ),
      headerLeft: (
        <Button transparent onPress={ () => navigation.navigate('AddPlant')}>
        <Icon style={styles.settingsButton} name='md-add-circle' />
        </Button>
      )
    }
  }

  render() {
    return (
      <Container>
        <LinearGradient colors={['#11998e', '#38ef7d']} style={styles.container}>
          <StatusBar backgroundColor='#11998e' barStyle='light-content' />
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.appName}>Howdy Sprinkler!</Text>
          <Button style={styles.addButton} onPress={() => this.props.navigation.navigate('AddPlant')}>
          <Icon name='ios-add'></Icon>
          <Text>Add a plant to be auto watered!</Text>
          </Button>
        </LinearGradient>
      </Container>
    );
  }
}
