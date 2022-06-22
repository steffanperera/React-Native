import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import AppStyles from './style/AppStyles';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={AppStyles.layoutStyle}>
          <Text style={AppStyles.textStyle}>Hello World</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
