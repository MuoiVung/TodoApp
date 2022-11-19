import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLOR from '../../constants/colors';
import {scaleSizeUI} from '../../util/scaleSizeUI';

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
};

const LinearGradientContainer = ({children, style}: Props) => {
  return (
    <LinearGradient
      colors={[COLOR.PRIMARY_LINEAR_UP, COLOR.PRIMARY_LINEAR_DOWN]}
      style={[styles.linearGradient, style]}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientContainer;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: scaleSizeUI(20),
    paddingTop: scaleSizeUI(70, true),
  },
});
