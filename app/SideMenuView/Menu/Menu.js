import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
const openMagazineIcon = require('../../../assets/open-magazine.png');
const squaresIcon = require('../../../assets/2-squares.png');
const headIcon = require('../../../assets/head.png');
const bellIcon = require('../../../assets/bell.png');

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};

export default function Menu({onItemSelected}) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{uri}} />
        <Text style={styles.name}>Tam Nguyen N1</Text>
      </View>

      <TouchableOpacity
        onPress={() => onItemSelected('LearnTestView')}
        style={styles.itemContainer}>
        <Image style={styles.icon} source={openMagazineIcon} />
        <Text style={styles.textItem}>Learn&Test</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onItemSelected('CategoryListView')}
        style={styles.itemContainer}>
        <Image style={styles.icon} source={squaresIcon} />
        <Text style={styles.textItem}>Category list</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onItemSelected('InviteFriendView')}
        style={styles.itemContainer}>
        <Image style={styles.icon} source={headIcon} />
        <Text style={styles.textItem}>Invite friend</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onItemSelected('NotificationView')}
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
