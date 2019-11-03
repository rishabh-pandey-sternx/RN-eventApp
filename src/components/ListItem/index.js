import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import FastImage from 'react-native-fast-image';

import Image from '../Image';
import styles from './style';

const ListItem = ({
  item,
  move,
  moveEnd,
  onHeartPress,
  view,
  key,
  navigation,
}) => {
  const heart = require('../../assets/heart.png');
  const heart_o = require('../../assets/heart-o.png');
  return (
    <View>
      {!view ? (
        <SwipeRow rightOpenValue={-95} stopLeftSwipe>
          <View style={styles.hidden}>
            <TouchableOpacity onPress={onHeartPress}>
              <Text>{item.favorite ? 'Favorite' : 'Not Favorite'}</Text>
              {/*    <FastImage
                source={require('../../assets/heart.png')}
                style={styles.image}
          />*/}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={{}}
            onLongPress={move}
            onPressOut={moveEnd}
            onPress={() => navigation.navigate('EventDetails', {item})}>
            <Image view={view} imageURI={item.uri} name={item.name} />
          </TouchableOpacity>
        </SwipeRow>
      ) : (
        <View style={{flex: 1}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{}}
            onPress={() => navigation.navigate('EventDetails', {item})}>
            <Image view={view} imageURI={item.uri} name={item.name} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ListItem;
