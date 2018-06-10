import React from 'react';
import { Button as RNButton } from 'react-native-elements';

import fonts from '../constants/fonts';
import colors from '../constants/colors';

const styles = {
  text: {
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  buttonBase: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.palette.primary,
    backgroundColor: colors.palette.primary,
  },
  buttonFlat: {
    backgroundColor: colors.palette.background
  },
  textFlat: {
    color: colors.palette.primary
  },
  disabled: {
    borderColor: colors.disabled.background,
    backgroundColor: colors.disabled.background,
  },
  disabledFlat: {
    borderColor: colors.text.disabled,
    backgroundColor: colors.palette.background,
  },
  disabledText: {
    color: colors.text.disabled
  },
  shadow: {
    elevation: 2,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowColor: colors.basic.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
  }
}

const Button = ({
  flat,
  label,
  style,
  labelStyle,
  disabledStyle,
  disabledLabelStyle,
  ...props
}) => <RNButton
    title={label.toUpperCase()}
    disabledTextStyle={[styles.disabledText, disabledLabelStyle]}
    textStyle={[styles.text, flat && styles.textFlat, labelStyle]}
    disabledStyle={[styles.disabled, flat && styles.disabledFlat, disabledStyle]}
    buttonStyle={[styles.buttonBase, flat && styles.buttonFlat, !flat && styles.shadow, style]}
    {...props} />

Button.defaultProps = {
  style: {},
  flat: false,
  labelStyle: {},
  label: 'Button',
  disabledStyle: {},
  disabledLabelStyle: {}
}

export default Button;
