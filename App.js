/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({   ios: 'Press Cmd+R to reload,\nCmd+D
// or shake for dev menu',   android: 'Double tap R on your keyboard to
// reload,\nShake or press menu button for dev men' +       'u' });

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }
  render() {
    return (
      <Text
        style={[
        styles.counter, {
          fontSize: this.props.size
        }
      ]}>
        {this.props.name}
        : {this.state.count}</Text>
    );
  }
}

export default class App extends Component < {} > {
  render() {
    return (
      <View style={styles.container}>
        <Counter name="Counter 1" size={12}/>
        <Counter name="Counter 2" size={16}/>
        <Counter name="Counter 3" size={32}/>
        <Counter name="Counter 4" size={48}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  counter: {
    fontSize: 20,
    color: 'blue'
  }
});
