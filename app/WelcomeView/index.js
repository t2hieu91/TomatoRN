import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';

export default class WelcomeView extends React.Component {
  static navigationOptions = {
    title: 'WelcomeView',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      level: 0,
    };
  }

  inputName = value => {
    this.setState({name: value});
  };
  inputCategory = value => {
    this.setState({category: value});
  };
  inputLevel = value => {
    this.setState({level: value});
  };

  onPressButton = () => {
    const {name, category, level} = this.state;

    if (name.trim() === '') {
      Alert.alert('Input name');
      return;
    }

    this.props.navigation.push('Start', {
      name: name,
      category: category,
      level: level,
    });
  };

  render() {
    const {name, category, level} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.description}>Welcome to tomato !</Text>
        <TextInput
          style={styles.textInputContainer}
          placeholder="Nick name"
          value={name}
          onChangeText={this.inputName}
        />
        <TextInput
          style={styles.textInputContainer}
          placeholder="Study Category"
          value={category}
          onChangeText={this.inputCategory}
        />
        <TextInput
          style={styles.textInputContainer}
          placeholder="Study Level"
          keyboardType="number-pad"
          value={level}
          onChangeText={this.inputLevel}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onPressButton}>
          <Text style={styles.buttonTitle}>Let’s go !</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
