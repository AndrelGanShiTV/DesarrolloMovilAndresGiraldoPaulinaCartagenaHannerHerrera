import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.contains}>
      <Text style={style.title}>Gestion de Horas{''}</Text>
      <Button title="Esto es un boton"></Button>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  contains: {
    backgroundColor: '#F3F4f6',
    flex: 1,
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 2,
  },
});
export default App;
