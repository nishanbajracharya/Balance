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
      errorStyle={[styles.error, this.props.errorStyle]}
      inputStyle={[styles.input, this.props.inputStyle]}
      placeholderTextColor={this.props.placeholderColor}
      containerStyle={[styles.container, this.props.containerStyle]}
      onBlur={props => { this.setState({ isActive: false }); this.props.onBlur(props) }}
      onFocus={props => { this.setState({ isActive: true }); this.props.onFocus(props) }}
      inputContainerStyle={this.state.isActive ? [styles.inputContainerActive, this.props.inputContainerActiveStyle] : [styles.inputContainer, this.props.inputContainerStyle]}
    />;
  }
}

Input.defaultProps = {
  onBlur: f => f,
  errorStyle: {},
  inputStyle: {},
  onFocus: f => f,
  containerStyle: {},
  placeholder: 'Input',
  inputContainerStyle: {},
  inputContainerActiveStyle: {},
  placeholderColor: colors.text.placeholder,
}

export default Input;
