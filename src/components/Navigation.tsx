import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ImageSourcePropType} from 'react-native';

import ICON from '../constants/icons';
import Calendar from '../screens/Calendar';
import Home from '../screens/Home';
import NewTask from '../screens/NewTask';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import TaskDetail from '../screens/TaskDetail';
import TotalTasks from '../screens/TotalTasks';
import type {RootStackParamList, TabParamList} from '../types/types';
import IconButton from './UI/IconButton';

const RootStack = createStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<TabParamList>();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon: ImageSourcePropType = ICON.GRID;
          if (route.name === 'Home') {
            icon = focused ? ICON.GRID_ACTIVE : ICON.GRID;
          } else if (route.name === 'Calendar') {
            icon = focused ? ICON.CALENDAR_ACTIVE : ICON.CALENDAR;
          } else if (route.name === 'Profile') {
            icon = focused ? ICON.BELL_ACTIVE : ICON.BELL;
          } else if (route.name === 'Setting') {
            icon = focused ? ICON.SEARCH_ACTIVE : ICON.SEARCH;
          }
          return <IconButton icon={icon} />;
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="HomeNavigation"
        screenOptions={{
          headerTransparent: true,
        }}>
        <RootStack.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="NewTask"
          component={NewTask}
          options={{
            headerTitle: 'Create New Task',
          }}
        />
        <RootStack.Screen
          name="TaskDetail"
          component={TaskDetail}
          options={{headerTitle: 'Task Detail'}}
        />
        <RootStack.Screen
          name="TotalTasks"
          component={TotalTasks}
          options={{headerTitle: 'Total Tasks'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
