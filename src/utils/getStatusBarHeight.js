import { Platform } from 'react-native';

export default () => {
  if (Platform.OS === 'ios') {
    return 24;
  }

  return 0;
}
