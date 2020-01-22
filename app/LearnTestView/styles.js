import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  description: {
    color: '#FFFFFF',
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
    justifyContent: 'space-around',
    top: 210,
    height: 50,
    width: deviceWidth - 10,
  },
  notLearnContainer: {
    width: 130,
    backgroundColor: '#5D91E8',
    borderRadius: 8,
  },
  weakContainer: {
    width: 130,
    backgroundColor: '#F65E59',
    borderRadius: 8,
  },
});
