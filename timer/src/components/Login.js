import React, { useState } from 'react'
import Registrar from './Register';
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
import Register from './Register';

const Login = ({ modalLogin, setModalLogin }) => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [modalRegister, setModalRegister] = useState(false)


    const cerrarModal = () => {
        setModalRegister(false)
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
                        <Text style={style.title}>Username</Text>
                        <TextInput
                            style={style.input}
                            placeholder='Enter User'
                            placeholderTextColor={'#ccc'}
                            value={user}
                            onChangeText={setUser}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Text style={style.title}>Password</Text>
                        <TextInput
                            placeholder="Enter Password"
                            placeholderTextColor={'#ccc'}
                            value={password}
                            onChangeText={setPassword}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Pressable
                            style={style.btn}
                            onPress={() => setModalLogin(!modalLogin)}
                        >
                            <Text style={style.btnText}>Sign in</Text>
                        </Pressable>

                        <Pressable
                            style={style.btn}
                            onPress={() => setModalRegistrer(!modalRegister)}
                        >
                            <Text style={style.btnText}>Register</Text>
                        </Pressable>
                        <Register
                            modalRegister={modalRegister}
                            setModalRegister={setModalRegister}
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
    input: {
        backgroundColor: '#FFF',
        color: '#000',
        padding: 15,
        borderRadius: 10,
    },
    btn: {
        backgroundColor: '#6D28D9',
        padding: 15,
        borderRadius: 5,
        marginVertical: 20,
        marginHorizontal: 20,

    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
});

export default Login;
