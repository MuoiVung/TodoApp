import {createSlice} from '@reduxjs/toolkit';
import type {Task, TasksState} from '../../types/types';

const initialState: TasksState = {
  value: [],
  completedTasks: [],
  runningTasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: {payload: Task}) => {
      const payload = action.payload;
      state.value = [...state.value, payload];
      state.runningTasks.push(payload.id);
    },
    removeTask: (state, action: {payload: string}) => {
      const payload = action.payload;
      state.value = state.value.filter((task: Task) => task.id !== payload);
      state.runningTasks = state.runningTasks.filter(task => task !== payload);
      state.completedTasks = state.completedTasks.filter(
        task => task !== payload,
      );
    },
    editTask: (state, action: {payload: Task}) => {
      const payload = action.payload;
      const indexTask = state.value.findIndex(task => task.id === payload.id);
      state.value[indexTask] = payload;
    },
    completeTask: (state, action: {payload: string}) => {
      const payload = action.payload;
      const indexTask = state.value.findIndex(task => task.id === payload);
      const currentTask = state.value[indexTask];
      currentTask.isComplete = !currentTask.isComplete;
      if (currentTask.isComplete) {
        state.completedTasks.push(payload);
        state.runningTasks = state.runningTasks.filter(
          task => task !== payload,
        );
      } else {
        state.completedTasks = state.completedTasks.filter(
          task => task !== payload,
        );
        state.runningTasks.push(payload);
      }
    },
  },
});

export const {addTask, removeTask, editTask, completeTask} = tasksSlice.actions;

export default tasksSlice.reducer;
