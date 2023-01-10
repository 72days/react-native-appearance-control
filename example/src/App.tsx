import * as React from 'react';

import { StyleSheet, View, Text, useColorScheme, Button } from 'react-native';
import {
  setAppearanceDark,
  setAppearanceLight,
  setAppearanceSystem,
} from 'react-native-appearance-control';

export default function App() {
  const [mode, setMode] = React.useState<'dark' | 'light' | 'system'>('system');

  const colorScheme = useColorScheme();

  const appearance = mode === 'system' ? colorScheme : mode;

  React.useEffect(() => {
    switch (mode) {
      case 'dark':
        setAppearanceDark();
        break;
      case 'light':
        setAppearanceLight();
        break;
      case 'system':
        setAppearanceSystem();
        break;
    }
  }, [mode]);

  const backgroundColor = appearance === 'dark' ? '#000' : '#fff';
  const color = appearance === 'dark' ? '#fff' : '#000';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={{ color }}>Mode: {mode}</Text>
      <Text style={{ color }}>Appearance: {appearance}</Text>
      <View>
        <Button title="Dark" onPress={() => setMode('dark')} />
        <Button title="Light" onPress={() => setMode('light')} />
        <Button title="System" onPress={() => setMode('system')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
