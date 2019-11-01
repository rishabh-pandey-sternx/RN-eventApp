import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    paddingTop: 10,
    fontSize: 18,
    color: 'black',
  },
  buttonDesign: {
    padding: 15,
    backgroundColor: 'green',
    alignContent: 'space-around',
    justifyContent: 'space-between',
  },
  buttonDesign1: {
    padding: 15,
    alignItems: 'flex-end',
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  centerText: {
    fontSize: 26,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'stretch',
  },
});
