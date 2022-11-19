import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../hooks/redux.hook';
import LinearGradientContainer from '../components/UI/LinearGradientContainer';
import type {Task} from '../types/types';
import TaskItem from '../components/TotalTasks/TaskItem';
import COLOR from '../constants/colors';
import {scaleSizeUI} from '../util/scaleSizeUI';

type Props = {};

const TotalTasks = (props: Props) => {
  const {value} = useAppSelector(state => state.tasks);

  const renderTask = ({item}: {item: Task}) => <TaskItem item={item} />;
  return (
    <LinearGradientContainer style={styles.linearGradient}>
      <View style={styles.screen}>
        <FlatList
          data={value}
          renderItem={renderTask}
          keyExtractor={item => item.id}
        />
      </View>
    </LinearGradientContainer>
  );
};

export default TotalTasks;

const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 0,
  },
  screen: {
    backgroundColor: COLOR.WHITE,
    flex: 1,
    padding: scaleSizeUI(20),
  },
});
