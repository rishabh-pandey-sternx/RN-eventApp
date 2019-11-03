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
      <View style={{flex: 0.5}}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{fontSize: 17}}>Back</Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{flex: 0.5}} />
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
    height: 65,
    paddingHorizontal: 12,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Header;
