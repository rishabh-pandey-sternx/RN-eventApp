import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Header from '../../components/Header';
import FastImage from 'react-native-fast-image';

const {width} = Dimensions.get('window');

export default class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measuresTitle: 0,
      measuresSeason: 0,
      currentSeason: 1,
    };
  }

  static navigationOptions = {
    title: 'Back',
    headerTintColor: 'gray',
    headerStyle: {
      backgroundColor: 'black',
    },
  };

  render() {
    console.log('details this.props', this.props);
    const {params} = this.props.navigation.state;

    const thumbnail = params.item.uri;
    //const thumbnail = "https://media.timeout.com/images/102523515/image.jpg";
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

const styles = StyleSheet.create({
  nameContainer: {
    backgroundColor: 'transparent',
  },

  titleShow: {
    fontSize: 35,
    paddingLeft: 10,
    marginBottom: 10,
    color: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff', // 181818
  },
  thumbnail: {
    width: width,
    height: 300,
  },
  buttonPlay: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  iconPlay: {
    opacity: 0.7,
    backgroundColor: 'transparent',
  },
  descriptionContainer: {
    paddingHorizontal: 20,
  },
  subtitle: {
    flexDirection: 'row',
  },
  subTitleText: {
    marginRight: 20,
  },
  text: {
    color: '#000', //b3b3b3
    fontSize: 16,
    paddingLeft: 10,
  },
  shareListIcons: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  listIcon: {
    height: 25,
  },
  shareIcon: {
    height: 25,
  },
  myListIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
  },
  myShareIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginVertical: 10,
  },
  light: {
    fontWeight: '200',
  },
});
