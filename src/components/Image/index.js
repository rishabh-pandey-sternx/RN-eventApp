import React, {Component} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './style';

export default class Image extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={this.props.view ? styles.imageHolder : styles.imageHolder1}>
        <FastImage
          source={{
            uri: this.props.imageURI,
            priority: FastImage.priority.high,
          }}
          style={styles.image}
        />
        <View style={styles.textViewHolder}>
          <Text numberOfLines={1} style={styles.textOnImage}>
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}
