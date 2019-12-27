import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

export default class NotificationView extends React.Component {
  static navigationOptions = {
    title: 'NotificationView',
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.description}>NotificationView</Text>
      </SafeAreaView>
    );
  }
}
