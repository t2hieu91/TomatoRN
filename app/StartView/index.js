import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

export default class StartView extends React.Component {
  static navigationOptions = {
    title: 'StartView',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: props.navigation.getParam('name'),
      category: props.navigation.getParam('category'),
      level: props.navigation.getParam('level'),
    };
  }

  render() {
    const {name, category, level} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.description}>Name: {name}</Text>
        <Text style={styles.description}>Category: {category}</Text>
        <Text style={styles.description}>Level: {level}</Text>
      </SafeAreaView>
    );
  }
}
