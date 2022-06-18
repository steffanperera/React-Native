import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello sssWorld!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  text: {
    color: '#ff3322',
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default App;
