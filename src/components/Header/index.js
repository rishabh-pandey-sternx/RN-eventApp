import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => {
  const {navigation, title} = props;

  return (
    <View style={styles.headerStyle}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>goBack</Text>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    // backgroundColor: 'red',
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
    paddingTop: Platform.OS === 'ios' ? 22 : 0,
    height: 95,
  },
  title: {
    color: 'black',
    fontSize: 17,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Header;
