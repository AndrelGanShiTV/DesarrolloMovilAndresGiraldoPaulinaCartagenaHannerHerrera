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

const Registrar = ({ modalRegistrar, setModalRegistrar }) => {
    const [nombreusuario, setNombreUsuario] = useState("")
    const [contraseñaregi, setContraseñaregi] = useState("")
    const usuario = {
        id: Date.now(),
        nombreusuario: nombreusuario,
        contraseñaregi: contraseñaregi
    }
    const minero = []

    function registrar() {
        minero.push(usuario)
        for (let index = 0; index < minero.length; index++) {
            console.log(minero[index].nombreusuario)
            console.log(minero[index].contraseñaregi)
        }
    }
    return (
        <Modal
            animationType='slide'
            visible={modalRegistrar}
        >
            <SafeAreaView style={style.title}>
                <ScrollView>
                    <View>
                        <Text style={style.title}>Registrar</Text>
                    </View>
                    <View>
                        <Text style={style.title}>Nombre de Usuario</Text>
                        <TextInput
                            style={style.input}
                            placeholder='Ingrese usuario'
                            placeholderTextColor={'#ccc'}
                            value={nombreusuario}
                            onChangeText={setNombreUsuario}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Text style={style.title}>Contraseña</Text>
                        <TextInput
                            style={style.input}
                            placeholder="contraseña"
                            placeholderTextColor={'#ccc'}
                            value={contraseñaregi}
                            maxLength={8}
                            onChangeText={setContraseñaregi}
                        >
                        </TextInput>
                    </View>

                    <View>
                        <Pressable
                            style={style.btnNuevaCita}
                            onPress={() => registrar()}
                        >
                            <Text style={style.btnTextoNuevaCita}>Registar</Text>
                        </Pressable>
                        <Pressable
                            style={style.btnNuevaCita}
                            onPress={() => setModalRegistrar(!modalRegistrar)}
                        >
                            <Text style={style.btnTextoNuevaCita}>Cancelar</Text>
                        </Pressable>
                    </View>
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

export default Registrar
