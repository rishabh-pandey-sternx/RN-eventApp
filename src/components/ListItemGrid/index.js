import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons';

import Image from '../Image';
import styles from './style';

const ListItemGrid = ({item, view}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity activeOpacity={1} style={{}}>
        <Image view={view} imageURI={item.uri} name={item.name} />
      </TouchableOpacity>
    </View>
  );
};

export default ListItemGrid;
