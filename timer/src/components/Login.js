import React, { useState } from 'react'
import Registrar from './Registrar';
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

const Login = ({ modalLogin, setModalLogin }) => {
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [modalRegistrar, setModalRegistrar] = useState(false)

    const cerrarModal = () => {
        setModalRegistrar(false)
    }

    return (
        <Modal
            animationType='slide'
            visible={modalLogin}
        >
            <SafeAreaView style={style.title}>
                <ScrollView>
                    <View>
                        <Text style={style.title}>Login</Text>
                    </View>
                    <View>
                        <Text style={style.title}>Nombre de Usuario</Text>
                        <TextInput
                            style={style.input}
                            placeholder='Ingrese usuario'
                            placeholderTextColor={'#ccc'}

                            value={usuario}
                            onChangeText={setUsuario}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Text style={style.title}>Contraseña</Text>
                        <TextInput
                            placeholder="contraseña"
                            placeholderTextColor={'#ccc'}
                            value={contraseña}
                            onChangeText={setContraseña}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Pressable
                            style={style.btnNuevaCita}
                            onPress={() => setModalLogin(!modalLogin)}
                        >
                            <Text style={style.btnTextoNuevaCita}>Ingresar</Text>
                        </Pressable>

                        <Pressable
                            style={style.btnNuevaCita}
                            onPress={() => setModalRegistrar(!modalRegistrar)}
                        >
                            <Text style={style.btnTextoNuevaCita}>registrar</Text>
                        </Pressable>
                        <Registrar
                            modalRegistrar={modalRegistrar}
                            setModalRegistrar={setModalRegistrar}
                        />
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

export default Login;
