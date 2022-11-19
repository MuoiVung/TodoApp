import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import store from '../redux/store';

export type RootStackParamList = {
  HomeNavigation: undefined;
  NewTask: undefined;
  TaskDetail: {task: Task};
  TotalTasks: undefined;
};

export type TabParamList = {
  Home: undefined;
  Calendar: undefined;
  Profile: undefined;
  Setting: undefined;
};

export type NewTaskScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewTask'
>;

export type TotalTasksScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TotalTasks'
>;

export type TaskDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TaskDetail'
>;

export type TaskDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'TaskDetail'
>;

export type HomeScreenNavigationProp = BottomTabNavigationProp<
  TabParamList,
  'Home'
>;

export type PriorityType = 'high' | 'medium' | 'low';

export type Task = {
  id: string;
  name: string;
  priority: PriorityType;
  date: string;
  time: string;
  details: string;
  isComplete: boolean;
};

export type TasksState = {
  value: Task[];
  completedTasks: string[];
  runningTasks: string[];
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
