/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import Text from './components/Text';

import fonts from './styles/fonts';
import theme from './styles/theme';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={[theme.base.main, styles.container]}>
        <Text style={theme.typography.header1}>
          Header 1
        </Text>
        <Text style={theme.typography.header2}>
          Header 2
        </Text>
        <Text style={theme.typography.header3}>
          Header 3
        </Text>
        <Text style={theme.typography.paragraph}>
          Paragraph
        </Text>
        <Text style={theme.typography.caption}>
          Caption
        </Text>
        <Text style={theme.typography.small}>
          Small
        </Text>
        <View style={[theme.base.primary, styles.palette]}/>
        <View style={[theme.base.secondary, styles.palette]}/>
        <View style={[theme.base.tertiary, styles.palette]}/>
        <View style={[theme.base.grey, styles.palette]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  palette: {
    width: 100,
    height: 100
  }
});
