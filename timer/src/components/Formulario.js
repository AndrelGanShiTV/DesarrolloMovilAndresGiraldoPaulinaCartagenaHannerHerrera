import React, { useState } from 'react';
import {
  //elementos y componentes
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-date-picker'

const Formulario = ({ modalVisible, setModalVisible }) => {
  const [paciente, setPaciente] = useState("")
  const [propetario, setPropetario] = useState("")
  const [telefono, setTelefono] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [Gmail, setGmail] = useState("")
  const [fecha, setFecha] = useState(new Date())


  return (
    <Modal
      animationType='slide'
      visible={modalVisible}
    >
      <SafeAreaView style={style.contains}>
        <ScrollView>
          <View>
            <Text style={style.title}>Asignación de Citas</Text>
          </View>
          <View>
            <Text style={style.title}>Nombre de paciente</Text>
            <TextInput
              style={style.input}
              placeholder='Ingrese nombre paciente'
              placeholderTextColor={"#666"}
              keyboardType='number-pad'
              maxLength={10}
              value={telefono}
              onChangeText={setPaciente}
            >
            </TextInput>
          </View>
          <View>
            <Text style={style.title}>Nombre de propetario</Text>
            <TextInput
              style={style.input} placeholder='Ingrese nombre del propietario'
              value={propetario}
              onChangeText={setPropetario}
            ></TextInput>
          </View>
          <View>
            <Text style={style.title}>Telefono</Text>
            <TextInput
              style={style.input}
              placeholder='Ingrese telefono'
              placeholderTextColor={"#666"}
              keyboardType='number-pad'
              maxLength={10}
              value={telefono}
              onChangeText={setTelefono}

            ></TextInput>
          </View>
          <View>
            <Text style={style.title}>Gmail</Text>
            <TextInput
              style={style.input} placeholder='Ingrese Gmail'
              value={Gmail}
              onChangeText={setGmail}
            ></TextInput>
          </View>
          <View>
            <Text style={style.title}>Fecha cita</Text>
            <DatePicker
              locale='es'
              mode='date'
              date={fecha}
              onDateChange={() => setFecha(new Date())}
            />

          </View>
          <View>
            <Text style={style.title}>Sintomas</Text>
            <TextInput
              style={style.input}
              placeholder='sintomas'
              placeholderTextColor={"#666"}
              numberOfLines={5}
              multiline={true}
              value={sintomas}
              onChangeText={setSintomas}
            ></TextInput>
          </View>
          <View>
<<<<<<< HEAD
            <Text style={style.label}>fecha</Text>
            <View style={style.label}>
              <DatePicker
                locale="es"
                mode="Date"
                onDatechange={(date) => setFecha(date)}
              />
            </View>
=======
            <Pressable style={style.btnNuevaCita}
              onPress={() => { cerrarModal }}
            >
              <Text>Guardar</Text>
            </Pressable>
            <Pressable
              style={style.btnNuevaCita}
              onLongPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={style.btnNuevaCita}>cancelar</Text>
            </Pressable>
>>>>>>> dfafd5c55f4883e9f7ddd03e4778e4f15aa09eae
          </View>
        </ScrollView>
      </SafeAreaView >
    </Modal >
  );
};

const style = StyleSheet.create({
  contains: {
    backgroundColor: '#000',
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
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default Formulario;
