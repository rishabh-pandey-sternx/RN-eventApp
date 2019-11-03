import React, {Component} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

import Storage from '../../utils/storage';
import ListItem from '../../components/ListItem';
import imageData from '../../config/data';
import styles from './style';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: imageData,
      loading: true,
      gridView: true,
      btnText: 'Show List',
    };
  }

  getData = async () => {
    try {
      const value = await Storage.getByKey('list');
      if (value !== null) {
        this.setState({data: value});
      } else {
        this.setState({data: imageData});
      }
    } catch (e) {
      // error reading value
      this.setState({data: imageData});
      console.log('Failed to fetch data');
    }
  };
  async componentDidMount() {
    // await this.getData();
    this.setState({loading: false});
  }

  logout() {
    Storage.clear();
    this.props.navigation.navigate('Login');
  }

  changeView = () => {
    this.setState({gridView: !this.state.gridView}, () => {
      if (this.state.gridView) {
        this.setState({btnText: 'Show List'});
      } else {
        this.setState({btnText: 'Show Grid'});
      }
    });
  };
  _storeData = async data => {
    try {
      await Storage.save('list', data);
    } catch (error) {
      // Error saving data
      console.log('Failed to save data');
    }
  };

  onMoveEnd = ({data}) => {
    this.setState({data: data ? [...data] : []});
    this._storeData(this.state.data);
  };

  toggleFavorite = value => {
    const data = this.state.data.map(item =>
      item.id !== value.id ? item : {...item, favorite: !item.favorite},
    );
    this.setState({imagesData: data});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {this.state.loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" />
              <Text style={styles.loadingText}>Please Wait ...</Text>
            </View>
          ) : (
            <View style={styles.container}>
              <View style={styles.headerStyle}>
                <View style={{flex: 1}} />
                <View style={{flex: 1}}>
                  <Text style={styles.centerText}>Home</Text>
                </View>
                <View style={{flex: 1}}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.buttonDesign1}
                    onPress={() => this.logout()}>
                    <Text style={styles.buttonText}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.buttonDesign}
                onPress={() => this.changeView()}>
                <Text
                  style={[
                    styles.buttonText,
                    {color: '#a293f8', fontWeight: '600'},
                  ]}>
                  {this.state.btnText}
                </Text>
              </TouchableOpacity>
              <DraggableFlatList
                data={this.state.data}
                key={this.state.gridView ? 1 : 0}
                style={{paddingHorizontal: 10}}
                numColumns={this.state.gridView ? 2 : 1}
                renderItem={({item, move, moveEnd}) => (
                  <ListItem
                    navigation={this.props.navigation}
                    item={item}
                    key={item.index}
                    view={this.state.gridView}
                    move={move}
                    moveEnd={moveEnd}
                    onHeartPress={() => this.toggleFavorite(item)}
                  />
                )}
                keyExtractor={item => item.id}
                scrollPercent={5}
                onMoveEnd={this.onMoveEnd}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
