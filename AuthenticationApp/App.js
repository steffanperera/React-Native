import React from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={AppStyles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
