import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './style';

export default class EventDetails extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonDesign}
          onPress={this.changeView}>
          <Text style={styles.buttonText}>{this.state.btnText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
