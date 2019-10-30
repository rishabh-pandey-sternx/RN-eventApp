import React, {Component} from 'react';
import {TouchableOpacity, Text, ScrollView, Image, View} from 'react-native';

import style from './style';

export default class EventDetails extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView style={style.container}>
        <TouchableOpacity
          style={style.eventCard}
          onPress={() => console.log('ii')}>
          <Image source={{uri: 'image'}} style={style.eventBgImg} />
          <View style={style.coverOverlay} />
          <View style={style.eventInfo}>
            <View style={style.eventInfoLeft}>
              <Text style={style.eventTitle} numberOfLines={1}>
                {'name'}
              </Text>
              <Text style={style.subtext}>{'dateTime'}</Text>
              <Text style={style.subtext}>{'test'}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
