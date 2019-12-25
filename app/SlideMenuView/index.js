import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Menu from './Menu';
import SideMenu from 'react-native-side-menu';

const menuIcon = require('../../assets/menu.png');

class ContentView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}

export default class SlideMenuView extends React.Component {
  static navigationOptions = {
    title: 'SlideMenuView',
    header: null,
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({isOpen});
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}>
          <ContentView />
          <TouchableOpacity onPress={this.toggle} style={styles.button}>
            <Image source={menuIcon} style={{width: 32, height: 32}} />
          </TouchableOpacity>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
