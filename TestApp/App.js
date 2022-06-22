import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// root component
export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
