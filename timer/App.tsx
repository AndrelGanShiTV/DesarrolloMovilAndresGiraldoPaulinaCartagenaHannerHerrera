import React from 'react';
import {
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.contains}>
      <Text style={style.title}>Gestion de {''}</Text>
      <Text style={style.title}>Horas</Text>
      <Button title="Iniciar Horas"></Button>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  contains: {
    backgroundColor: '#F3F4f6',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'caption',
    fontSize: 25,
    color: '#5195FF',
  },
});
export default App;
