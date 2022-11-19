import React from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLOR from '../../constants/colors';
import FONT from '../../constants/fonts';
import IconButton from '../UI/IconButton';

type Props = {
  icon: ImageSourcePropType;
  styleIconBtn?: ViewStyle;
  name: string;
  numOfTask: number;
  numberStyle?: TextStyle;
  onPress?: () => void;
};

const Feature = ({
  icon,
  styleIconBtn,
  name,
  numOfTask,
  numberStyle,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IconButton icon={icon} style={styleIconBtn} />
      <Text style={styles.name}>{name}</Text>
      <Text style={[styles.number, numberStyle]}>{numOfTask}</Text>
    </TouchableOpacity>
  );
};

export default Feature;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: COLOR.WHITE_O2,
    borderBottomWidth: 2,
    borderBottomColor: COLOR.WHITE_200,
  },
  name: {
    textTransform: 'capitalize',
    marginLeft: 20,
    marginRight: 10,
    fontSize: 12,
    lineHeight: 18,
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: COLOR.GRAY_800,
    fontFamily: FONT.POPPINS,
    color: COLOR.BLACK_500,
  },
  number: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FONT.POPPINS_600,
    color: COLOR.PRIMARY,
  },
});
