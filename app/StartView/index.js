import React from 'react';
import {SafeAreaView, Text, ImageBackground} from 'react-native';
import styles from './styles';

export default class StartView extends React.Component {
  static navigationOptions = {
    title: 'StartView',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: props.navigation.getParam('name'),
      category: props.navigation.getParam('category'),
      level: props.navigation.getParam('level'),
      timer: null,
      counter: 3,
    };
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({timer});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  tick = () => {
    const {counter} = this.state;
    var value = counter - 1;
    if (value < 0) {
      clearInterval(this.state.timer);
      this.gotoNextScreen();
    } else {
      this.setState({counter: value});
    }
  };

  gotoNextScreen = () => {
    this.props.navigation.push('SlideMenu');
  };

  render() {
    const {name, category, level} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={{uri: 'Oval.png'}}
          style={styles.image}
          resizeMode="contain">
          <Text style={styles.number}>{this.state.counter}</Text>
        </ImageBackground>
        <Text style={styles.description}>
          At first, let’s challenge with this test
        </Text>
        <Text style={styles.description}>Name: {name}</Text>
        <Text style={styles.description}>Category: {category}</Text>
        <Text style={styles.description}>Level: {level}</Text>
      </SafeAreaView>
    );
  }
}
