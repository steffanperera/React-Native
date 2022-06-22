import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

// root component
export default function App() {
  const [name, setName] = useState('sam');
  const [age, setAge] = useState(30);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Enter text:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Eg: saman"
          onChangeText={val => {
            setName(val);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Enter age:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          placeholder="Eg: 20"
          onChangeText={val => {
            setAge(val);
          }}
        />
      </View>
      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
