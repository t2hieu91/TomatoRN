import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeView from './WelcomeView/index';
import StartView from './StartView/index';
import SideMenuView from './SideMenuView/index';

const StackNavigator = createStackNavigator(
  {
    Welcome: {screen: WelcomeView},
    Start: {screen: StartView},
    SideMenu: {screen: SideMenuView},
  },
  {
    initialRouteName: 'Welcome',
  },
);

const AppContainer = createAppContainer(StackNavigator);

export default class Root extends React.Component {
  render() {
    return <AppContainer />;
  }
}
