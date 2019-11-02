import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import Storage from '../../utils/storage';
import styles from './style';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      showPassword: false,
    };
  }
  _storeData = async () => {
    try {
      await Storage.save('isLoggedIn', true);
    } catch (error) {
      // Error saving data
      console.log('Failed to save data');
    }
  };
  save() {
    const {username, password} = this.state;
    const {navigation} = this.props;
    if (username === 'Rishabh' && password === 'Password12') {
      this._storeData();
      navigation.navigate('Home');
    } else {
      Alert.alert('LogIn Failed', 'Incorrect Credentials');
    }
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
        <View style={styles.mainBody}>
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <View>
                <TextInput
                  placeholder={'UserName'}
                  style={styles.inputBox}
                  value={this.state.username}
                  onChangeText={username => this.setState({username})}
                />
              </View>
            </View>
            <View style={styles.inputGroup}>
              <View>
                <TextInput
                  placeholder={'Password'}
                  style={styles.inputBox}
                  value={this.state.password}
                  secureTextEntry={this.state.showPassword}
                  onChangeText={password => this.setState({password})}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                disabled={
                  this.state.password === '' || this.state.username === ''
                }
                style={styles.button}
                onPress={() => this.save()}>
                <Text style={{color: '#a293f8', fontSize: 20}}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
