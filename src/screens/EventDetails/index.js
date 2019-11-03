import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import MapView from 'react-native-maps';

import Header from '../../components/Header';
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
      <View style={{flex: 1}}>
        <Header navigation={this.props.navigation} title={name} />
        <ScrollView style={styles.container}>
          <FastImage style={styles.thumbnail} source={{uri: thumbnail}} />
          <View style={{paddingVertical: 10}}>
            <Text style={[styles.text, styles.titleShow]}>{name}</Text>
            <Text style={[styles.text]}>{place}</Text>
          </View>
          <View style={{}}>
            <Text style={[styles.text]}>{entry_fee}</Text>
            <Text style={[styles.text]}>{fav}</Text>
          </View>
          <View style={{flex: 1}}>
            <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
