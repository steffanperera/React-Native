import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import AppStyles from './style/AppStyles';

const App = () => {
  return (
    <View style={AppStyles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

export default App;
