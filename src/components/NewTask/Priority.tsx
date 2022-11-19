import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import COLOR from '../../constants/colors';
import type {PriorityType} from '../../types/types';
import SelectedButton from '../UI/SelectedButton';
import TitleSection from '../UI/TitleSection';

type Props = {
  onSetTaskPriority: (option: PriorityType) => void;
  defaultPriority?: PriorityType;
};

const Priority = ({onSetTaskPriority, defaultPriority}: Props) => {
  const [priority, setPriority] = useState<PriorityType>(
    defaultPriority ? defaultPriority : 'high',
  );

  const selectPriorityHandler = (option: PriorityType) => {
    onSetTaskPriority(option);
    setPriority(option);
  };

  return (
    <View style={styles.container}>
      <TitleSection title="task priority" />
      <View style={styles.btnContainer}>
        <SelectedButton
          name="high"
          style={styles.highBtn}
          nameStyle={styles.nameHighBtn}
          onPress={selectPriorityHandler}
          option={priority}
        />
        <SelectedButton
          name="medium"
          style={styles.mediumBtn}
          nameStyle={styles.nameMediumBtn}
          onPress={selectPriorityHandler}
          option={priority}
        />
        <SelectedButton
          name="low"
          style={styles.lowBtn}
          nameStyle={styles.nameLowBtn}
          onPress={selectPriorityHandler}
          option={priority}
        />
      </View>
    </View>
  );
};

export default Priority;

const styles = StyleSheet.create({
  container: {},
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  highBtn: {
    borderColor: COLOR.PRIMARY_400,
    backgroundColor: COLOR.PRIMARY_200,
  },
  nameHighBtn: {
    color: COLOR.PRIMARY_400,
  },
  mediumBtn: {
    borderColor: COLOR.BLUE,
    backgroundColor: COLOR.BLUE_200,
  },
  nameMediumBtn: {
    color: COLOR.BLUE,
  },
  lowBtn: {
    borderColor: COLOR.GREEN,
    backgroundColor: COLOR.GREEN_200,
  },
  nameLowBtn: {
    color: COLOR.GREEN,
  },
});
