import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import COLOR from '../../constants/colors';
import FONT from '../../constants/fonts';
import {scaleSizeUI} from '../../util/scaleSizeUI';
import TitleSection from './TitleSection';

type Props = {
  label: string;
  onChangeText?: (text: string) => void;
  defaultValue?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  placeholder?: string;
  maxLength?: number;
  numberOfLines?: number;
};

const Input = ({
  label,
  defaultValue,
  onChangeText,
  autoCapitalize,
  placeholder,
  maxLength,
  numberOfLines,
}: Props) => {
  return (
    <View style={styles.container}>
      <TitleSection title={label} />
      <TextInput
        style={numberOfLines ? [styles.input, styles.inputArea] : styles.input}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        multiline={numberOfLines ? true : false}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: scaleSizeUI(24, true),
  },
  input: {
    backgroundColor: COLOR.WHITE_O8,
    paddingHorizontal: scaleSizeUI(20),
    paddingVertical: scaleSizeUI(16, true),
    borderRadius: 10,
    fontFamily: FONT.POPPINS,
    fontSize: 12,
    lineHeight: 18,
    color: COLOR.BLACK_500,
  },
  inputArea: {
    textAlignVertical: 'top',
  },
});
