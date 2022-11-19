import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import COLOR from '../../constants/colors';
import ICON from '../../constants/icons';
import {useAppSelector} from '../../hooks/redux.hook';
import {TotalTasksScreenNavigationProp} from '../../types/types';
import Feature from './Feature';

const Features = () => {
  const navigation = useNavigation<TotalTasksScreenNavigationProp>();

  const {
    value: tasks,
    completedTasks,
    runningTasks,
  } = useAppSelector(state => state.tasks);

  return (
    <View>
      <Feature
        icon={ICON.CALENDAR_ACTIVE}
        name="total tasks"
        numOfTask={tasks.length > 0 ? tasks.length : 0}
        styleIconBtn={styles.totalIcon}
        onPress={() => navigation.navigate('TotalTasks')}
      />
      <Feature
        icon={ICON.CHECKMARK_CIRCLE}
        name="Completed Task"
        numOfTask={completedTasks.length > 0 ? completedTasks.length : 0}
        styleIconBtn={styles.completedIcon}
        numberStyle={styles.completedNumber}
      />
      <Feature
        icon={ICON.SYNC}
        name="Running Task"
        numOfTask={runningTasks.length > 0 ? runningTasks.length : 0}
        styleIconBtn={styles.runningIcon}
        numberStyle={styles.runningNumber}
      />
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({
  totalIcon: {
    backgroundColor: COLOR.PRIMARY_O2,
  },
  completedIcon: {
    backgroundColor: COLOR.PRIMARY_400_O2,
  },
  completedNumber: {
    color: COLOR.PRIMARY_400,
  },
  runningIcon: {
    backgroundColor: COLOR.YELLOW_O2,
  },
  runningNumber: {
    color: COLOR.YELLOW,
  },
});
