import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../styles/theme'
import colors from '../constants/colors';

const AppBar = () => <View style={styles.base}><Text style={[theme.typography.header1, styles.text]}>Balance</Text></View>;

const styles = StyleSheet.create({
  base: {
    height: 56,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: colors.palette.primary
  }
})

export default AppBar;
