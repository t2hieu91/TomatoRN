import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles';
import RankView from './RankView/index';

const graphImage = require('../../assets/Graph.png');
const remainImage = require('../../assets/remain.png');

export default class LearnTestView extends React.Component {
  _onPressNotLearnButton = () => {
    Alert.alert('_onPressNotLearnButton');
  };
  _onPressWeakButton = () => {
    Alert.alert('_onPressWeakButton');
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.remainImageContainer}>
          <Image
            resizeMode="contain"
            source={remainImage}
            style={styles.remainImage}
          />
        </View>
        <View style={styles.graphImageContainer}>
          <Image
            resizeMode="contain"
            source={graphImage}
            style={styles.graphImage}
          />
        </View>
        <View style={styles.rankContainer}>
          <RankView />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.notLearnContainer}
            onPress={this._onPressNotLearnButton}>
            <Text style={styles.description}>Not learned(51)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.weakContainer}
            onPress={this._onPressWeakButton}>
            <Text style={styles.description}>Weak(25)</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
