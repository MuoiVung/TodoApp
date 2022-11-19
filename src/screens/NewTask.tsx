import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import Priority from '../components/NewTask/Priority';
import CustomButton from '../components/UI/CustomButton';
import Input from '../components/UI/Input';
import LinearGradientContainer from '../components/UI/LinearGradientContainer';
import {useAppDispatch} from '../hooks/redux.hook';
import {addTask} from '../redux/reducers/tasksSlice';
import type {
  NewTaskScreenNavigationProp,
  PriorityType,
  Task,
} from '../types/types';
import {scaleSizeUI} from '../util/scaleSizeUI';

type Props = {
  navigation: NewTaskScreenNavigationProp;
};

const NewTask = ({navigation}: Props) => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskPriority, setTaskPriority] = useState<PriorityType>('high');
  const [taskTime, setTaskTime] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const dispatch = useAppDispatch();

  const addTaskHandler = () => {
    const newTask: Task = {
      id: uuidv4(),
      name: taskName,
      priority: taskPriority,
      date: taskDate,
      time: taskTime,
      details: taskDetails,
      isComplete: false,
    };

    dispatch(addTask(newTask));
    navigation.replace('TotalTasks');
  };

  return (
    <LinearGradientContainer>
      <ScrollView>
        <Input
          label="Task Name"
          defaultValue=""
          autoCapitalize="words"
          placeholder="Please enter task name!"
          maxLength={20}
          onChangeText={text => setTaskName(text)}
        />
        <View style={styles.priority}>
          <Priority onSetTaskPriority={setTaskPriority} />
        </View>
        <Input
          label="Date"
          defaultValue=""
          placeholder="dd/mm/yyyy"
          maxLength={20}
          onChangeText={text => setTaskDate(text)}
        />
        <Input
          label="Time"
          defaultValue=""
          placeholder="XX:XX AM/PM - XX:XX AM/PM"
          maxLength={20}
          onChangeText={text => setTaskTime(text)}
        />
        <Input
          label="Task Details"
          defaultValue=""
          placeholder="Please enter task details at here!"
          maxLength={100}
          numberOfLines={4}
          onChangeText={text => setTaskDetails(text)}
        />
        <CustomButton
          style={styles.saveBtn}
          styleText={styles.saveBtnText}
          onPress={addTaskHandler}>
          Save
        </CustomButton>
      </ScrollView>
    </LinearGradientContainer>
  );
};
export default NewTask;
const styles = StyleSheet.create({
  priority: {
    marginBottom: scaleSizeUI(24, true),
  },
  saveBtn: {
    marginVertical: scaleSizeUI(12, true),
  },
  saveBtnText: {
    padding: scaleSizeUI(8, true),
  },
});
