import React from 'react';
import { Input as RNInput } from 'react-native-elements';

import fonts from '../constants/fonts';
import colors from '../constants/colors';

const styles = {
  container: {
    margin: 20
  },
  inputContainer: {
    borderColor: colors.text.placeholder
  },
  inputContainerActive: {
    borderBottomWidth: 2,
    borderColor: colors.palette.primary
  },
  input: {
    marginLeft: 0,
    fontFamily: fonts.regular,
    color: colors.text.paragraph,
  },
  error: {
    marginLeft: 0,
    fontFamily: fonts.regular,
    color: colors.messages.error
  }
}

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      isActive: false
    }
  }

  render() {
    return <RNInput
      {...this.props}
      errorStyle={styles.error}
      inputStyle={styles.input}
      containerStyle={styles.container}
      placeholderTextColor={colors.text.placeholder}
      onFocus={() => this.setState({ isActive: true })}
      onBlur={() => this.setState({ isActive: false })}
      inputContainerStyle={this.state.isActive ? styles.inputContainerActive : styles.inputContainer}
    />;
  }
}

Input.defaultProps = {
  placeholder: 'Input'
}

export default Input;
