import React, { useState } from 'react'
import {
    //elementos y componentes
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Pressable,
    Modal,
    ScrollView,
} from 'react-native';

function ConsultaHoras({ modalConsultaHoras, setModalConsultaHoras }) {
    const [fechaInicio, setFechaInicio] = useState(new Date())
    const [fechaFinal, setFechaFinal] = useState(new Date())

    return (
        <Modal
            animationType='slide'
            visible={modalConsultaHoras}
        >
            <SafeAreaView style={style.contains}>
                <ScrollView>
                    <View>
                        <Text style={style.title}>Consultar Horas</Text>
                    </View>
                    <View>
                        <Text style={style.label}>Seleccione Fecha Inicio:</Text>
                        <DatePicker
                            locale='es'
                            mode='date'
                            date={fechaInicio}
                            onDateChange={() => setFechaInicio(fechaInicio)}
                            style={style.date}
                        />
                    </View>
                    <View>
                        <Text style={style.label}>Seleccione Fecha Final:</Text>
                        <DatePicker
                            locale='es'
                            mode='date'
                            date={fechaFinal}
                            onDateChange={() => setFechaFinal(fechaFinal)}
                            style={style.date}
                        />
                    </View>
                    <View>
                        <Pressable style={style.btnNuevaCita}
                            onPress={() => setModalConsultaHoras(!modalConsultaHoras)}
                        >
                            <Text style={style.btnTextoNuevaCita}>
                                Consultar
                            </Text>
                        </Pressable>
                        <Pressable
                            style={style.btnNuevaCita}
                            onPress={() => setModalConsultaHoras(!modalConsultaHoras)}
                        >
                            <Text style={style.btnTextoNuevaCita}>
                                Cancelar
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </Modal>
    )
}

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

export default ConsultaHoras
