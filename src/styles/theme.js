import { StyleSheet } from 'react-native';

import fonts from '../constants/fonts';
import colors from '../constants/colors';

const base = StyleSheet.create({
  main: {
    backgroundColor: colors.palette.background
  },
  primary: {
    backgroundColor: colors.palette.primary
  },
  secondary: {
    backgroundColor: colors.palette.secodary
  },
  tertiary: {
    backgroundColor: colors.palette.tertiary
  },
  grey: {
    backgroundColor: colors.palette.grey
  }
});

const typography = StyleSheet.create({
  base: {
    backgroundColor: colors.palette.background
  },
  header1: {
    fontSize: 24,
    fontFamily: fonts.demi,
    color: colors.text.header,
  },
  header2: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.text.header
  },
  header3: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.text.header
  },
  paragraph: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text.paragraph
  },
  caption: {
    fontSize: 16,
    fontFamily: fonts.light,
    color: colors.text.caption
  },
  small: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.text.caption
  },
});

const theme = {
  base,
  typography
}

export default theme;
