import React from 'react';
import SideMenu from 'react-native-side-menu';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Menu from './Menu/Menu';
import LearnTestView from '../LearnTestView/index';
import CategoryListView from '../CategoryListView/index';
import InviteFriendView from '../InviteFriendView/index';
import NotificationView from '../NotificationView/index';

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

export default class SideMenuView extends React.Component {
  static navigationOptions = {
    title: 'SideMenuView',
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

  renderContent() {
    const {selectedItem} = this.state;
    switch (selectedItem) {
      case 'LearnTestView':
        return <LearnTestView />;
      case 'CategoryListView':
        return <CategoryListView />;
      case 'InviteFriendView':
        return <InviteFriendView />;
      case 'NotificationView':
        return <NotificationView />;
      default:
        return <ContentView />;
    }
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SafeAreaView style={styles.container}>
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}>
          {this.renderContent()}
          <TouchableOpacity onPress={this.toggle} style={styles.button}>
            <Image source={menuIcon} style={styles.menuIcon} />
          </TouchableOpacity>
        </SideMenu>
      </SafeAreaView>
    );
  }
}
