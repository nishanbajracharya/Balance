import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

import theme from '../styles/theme';

import mergeStyles from '../utils/mergeStyles';

const Text = ({ style = [], ...props }) => <RNText style={mergeStyles(theme.typography.paragraph, style)} {...props}/>;

export default Text;
