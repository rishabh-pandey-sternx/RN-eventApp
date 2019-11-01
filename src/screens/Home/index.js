import React, {Component} from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import AsyncStorage from '@react-native-community/async-storage';

import ListItem from '../../components/ListItem';
import data from '../../config/data';
import styles from './style';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      imagesData: data,
      loading: true,
      gridView: true,
      btnText: 'Show List',
    };
  }

  componentDidMount() {
    this.setState({loading: false});
  }

  logout() {
    AsyncStorage.clear();
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

  onMoveEnd = ({data}) => {
    this.setState({data: data ? [...data] : []});
  };

  toggleFavorite = value => {
    const data = this.state.imagesData.map(item =>
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
              <Text style={styles.loadingText}>Please Wait...</Text>
            </View>
          ) : (
            <View style={styles.container}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonDesign}
                  onPress={() => this.changeView()}>
                  <Text style={styles.buttonText}>{this.state.btnText}</Text>
                </TouchableOpacity>
                <Text style={styles.centerText}>Home</Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.buttonDesign1}
                  onPress={() => this.logout()}>
                  <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
              </View>
              <DraggableFlatList
                data={this.state.imagesData}
                key={this.state.gridView ? 1 : 0}
                numColumns={this.state.gridView ? 2 : 1}
                renderItem={({item, move, moveEnd}) => (
                  <ListItem
                    navigation={this.props.navigation}
                    item={item}
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
