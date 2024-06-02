import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:30,margin:20,marginLeft:-9}}>  {count} </Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={[styles.button, { backgroundColor: 'red' }]} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
        <View style={styles.buttonSpacing} />
        <TouchableHighlight style={[styles.button, { backgroundColor: 'red' }]} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableHighlight>
        <View style={styles.buttonSpacing} />
        <TouchableHighlight style={[styles.button, { backgroundColor: 'red' }]} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonSpacing: {
    marginHorizontal: 15,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
