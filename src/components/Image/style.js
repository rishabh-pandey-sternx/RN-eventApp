import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHolder: {
    width: Dimensions.get('window').width / 2 - 20,
    margin: 5,
    height: 160,
  },
  imageHolder1: {
    width: '98%',
    margin: 5,
    height: 160,
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  textViewHolder: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 10,
    paddingVertical: 13,
    alignItems: 'center',
  },
  textOnImage: {
    color: 'white',
  },
});
