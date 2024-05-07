import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Drinks from './src/Drinks';

export default function App() {
  return (
    <View style={styles.container}>
      <Drinks style={styles.text} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'column',
    paddingTop: 100
  },
  text: {
    color: '#000'
  }
});
