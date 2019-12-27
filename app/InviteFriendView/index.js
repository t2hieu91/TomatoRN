import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

export default class InviteFriendView extends React.Component {
  static navigationOptions = {
    title: 'InviteFriendView',
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.description}>InviteFriendView</Text>
      </SafeAreaView>
    );
  }
}
