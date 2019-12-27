import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'gray',
    width: 300,
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
