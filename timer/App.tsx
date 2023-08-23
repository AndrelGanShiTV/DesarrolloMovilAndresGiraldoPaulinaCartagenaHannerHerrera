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
  TextInput,
  Pressable,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.contains}>
      <Text style={style.title}>Gestion de {''}</Text>
      <Text style={style.title}>Horas</Text>
      <Button title="Iniciar Horas"></Button>

      <Pressable
        onPress={() => {
          console.log('Presionaste El Boton');
        }}>
        <Text style={style.title}>Este es un boton</Text>
      </Pressable>
      {/* <View style={style.campo}>
        <Text style={style.label}>Nombre Propietario</Text>
        <TextInput
          style={style.input}
          placeholder="Nombre Propietario"
          placeholderTextColor={'#ccc'}
        />
      </View> */}
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
  label: {
    color: '#5195FF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  input: {
    backgroundColor: '#FFF',
    color: '#000',
    padding: 15,
    borderRadius: 10,
  },
});
export default App;
