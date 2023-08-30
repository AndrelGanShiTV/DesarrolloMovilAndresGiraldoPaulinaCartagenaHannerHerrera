import React, {useState} from 'react';
import {
  //elementos y componentes
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import DatePicker from 'react-native-date-picker'

const Formulario = (modalVisible, setModalVisible) => {
  return (
    <SafeAreaView style={style.contains}>
      <View>
        <Text style={style.title}>Iniciar Sesion</Text>
        <View>
          <Text style={style.label}>Usuario</Text>
          <TextInput style={style.input} placeholder='Ingrese su Usuario'/>
        </View>
        <View>
          <Text style={style.label}>Contraseña</Text>
          <TextInput style={style.input} placeholder='Ingrese su Contraseña'/>
        </View>
        <Pressable title='btnEnviar' style={style.btnNuevaCita} onPress={() => console.log('Enviado')}>
          <Text style={style.btnTextoNuevaCita}>Iniciar Sesion</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    contains: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
    },
    title: {
      marginHorizontal: 20,
      marginVertical: 20,
      fontFamily: 'caption',
      fontSize: 30,
      color: '#5195FF',
      textAlign: 'center',
    },
    label: {
      color: '#5195FF',
      marginBottom: 10,
      marginTop: 15,
      fontSize: 20,
      fontWeight: '600',
    },
    input: {
      backgroundColor: '#000',
      color: '#fff',
      padding: 15,
      borderRadius: 10,
    },
    btnNuevaCita: {
      backgroundColor: '#6D28D9',
      padding: 15,
      borderRadius: 5,
      marginVertical: 20,
    },
    btnTextoNuevaCita: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight:'900',
      textTransform: 'uppercase',
    },
});

export default Formulario;
