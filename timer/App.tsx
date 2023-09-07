import React, { useState } from 'react';
import Formulario from './src/components/Formulario';
import Login from './src/components/Login';
import EnterHour from './src/components/EnterHour';
import News from './src/components/News';

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
  const [modalEnterHour, setModalEnterHour] = useState(false)
  const [modalLogin, setModalLogin] = useState(false)
  const [modalNews, setModalNews] = useState(false)

  const cerrarModal = () => {
    setModalVisible(false)
    setModalEnterHour(false)
    setModalLogin(false)
    setModalNews(false)

  }
  return (
    //Solo se renderiza el elemento de mayor prioridad,en este caso el de mayor prioridad es safeareaview
    <SafeAreaView style={style.contains}>


<View >
<Text style={style.Titul} >
        GESTION DE HORAS
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
        onPress={() => setModalEnterHour(!modalEnterHour)}
      >
        <Text style={style.btnTextoNuevaCita}>Registro Horas</Text>
      </Pressable>
      <EnterHour
        modalEnterHour={modalEnterHour}
        setModalEnterHour={setModalEnterHour}
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

      <Pressable
        style={style.btnNuevaCita}
        onPress={() => setModalNews(!modalNews)}
      >
        <Text style={style.btnTextoNuevaCita}>Novedades</Text>
      </Pressable>
      <News
        modalNews={modalNews}
        setmodalNews={setModalNews}
      />
</View>

    </SafeAreaView>
  );
};
//se crea una costante, crear (create) con los parametros
const style = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    
  },

  Titul: {
    fontSize: 24,
    margin : 20,
    padding: 30,
  },
  contains: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
export default App;
