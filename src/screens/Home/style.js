import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 1.2,
    elevation: 4,
    shadowOpacity: 0.15,
    backgroundColor: 'white',
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
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#a293f8',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 12,
    borderRadius: 6,
  },
  buttonDesign1: {
    padding: 15,
    alignItems: 'flex-end',
  },
  buttonText: {
    fontSize: 16,
  },
  centerText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'stretch',
  },
});
