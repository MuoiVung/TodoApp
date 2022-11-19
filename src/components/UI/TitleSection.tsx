import React from 'react';
import {StyleSheet, Text} from 'react-native';
import COLOR from '../../constants/colors';
import FONT from '../../constants/fonts';
import {scaleSizeUI} from '../../util/scaleSizeUI';

type Props = {
  title: string;
};

const TitleSection = ({title}: Props) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default TitleSection;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONT.POPPINS_600,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    marginBottom: scaleSizeUI(10, true),
    textTransform: 'capitalize',
    color: COLOR.BLACK_500,
  },
});
