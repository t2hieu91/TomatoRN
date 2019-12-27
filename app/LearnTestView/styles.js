import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    padding: 8,
    alignContent: 'center',
  },
  remainImageContainer: {
    left: 15,
    top: 80,
  },
  remainImage: {
    width: 50,
    height: 50,
  },
  graphImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 135,
  },
  graphImage: {
    width: 208,
    height: 200,
  },
  rankContainer: {
    alignItems: 'center',
    top: 180,
    height: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 180,
    height: 50,
    width: 200,
  },
  notLearnContainer: {
    backgroundColor: '#5D91E8',
  },
  weakContainer: {
    backgroundColor: '#F65E59',
  },
});
