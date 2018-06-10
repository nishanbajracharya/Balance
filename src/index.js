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
  StatusBar,
  ScrollView
} from 'react-native';

import Text from './components/Text';
import Input from './components/Input';
import AppBar from './components/AppBar';
import Button from './components/Button';

import fonts from './styles/fonts';
import theme from './styles/theme';
import colors from './constants/colors';
import getStatusBarHeight from './utils/getStatusBarHeight';

export default class App extends Component {
  render() {
    return (
      <View style={[theme.base.main, styles.container]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.palette.background}
        />
        <AppBar />
        <ScrollView>
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
          <View style={[theme.base.primary, styles.palette]} />
          <View style={[theme.base.secondary, styles.palette]} />
          <View style={[theme.base.tertiary, styles.palette]} />
          <View style={[theme.base.grey, styles.palette]} />
          <Button />
          <Button flat />
          <Button disabled={true} />
          <Button flat disabled={true} />
          <Input placeholder='BASIC INPUT'/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
  },
  palette: {
    width: 100,
    height: 100
  }
});
