import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainBody: {
    flex: 1,
    margin: 24,
  },
  form: {
    alignItems: 'center',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderWidth: 1,
    marginVertical: 15,
    borderRadius: 10,
  },
  inputBox: {
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginLeft: 10,
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  button: {
    borderWidth: 0.4,
    padding: 8,
    borderRadius: 20,
    textAlign: 'center',
    paddingHorizontal: 70,
    marginTop: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    shadowOpacity: 0.2,
  },
});
