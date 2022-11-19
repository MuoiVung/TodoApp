import React from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../constants/colors';
import {scaleSizeUI} from '../../util/scaleSizeUI';
type Props = {
  children: React.ReactNode;
  disable?: boolean;
  style?: ViewStyle;
  styleText?: TextStyle;
  onPress?: () => void;
};
const CustomButton = ({
  children,
  disable = false,
  style,
  styleText,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={disable ? [styles.disableButton, style] : [styles.button, style]}
      onPress={onPress}>
      <Text
        style={
          disable ? [styles.disableText, styleText] : [styles.text, styleText]
        }>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.PRIMARY_400,
    borderRadius: 20,
    paddingVertical: scaleSizeUI(6, true),
    paddingHorizontal: scaleSizeUI(18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  disableButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
    paddingVertical: scaleSizeUI(12, true),
    paddingHorizontal: scaleSizeUI(18),
  },
  text: {
    color: COLOR.WHITE,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  disableText: {
    color: COLOR.GRAY_800,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: 'Poppins-SemiBold',
  },
});
