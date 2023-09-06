import React, { useState } from 'react'
import Incapacidades from './Incapacidades';
import Vacaciones from './Vacaciones';
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

const Novedades = ({ modalNovedades, setmodalNovedades }) => {
    const [modalIncapacidades, setModalIncapacidades] = useState("")
    const [modalVacaciones, setModalVacaciones] = useState("")

    const cerrarModal = () => {
        setModalIncapacidades(false)
        setModalVacaciones(false)
    }

    return (
        <Modal
            animationType='slide'
            visible={modalNovedades}
        >
            <SafeAreaView style={style.title}>
                <ScrollView>

                    <View>
                        <Text style={style.title}>Novedades</Text>

                    </View>
                    <Pressable
                        style={style.btnNuevaCita}
                        onPress={() => setmodalNovedades(!modalNovedades)}
                    >
                        <Text style={style.btnTextoNuevaCita}>salir</Text>
                    </Pressable>

                    <Pressable
                        style={style.btnNuevaCita}
                        onPress={() => setModalIncapacidades(!modalIncapacidades)}
                    >
                        <Text style={style.btnTextoNuevaCita}>Incapacidad</Text>
                    </Pressable>
                    <Incapacidades
                        modalIncapacidades={modalIncapacidades}
                        setModalIncapacidades={setModalIncapacidades}
                    />

                    <Pressable
                        style={style.btnNuevaCita}
                        onPress={() => setModalVacaciones(!modalVacaciones)}
                    >
                        <Text style={style.btnTextoNuevaCita}>vacaciones</Text>
                    </Pressable>
                    <Vacaciones
                        modalVacaciones={modalVacaciones}
                        setModalVacaciones={setModalVacaciones}
                    />


                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const style = StyleSheet.create({
    contains: {
        backgroundColor: '#F3F4f6',
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
        marginVertical: 20,
        marginHorizontal: 20,

    },
    btnTextoNuevaCita: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
});

export default Novedades;
