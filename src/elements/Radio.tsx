/*
Author: chankruze (chankruze@gmail.com)
Created: Thu Jun 16 2022 21:30:44 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface RadioProps {
  label: string;
  value: string;
  radioContainerStyle?: StyleProp<ViewStyle>;
  selectionContainerStyle?: StyleProp<ViewStyle>;
  selectedViewStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  selected?: boolean;
  setSelection: (value: string) => void;
  darkMode?: boolean;
}

const Radio: React.FC<RadioProps> = ({
  label,
  value,
  radioContainerStyle,
  selectionContainerStyle,
  selectedViewStyle,
  labelStyle,
  selected,
  setSelection,
  darkMode = false,
}) => {
  const darkBorder = {
    borderColor: darkMode ? '#fff' : '#000',
  };

  const darkBg = {
    backgroundColor: darkMode ? '#fff' : '#000',
  };

  return (
    <TouchableOpacity
      style={[styles.container, radioContainerStyle]}
      onPress={() => setSelection(value)}
    >
      <View style={[styles.icon, darkBorder, selectionContainerStyle]}>
        {selected ? <View style={[styles.selected, darkBg, selectedViewStyle]} /> : null}
      </View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  label: {
    fontSize: 14,
    marginLeft: 8,
  },
});

export default Radio;
