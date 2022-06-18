import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {RadioGroup, CheckBoxGroup} from '@geekofia/react-native-components';

const data = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [selection, setSelection] = React.useState<string>('');
  const [multiSelection, setMultiSelection] = React.useState<string[]>([]);

  const backgroundStyle = {
    flexGrow: 1,
    backgroundColor: isDarkMode ? '#252525' : '#ededed',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        animated={true}
        backgroundColor={isDarkMode ? '#252525' : '#ededed'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Radio Group</Text>
          <Text style={styles.selectedText}>
            {selection ? selection : 'Nothing'} selected
          </Text>
          <RadioGroup
            options={data}
            selected={selection}
            setSelection={setSelection}
            radioGroupStyle={styles.radioGroupStyle}
            radioContainerStyle={styles.radioContainerStyle}
            radioLabelStyle={styles.radioLabelStyle}
            darkMode={isDarkMode}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>CheckBox Group</Text>
          <Text style={styles.selectedText}>
            {multiSelection.length > 0 ? multiSelection.join(', ') : 'Nothing'}{' '}
            selected
          </Text>
          <CheckBoxGroup
            options={data}
            selectedValues={multiSelection}
            updateSelection={setMultiSelection}
            checkBoxGroupStyle={styles.checkBoxGroupStyle}
            checkBoxContainerStyle={styles.checkBoxContainerStyle}
            checkBoxLabelStyle={styles.radioLabelStyle}
            darkMode={isDarkMode}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  selectedText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 16,
    backgroundColor: '#0091ea',
    padding: 8,
    textTransform: 'capitalize',
  },
  radioGroupStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  radioContainerStyle: {padding: 4},
  radioLabelStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  checkBoxGroupStyle: {
    marginVertical: 16,
  },
  checkBoxContainerStyle: {paddingVertical: 8},
});

export default App;
