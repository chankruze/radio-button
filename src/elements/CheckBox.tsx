/*
Author: chankruze (chankruze@gmail.com)
Created: Fri Jun 17 2022 21:37:31 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface CheckBoxProps {
  label: string;
  value: string;
  containerStyle?: StyleProp<ViewStyle>;
  uncheckedViewStyle?: StyleProp<ViewStyle>;
  checkedViewStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  isChecked?: boolean;
  setChecked: (value: string) => void;
  setUnchecked: (value: string) => void;
  darkMode?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  value,
  containerStyle,
  uncheckedViewStyle,
  checkedViewStyle,
  labelStyle,
  isChecked,
  setChecked,
  setUnchecked,
  darkMode = false,
}) => {
  const darkBorder = {
    borderColor: darkMode ? "#fff" : "#000",
  };

  const darkBg = {
    backgroundColor: darkMode ? "#fff" : "#000",
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => {
        if (isChecked) {
          setUnchecked(value);
        } else {
          setChecked(value);
        }
      }}
    >
      <View style={[styles.icon, darkBorder, uncheckedViewStyle]}>
        {isChecked ? (
          <View style={[styles.checked, darkBg, checkedViewStyle]} />
        ) : null}
      </View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  label: {
    fontSize: 14,
    marginLeft: 8,
  },
});

export default CheckBox;
