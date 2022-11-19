import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import COLOR from '../../constants/colors';
import ICON from '../../constants/icons';

type Props = {
  style?: ViewStyle;
};

const PriorityTask = ({style}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <Image source={ICON.WAVE} style={styles.icon} />
      </View>
      <Text style={styles.title}>Priority task {'\n'}progress</Text>
      <View style={styles.process}>
        <View style={styles.numberTask}>
          <Text style={styles.number}>3/5</Text>
        </View>
        <Text style={styles.completion}>68.9%</Text>
      </View>
    </TouchableOpacity>
  );
};
export default PriorityTask;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderWidth: 2,
    borderColor: COLOR.PRIMARY,
    borderRadius: 20,
    backgroundColor: COLOR.WHITE_O2,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 48,
    backgroundColor: COLOR.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    marginTop: 24,
    color: COLOR.BLACK_500,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  process: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numberTask: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 20,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 20,
  },
  number: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: COLOR.PRIMARY,
    lineHeight: 15,
  },
  completion: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: COLOR.BLACK_500,
  },
});
