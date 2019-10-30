import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons';

import Image from '../Image';
import styles from './style';

const ListItem = ({item, move, moveEnd, onHeartPress, view}) => {
  return (
    <View>
      {!view ? (
        <SwipeRow rightOpenValue={-75}>
          <View style={styles.hidden}>
            <TouchableOpacity onPress={onHeartPress}>
              <Text>slideText</Text>
              {/* <Icon name={item.favorite ? 'heart' : 'heart-o'} /> */}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={{}}
            onLongPress={move}
            onPressOut={moveEnd}>
            <Image view={view} imageURI={item.uri} name={item.name} />
          </TouchableOpacity>
        </SwipeRow>
      ) : (
        <View style={{flex: 1}}>
          <TouchableOpacity activeOpacity={1} style={{}}>
            <Image view={view} imageURI={item.uri} name={item.name} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ListItem;