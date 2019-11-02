import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  nameContainer: {
    backgroundColor: 'transparent',
  },
  titleShow: {
    fontSize: 35,
    paddingLeft: 10,
    marginBottom: 10,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff', // 181818
  },
  thumbnail: {
    width: width,
    height: 300,
  },
  text: {
    color: '#000', //b3b3b3
    fontSize: 16,
    paddingLeft: 10,
  },
});
