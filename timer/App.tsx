import React, { useState } from 'react';
import Formulario from './src/components/Formulario';
<<<<<<< HEAD
import Login from './src/components/Login';
=======
import IngresoHoras from './src/components/IngresoHoras';
>>>>>>> pauli
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
import Login from './src/components/Login';

const App = () => {//array funcion
  const [modalVisible, setModalVisible] = useState(false)
<<<<<<< HEAD
=======
  const [modalIngresoHoras, setModalIngresoHoras] = useState(false)
>>>>>>> pauli
  const [modalLogin, setModalLogin] = useState(false)

  const cerrarModal = () => {
    setModalVisible(false)
<<<<<<< HEAD
=======
    setModalIngresoHoras(false)
>>>>>>> pauli
    setModalLogin(false)
  }

  return (
    //Solo se renderiza el elemento de mayor prioridad,en este caso el de mayor prioridad es safeareaview
    <SafeAreaView style={style.contains}>

      <Text style={style.title}>
<<<<<<< HEAD
        GESTION DE
        <Text> HORAS</Text>
=======
        GESTION DE HORAS
>>>>>>> pauli
      </Text>

      <Pressable
        style={style.btnNuevaCita}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={style.btnTextoNuevaCita}>crear cita</Text>
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

      <Pressable
        style={style.btnNuevaCita}
        onPress={() => setModalIngresoHoras(!modalIngresoHoras)}
      >
        <Text style={style.btnTextoNuevaCita}>Registro Horas</Text>
      </Pressable>
      <IngresoHoras
        modalIngresoHoras={modalIngresoHoras}
        setModalIngresoHoras={setModalIngresoHoras}
      />

      <Pressable
        style={style.btnNuevaCita}
        onPress={() => setModalLogin(!modalLogin)}
      >
        <Text style={style.btnTextoNuevaCita}>LOGIN</Text>
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
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
export default App;
