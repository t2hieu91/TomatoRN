import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class Root extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Welcome TomatoRN</Text>
      </SafeAreaView>
    );
  }
}
