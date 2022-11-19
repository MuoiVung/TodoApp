import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  icon: ImageSourcePropType;
  style?: ViewStyle;
  styleIcon?: ImageStyle;
  onPress?: () => void;
};
const IconButton = ({icon, style, onPress, styleIcon}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={onPress ? false : true}>
      <Image source={icon} style={[styles.icon, styleIcon]} />
    </TouchableOpacity>
  );
};
export default IconButton;
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    width: '100%',
    height: '100%',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
