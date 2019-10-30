import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './style';

export default class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonDesign}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Hello Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
