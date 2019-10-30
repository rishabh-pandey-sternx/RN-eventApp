import React, {Component} from 'react';
import {
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import Image from './src/components/Image';
import data from './src/config/data';

export default class App extends Component {
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

  changeView = () => {
    this.setState({gridView: !this.state.gridView}, () => {
      if (this.state.gridView) {
        this.setState({btnText: 'Show List'});
      } else {
        this.setState({btnText: 'Show Grid'});
      }
    });
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
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.buttonDesign}
                onPress={this.changeView}>
                <Text style={styles.buttonText}>{this.state.btnText}</Text>
              </TouchableOpacity>

              <FlatList
                keyExtractor={item => item.id}
                key={this.state.gridView ? 1 : 0}
                numColumns={this.state.gridView ? 2 : 1}
                data={this.state.imagesData}
                renderItem={({item}) => (
                  <Image imageURI={item.uri} name={item.name} />
                )}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    paddingTop: 10,
    fontSize: 18,
    color: 'black',
  },
  buttonDesign: {
    padding: 15,
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
});
