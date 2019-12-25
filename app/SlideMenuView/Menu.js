import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const openMagazineIcon = require('../../assets/open-magazine.png');
const squaresIcon = require('../../assets/2-squares.png');
const headIcon = require('../../assets/head.png');
const bellIcon = require('../../assets/bell.png');

const styles = StyleSheet.create({
  menu: {
    top: 20,
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#FFFFFF',
  },
  avatarContainer: {
    backgroundColor: '#F65E59',
    marginBottom: 20,
    height: 86,
    justifyContent: 'center',
  },
  avatar: {
    margin: 15,
    width: 55,
    height: 55,
    borderRadius: 27,
  },
  name: {
    position: 'absolute',
    margin: 15,
    left: 70,
    top: 20,
  },
  itemContainer: {
    marginBottom: 10,
    height: 50,
    borderColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  icon: {
    left: 15,
    width: 30,
    height: 26,
  },
  textItem: {
    fontSize: 14,
    position: 'absolute',
    textAlign: 'center',
    left: 70,
  },
});

export default function Menu({onItemSelected}) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{uri}} />
        <Text style={styles.name}>Tam Nguyen N1</Text>
      </View>

      <TouchableOpacity
        onPress={() => onItemSelected('Learn&Test')}
        style={styles.itemContainer}>
        <Image style={styles.icon} source={openMagazineIcon} />
        <Text style={styles.textItem}>Learn&Test</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onItemSelected('Category list')}
        style={styles.itemContainer}>
        <Image style={styles.icon} source={squaresIcon} />
        <Text style={styles.textItem}>Category list</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onItemSelected('Invite friend')}
        style={styles.itemContainer}>
        <Image style={styles.icon} source={headIcon} />
        <Text style={styles.textItem}>Invite friend</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onItemSelected('Notification')}
        style={styles.itemContainer}>
        <Image style={styles.icon} source={bellIcon} />
        <Text style={styles.textItem}>Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onItemSelected('About')}
        style={styles.itemContainer}>
        <Image style={styles.icon} source={bellIcon} />
        <Text style={styles.textItem}>About</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
