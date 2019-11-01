import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, AsyncStorage} from 'react-native';
import {createAppContainer} from 'react-navigation';

import routes from './src/navigation';

let RootRouter = null;
export default class App extends Component {
  render() {
    console.disableYellowBox;
    const isLoggedIn = AsyncStorage.getItem('loggedIn');
    RootRouter = createAppContainer(routes(isLoggedIn));
    return (
      <SafeAreaView style={styles.container}>
        <RootRouter />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
