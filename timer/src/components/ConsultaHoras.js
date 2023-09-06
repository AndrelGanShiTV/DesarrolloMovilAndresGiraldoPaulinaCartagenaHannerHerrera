import React from 'react'
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
    return (
        <Modal
            animationType='slide'
            visible={modalConsultaHoras}
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
