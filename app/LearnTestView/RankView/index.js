import React from 'react';
import {View, Text, TouchableHighlight, Image, Alert} from 'react-native';
import styles from './styles';

const leftOnIcon = require('../../../assets/left_on.png');
const leftOffIcon = require('../../../assets/left_off.png');
const rightOnIcon = require('../../../assets/right_on.png');

export default class RankView extends React.Component {
  _onPressLeftButton = () => {
    Alert.alert('_onPress Left Button');
  };
  _onPressRightButton = () => {
    Alert.alert('_onPress Right Button');
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.leftContainer}
          onPress={this._onPressLeftButton}>
          <Image style={styles.icon} source={leftOffIcon} />
        </TouchableHighlight>
        <View style={styles.textContainer}>
          <Text style={styles.description}>Rank 1</Text>
          <Text style={styles.subDescription}>1/16</Text>
        </View>
        <TouchableHighlight
          style={styles.rightContainer}
          onPress={this._onPressRightButton}>
          <Image style={styles.icon} source={rightOnIcon} />
        </TouchableHighlight>
      </View>
    );
  }
}
