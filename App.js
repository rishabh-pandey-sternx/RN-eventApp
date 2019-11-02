import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import Storage from './src/utils/storage';

import routes from './src/navigation';

let RootRouter = null;
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: '',
      loading: true,
    };
  }
  getData = async () => {
    try {
      const value = await Storage.getByKey('isLoggedIn');
      if (value !== null) {
        this.setState({isLoggedIn: value});
      }
    } catch (e) {
      // error reading value
      console.log('Failed to fetch data');
    }
  };
  async componentDidMount() {
    await this.getData();
    this.setState({loading: false});
  }

  render() {
    console.disableYellowBox;
    RootRouter = createAppContainer(routes(this.state.isLoggedIn));
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {this.state.loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" />
              <Text style={styles.loadingText}>Please Wait...</Text>
            </View>
          ) : (
            <RootRouter />
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
});
