import React, { useState } from 'react';
import Formulario from './src/components/Formulario';
import Login from './src/components/Login';
import {//elementos y componentes
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


const App = () => {//array funcion
  const [modalVisible, setModalVisible] = useState(false)
  const [modalLogin, setModalLogin] = useState(false)

  const cerrarModal = () => {
    setModalVisible(false)
    setModalLogin(false)
  }



  return (
    //Solo se renderiza el elemento de mayor prioridad,en este caso el de mayor prioridad es safeareaview
    <SafeAreaView style={style.contains}>

      <Text style={style.title}>
        GESTION DE
        <Text> HORAS</Text>
      </Text>


      <Pressable
        style={style.btnNuevaCita}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={style.btnNuevaCita}>crear cita</Text>
      </Pressable>
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}

      />
      <Pressable
        style={style.btnNuevaCita}
        onPress={() => setModalLogin(!modalLogin)}
      >
        <Text style={style.btnNuevaCita}>login</Text>
      </Pressable>
      <Login
        modalLogin={modalLogin}
        setModalLogin={setModalLogin}

      />

    </SafeAreaView>
  );
};
//se crea una costante, crear (create) con los parametros
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
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    borderRadius: 5,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});
export default App;
