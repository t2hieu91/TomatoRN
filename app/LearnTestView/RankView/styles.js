import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: deviceWidth - 80,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  description: {
    fontSize: 24,
  },
  subDescription: {
    fontSize: 12,
  },
  leftContainer: {
    justifyContent: 'space-between',
  },
  rightContainer: {
    justifyContent: 'space-between',
  },
  icon: {
    height: 40,
    width: 40,
  },
});
