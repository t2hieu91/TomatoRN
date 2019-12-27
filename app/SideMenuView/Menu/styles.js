import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');

export default StyleSheet.create({
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
