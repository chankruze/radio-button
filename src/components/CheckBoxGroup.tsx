/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Jun 17 2022 22:04:58 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React, { useCallback } from "react";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import CheckBox from "../elements/CheckBox";
import type { OptionType } from "src/types/OptionType";

interface CheckBoxGroupProps {
  options: OptionType[];
  selectedValues: Array<any>;
  updateSelection: (value: any) => void;
  checkBoxGroupStyle?: StyleProp<ViewStyle>;
  checkBoxContainerStyle?: StyleProp<ViewStyle>;
  checkBoxLabelStyle?: StyleProp<TextStyle>;
  uncheckedViewStyle?: StyleProp<ViewStyle>;
  checkedViewStyle?: StyleProp<ViewStyle>;
  darkMode?: boolean;
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  options,
  selectedValues,
  updateSelection,
  checkBoxGroupStyle,
  checkBoxContainerStyle,
  checkBoxLabelStyle,
  uncheckedViewStyle,
  checkedViewStyle,
  darkMode = false,
}) => {
  const check = useCallback(
    (value: string) => {
      updateSelection((prevSelection: any) => [...prevSelection, value]);
    },
    [updateSelection]
  );

  const uncheck = useCallback(
    (value: string) => {
      updateSelection((prevSelection: any) =>
        prevSelection.filter((item: any) => item !== value)
      );
    },
    [updateSelection]
  );

  const renderCheckBoxes = useCallback(() => {
    return options.map((option, index) => {
      return (
        <CheckBox
          key={index}
          label={option.label}
          value={option.value}
          isChecked={selectedValues.includes(option.value)}
          setChecked={check}
          setUnchecked={uncheck}
          containerStyle={checkBoxContainerStyle}
          labelStyle={checkBoxLabelStyle}
          uncheckedViewStyle={uncheckedViewStyle}
          checkedViewStyle={checkedViewStyle}
          darkMode={darkMode}
        />
      );
    });
  }, [
    options,
    selectedValues,
    check,
    uncheck,
    checkBoxContainerStyle,
    checkBoxLabelStyle,
    uncheckedViewStyle,
    checkedViewStyle,
    darkMode,
  ]);

  return <View style={checkBoxGroupStyle}>{renderCheckBoxes()}</View>;
};

export default CheckBoxGroup;
