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

const Formulario = ({ modalIngresoHoras, setModalIngresoHoras }) => {
    const [fecha, setFecha] = useState(new Date())
    const [hora, setHora] = useState(new Date())

    return (
        <Modal
            animationType='slide'
            visible={modalIngresoHoras}
        >
            <SafeAreaView style={style.contains}>
                <ScrollView>
                    <View>
                        <Text style={style.title}>Registrar Horas</Text>
                    </View>
                    <View>
                        <Text style={style.label}>Seleccione el Dia:</Text>
                        <DatePicker
                            locale='es'
                            mode='date'
                            date={fecha}
                            onDateChange={() => setFecha(fecha)}
                            style={style.date}
                        />
                    </View>
                    <View>
                        <Text style={style.label}>Seleccione la Hora:</Text>
                        <DatePicker
                            locale='es'
                            mode='time'
                            date={hora}
                            onDateChange={() => setHora(fecha)}
                            style={style.date}
                        />
                    </View>
                    <View>
                        <Pressable style={style.btnNuevaCita}
                            onPress={() => { cerrarModal }}
                        >
                            <Text style={style.btnTextoNuevaCita}>
                                Guardar
                            </Text>
                        </Pressable>
                        <Pressable
                            style={style.btnNuevaCita}
                            onPress={() => setModalIngresoHoras(!modalIngresoHoras)}
                        >
                            <Text style={style.btnTextoNuevaCita}>
                                Cancelar
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </Modal>
    );
};

const style = StyleSheet.create({
    contains: {
        backgroundColor: '#FFF',
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
    date: {
        backgroundColor: '#6F3DF2',
        color: '#fff',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    btnNuevaCita: {
        flex: 1,
        backgroundColor: '#6D28D9',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
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