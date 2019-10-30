import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainBody: {
    flex: 1,
    margin: 24,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  imgLogin: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  inputUser: {
    width: 280,
    height: 40,
    borderColor: '#435190',
    backgroundColor: '#026AA7',
    borderRadius: 8,
    fontSize: 18,
    fontWeight: 'normal',
  },
  buttonContainer: {
    width: 280,
    height: 45,
    borderRadius: 5,
    marginRight: 60,
    backgroundColor: '#40A9F3',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
