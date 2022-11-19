import React from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FONT from '../../constants/fonts';
import type {PriorityType} from '../../types/types';
import {scaleSizeUI} from '../../util/scaleSizeUI';

type Props = {
  name: PriorityType;
  style?: ViewStyle;
  nameStyle?: TextStyle;
  onPress: (option: PriorityType) => void;
  option: PriorityType;
};

let isSelected = false;

const SelectedButton = ({name, style, nameStyle, onPress, option}: Props) => {
  isSelected = name === option;

  const selectPriorityHandler = () => {
    onPress(name);
  };

  return (
    <TouchableOpacity
      style={
        isSelected
          ? [styles.button, style]
          : [styles.button, style, styles.unselected]
      }
      onPress={selectPriorityHandler}>
      <Text style={[styles.text, nameStyle]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SelectedButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    fontFamily: FONT.POPPINS,
    fontSize: 12,
    lineHeight: 18,
    paddingVertical: scaleSizeUI(14, true),
    paddingHorizontal: scaleSizeUI(24),
    textTransform: 'capitalize',
  },
  unselected: {
    backgroundColor: 'transparent',
  },
});
