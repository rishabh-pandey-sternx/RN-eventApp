import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import AppContainer from './src/navigation';

export default class App extends Component {
  render() {
    console.disableYellowBox;
    return (
      <SafeAreaView style={styles.container}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
