import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

export default class SlideMenuView extends React.Component {
  static navigationOptions = {
    title: 'SlideMenuView',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>This view SlideMenuView</Text>
      </SafeAreaView>
    );
  }
}
