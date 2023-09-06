import React, { useState } from 'react'
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
                            onPress={() => { cerrarModal }}
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

export default ConsultaHoras
