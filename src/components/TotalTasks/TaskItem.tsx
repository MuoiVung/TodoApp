import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

import COLOR from '../../constants/colors';
import FONT from '../../constants/fonts';
import {useAppDispatch} from '../../hooks/redux.hook';
import {completeTask, removeTask} from '../../redux/reducers/tasksSlice';
import type {Task, TaskDetailsScreenNavigationProp} from '../../types/types';
import {scaleSizeUI} from '../../util/scaleSizeUI';

type Props = {
  item: Task;
};

const TaskItem = ({item}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<TaskDetailsScreenNavigationProp>();

  let boxColor: string = COLOR.PRIMARY_200;
  let textColor = styles.high;

  if (item.priority === 'low') {
    boxColor = COLOR.GREEN_200;
    textColor = styles.low;
  } else if (item.priority === 'medium') {
    boxColor = COLOR.BLUE_200;
    textColor = styles.medium;
  }

  const completeTaskHandler = () => {
    dispatch(completeTask(item.id));
  };

  const editTaskHandler = () => {
    navigation.navigate('TaskDetail', {task: item});
  };

  const deleteTaskHandler = () => {
    dispatch(removeTask(item.id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <BouncyCheckbox
          size={25}
          fillColor={boxColor}
          text={item.name}
          textStyle={[styles.text, textColor]}
          onPress={completeTaskHandler}
          isChecked={item.isComplete}
        />
      </View>
      <TouchableOpacity style={styles.edit} onPress={editTaskHandler}>
        <AntDesign name="edit" size={20} style={styles.editIcon} />
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.delete} onPress={deleteTaskHandler}>
        <AntDesign name="delete" size={20} style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: scaleSizeUI(16, true),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox: {
    flex: 1,
  },
  text: {
    fontFamily: FONT.POPPINS,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  edit: {
    marginHorizontal: 16,
  },
  editIcon: {
    paddingVertical: 4,
    color: COLOR.BLUE,
  },
  delete: {
    marginLeft: 16,
  },
  deleteIcon: {
    color: COLOR.RED,
  },
  line: {
    borderRightWidth: 1,
    borderColor: COLOR.GRAY_400,
    height: 24,
  },
  high: {
    color: COLOR.PRIMARY,
  },
  medium: {
    color: COLOR.BLUE,
  },
  low: {
    color: COLOR.GREEN,
  },
});
