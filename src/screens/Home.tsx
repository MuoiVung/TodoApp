import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Features from '../components/Home/Features';
import PriorityTask from '../components/Home/PriorityTask';
import CustomButton from '../components/UI/CustomButton';
import IconButton from '../components/UI/IconButton';
import COLOR from '../constants/colors';
import ICON from '../constants/icons';
import type {NewTaskScreenNavigationProp} from '../types/types';
import {scaleSizeUI} from '../util/scaleSizeUI';

const Home = () => {
  const navigation = useNavigation<NewTaskScreenNavigationProp>();

  return (
    <LinearGradient
      colors={[COLOR.PRIMARY_LINEAR_UP, COLOR.PRIMARY_LINEAR_DOWN]}
      style={styles.linearGradient}>
      {/* StatusBar */}
      <StatusBar backgroundColor={COLOR.PRIMARY_LINEAR_UP} />

      {/* Title */}
      <View style={styles.title}>
        <Text style={styles.titleText}>
          Hello, {'\n'}
          <Text style={styles.boldText}>Sarah Mclaren</Text>
        </Text>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-O6RxdxvT6zRrN92202IXN1RUA7TSHteOZw&usqp=CAU',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Function buttons */}
      <View style={styles.buttons}>
        <CustomButton style={styles.overviewButton}>Overview</CustomButton>
        <CustomButton disable={true}>Productivity</CustomButton>
        <IconButton
          icon={ICON.OPTIONS}
          style={styles.optionsIconContainer}
          styleIcon={styles.optionsIcon}
        />
      </View>

      {/* Priority task progress */}
      <View style={styles.priorities}>
        <PriorityTask style={styles.priorityLeft} />
        <PriorityTask />
      </View>

      {/* Advance features */}
      <Text style={styles.featuresTitle}>Advance Features</Text>
      <Features />

      {/* Add Task Button */}
      <View style={styles.addBtnContainer}>
        <IconButton
          icon={ICON.PLUS}
          style={styles.addBtn}
          styleIcon={styles.addBtnIcon}
          onPress={() => navigation.navigate('NewTask')}
        />
      </View>
    </LinearGradient>
  );
};
export default Home;
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: scaleSizeUI(20),
    paddingTop: scaleSizeUI(16, true),
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: COLOR.BLACK_500,
  },
  boldText: {
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 120,
  },
  buttons: {
    marginVertical: scaleSizeUI(24, true),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionsIconContainer: {
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
    backgroundColor: COLOR.WHITE_O6,
  },
  optionsIcon: {
    width: 24,
    height: 24,
  },
  priorities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priorityLeft: {
    marginRight: scaleSizeUI(20),
  },
  featuresTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: COLOR.BLACK_500,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 24,
  },
  addBtnContainer: {
    position: 'absolute',
    bottom: scaleSizeUI(30, true),
    right: scaleSizeUI(30),
  },
  addBtn: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  addBtnIcon: {
    width: 24,
    height: 24,
  },
  overviewButton: {
    paddingVertical: scaleSizeUI(12, true),
  },
});
