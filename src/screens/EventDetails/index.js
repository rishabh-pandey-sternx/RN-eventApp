import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../components/Header';
import FastImage from 'react-native-fast-image';

import styles from './style';
export default class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('details this.props', this.props);
    const {params} = this.props.navigation.state;

    const thumbnail = params.item.uri;
    const name = params.item.name;
    const place = params.item.place;
    const entry_fee = params.item.entry_fee;
    const fees = params.item.fees;
    const fav = params.item.fav;

    return (
      <ScrollView style={styles.container}>
        <Header navigation={this.props.navigation} title={name} />
        <FastImage style={styles.thumbnail} source={{uri: thumbnail}} />
        <View>
          <Text style={[styles.text, styles.titleShow]}>{name}</Text>
          <Text style={[styles.text]}>{place}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={[styles.text]}>{entry_fee}</Text>
          <Text style={[styles.text]}>{fav}</Text>
        </View>
      </ScrollView>
    );
  }
}
