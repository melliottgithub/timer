import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/Focus';
import { FocusHistory } from './src/features/FocusHistory';
import { Timer } from './src/features/Timer';
import { colors } from './src/utils/colors';

export default function App() {
  const [currSubject, setCurrSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currSubject ? (
        <>
          <Focus style={styles.text} addSubject={setCurrSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currSubject}
          onTimerEnd={(subject) => setHistory([...history, subject])}
          clearSubject={() => setCurrSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.turq,
  },
  text: {
    color: colors.white,
  },
});
