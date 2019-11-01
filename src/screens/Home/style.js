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
    // width: Dimensions.get('window').width - 40,
    backgroundColor: 'green',
    alignContent: 'space-around',
    justifyContent: 'space-between',
  },
  buttonDesign1: {
    padding: 15,
    alignItems: 'flex-end',
    // width: Dimensions.get('window').width - 40,
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
});
