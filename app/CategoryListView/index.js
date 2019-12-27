import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

export default class CategoryListView extends React.Component {
  static navigationOptions = {
    title: 'CategoryListView',
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.description}>CategoryListView</Text>
      </SafeAreaView>
    );
  }
}
