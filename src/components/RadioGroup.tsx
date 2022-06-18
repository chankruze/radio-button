/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Jun 16 2022 21:34:19 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, { useCallback } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import RadioButton from '../elements/Radio';
import type { OptionType } from '../types/OptionType';

interface RadioGroupProps {
  options: OptionType[];
  selected: string;
  setSelection: (value: string) => void;
  radioGroupStyle?: StyleProp<ViewStyle>;
  radioContainerStyle?: StyleProp<ViewStyle>;
  radioLabelStyle?: StyleProp<TextStyle>;
  selectionContainerStyle?: StyleProp<ViewStyle>;
  selectedViewStyle?: StyleProp<ViewStyle>;
  darkMode?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selected,
  setSelection,
  radioGroupStyle,
  radioContainerStyle,
  radioLabelStyle,
  selectionContainerStyle,
  selectedViewStyle,
  darkMode = false,
}) => {
  const renderRadioButtons = useCallback(() => {
    return options.map((option, index) => {
      return (
        <RadioButton
          key={index}
          label={option.label}
          value={option.value}
          selected={selected === option.value}
          setSelection={setSelection}
          radioContainerStyle={radioContainerStyle}
          labelStyle={radioLabelStyle}
          selectionContainerStyle={selectionContainerStyle}
          selectedViewStyle={selectedViewStyle}
          darkMode={darkMode}
        />
      );
    });
  }, [
    options,
    selected,
    setSelection,
    radioContainerStyle,
    radioLabelStyle,
    selectionContainerStyle,
    selectedViewStyle,
    darkMode,
  ]);

  return <View style={radioGroupStyle}>{renderRadioButtons()}</View>;
};

export default RadioGroup;
