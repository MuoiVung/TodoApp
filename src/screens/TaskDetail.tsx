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
import {editTask} from '../redux/reducers/tasksSlice';
import type {
  PriorityType,
  Task,
  TaskDetailScreenRouteProp,
  TaskDetailsScreenNavigationProp,
} from '../types/types';
import {scaleSizeUI} from '../util/scaleSizeUI';

type Props = {
  navigation: TaskDetailsScreenNavigationProp;
  route: TaskDetailScreenRouteProp;
};

const NewTask = ({navigation, route}: Props) => {
  const {task} = route.params;

  const [taskName, setTaskName] = useState(task.name);
  const [taskDate, setTaskDate] = useState(task.date);
  const [taskPriority, setTaskPriority] = useState<PriorityType>(task.priority);
  const [taskTime, setTaskTime] = useState(task.time);
  const [taskDetails, setTaskDetails] = useState(task.details);
  const dispatch = useAppDispatch();

  const editTaskHandler = () => {
    const newTask: Task = {
      id: task.id,
      name: taskName,
      priority: taskPriority,
      date: taskDate,
      time: taskTime,
      details: taskDetails,
      isComplete: false,
    };
    dispatch(editTask(newTask));

    navigation.goBack();
  };

  return (
    <LinearGradientContainer>
      <ScrollView>
        <Input
          label="Task Name"
          defaultValue={task.name}
          autoCapitalize="words"
          placeholder="Please enter task name!"
          maxLength={20}
          onChangeText={text => setTaskName(text)}
        />
        <View style={styles.priority}>
          <Priority
            onSetTaskPriority={setTaskPriority}
            defaultPriority={task.priority}
          />
        </View>
        <Input
          label="Date"
          defaultValue={task.date}
          placeholder="dd/mm/yyyy"
          maxLength={20}
          onChangeText={text => setTaskDate(text)}
        />
        <Input
          label="Time"
          defaultValue={task.time}
          placeholder="XX:XX AM/PM - XX:XX AM/PM"
          maxLength={20}
          onChangeText={text => setTaskTime(text)}
        />
        <Input
          label="Task Details"
          defaultValue={task.details}
          placeholder="Please enter task details at here!"
          maxLength={100}
          numberOfLines={4}
          onChangeText={text => setTaskDetails(text)}
        />
        <CustomButton
          style={styles.saveBtn}
          styleText={styles.saveBtnText}
          onPress={editTaskHandler}>
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
