import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';

import styles from './style';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }
  save() {
    console.log('nknbjnbj');
    if (this.state.username !== '') {
      this.props.navigation.navigate('Home');
    }
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
        <View style={styles.mainBody}>
          <View style={{marginBottom: 14}}>
            <TouchableOpacity>
              <TextInput
                autoCapitalize="none"
                style={styles.inputUser}
                placeholder="username"
                onChangeText={username => this.setState({username})}
              />
            </TouchableOpacity>
          </View>

          {/* Save button */}
          <TouchableOpacity
            onPress={() => this.save()}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
