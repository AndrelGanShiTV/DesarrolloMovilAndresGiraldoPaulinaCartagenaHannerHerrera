import React, { useState } from 'react'; // importar react
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
import Formulario from './src/components/Formulario';

const App = () => {//array funcion
  const[modalVisible,setModalVisible] = useState(false)

  const citaHandle=()=>{
    console.log('Se dio Click en el boton')
  }

  return (
    //Solo se renderiza el elemento de mayor prioridad,en este caso el de mayor prioridad es safeareaview
    <SafeAreaView style={style.contains}> 
      <View>
        <Text style={style.title}>GESTION DE{' '}
          <Text>HORAS</Text>
        </Text>
      </View>
      <View>
        <Pressable onPress={citaHandle} style={style.btnNuevaCita}>
          <Text style={style.btnTextoNuevaCita}>Crear Cita</Text>
        </Pressable>
        <Formulario 
          modalVisible = {modalVisible}
          setModalVisible = {setModalVisible}
        />
      </View>
      

      {/* <Pressable
        onPress={() => {
          console.log('Presionaste El Boton');
        }}>
        <Text style={style.title}>Este es un bo</Text>
      </Pressable>
      <View style={style.campo}>
        <Text style={style.label}>Nombre trabajador</Text>
        <TextInput
          style={style.input}
          placeholder="Nombre trabajador"
          placeholderTextColor={'#ccc'}
        />
        <Text style={style.label}>Contraseña</Text>
        <TextInput
          style={style.input}
          placeholder="contraseña"
          placeholderTextColor={'#ccc'}
        />
        <Text style={style.label}></Text>
        <Button title="login"></Button>
        <Text style={style.label}></Text>
        <Button title="registrar"></Button>
      </View> */}
      
    </SafeAreaView>
  );
};
//se crea una costante, crear (create) con los parametros
const style = StyleSheet.create({
  contains: {
    backgroundColor: '#ccc',
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
    fontWeight:'900',
    textTransform: 'uppercase',
  },
});
export default App;
