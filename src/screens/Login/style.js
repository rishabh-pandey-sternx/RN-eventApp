import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 40,
    fontWeight: '800',
    color: '#a293f8',
    textAlign: 'center',
    marginVertical: 50,
  },
  mainBody: {
    flex: 1,
    margin: 24,
    justifyContent: 'center',
  },
  form: {
    paddingHorizontal: 10,
  },
  inputGroup: {
    borderWidth: 2,
    borderColor: '#aaa',
    marginVertical: 15,
    borderRadius: 10,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginLeft: 10,
    padding: 10,
    fontSize: 16,
    color: '#a293f8',
  },
  button: {
    borderWidth: 0.4,
    borderRadius: 20,
    textAlign: 'center',
    marginTop: 40,
    height: 45,
    backgroundColor: '#a293f8',
    borderColor: '#a293f8',
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
