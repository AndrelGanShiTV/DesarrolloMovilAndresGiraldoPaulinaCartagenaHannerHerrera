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

const Register = ({ modalRegister, setModalRegister }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const user = {
        id: Date.now(),
        username: username,
        password: password
    }
    const miner = []

    function registrer() {
        miner.push(usuario)
        for (let index = 0; index < miner.length; index++) {
            console.log(minero[index].username)
            console.log(minero[index].password)
        }
    }
    return (
        <Modal
            animationType='slide'
            visible={modalRegister}
        >
            <SafeAreaView style={style.title}>
                <ScrollView>
                    <View>
                        <Text style={style.title}>Registrer</Text>
                    </View>
                    <View>
                        <Text style={style.title}>Username</Text>
                        <TextInput
                            style={style.input}
                            placeholder='Enter User'
                            placeholderTextColor={'#ccc'}
                            value={username}
                            onChangeText={setUsername}
                        >
                        </TextInput>
                    </View>
                    <View>
                        <Text style={style.title}>Password</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Password"
                            placeholderTextColor={'#ccc'}
                            value={password}
                            maxLength={8}
                            onChangeText={setPassword}
                        >
                        </TextInput>
                    </View>

                    <View>
                        <Pressable
                            style={style.btn}
                            onPress={() => registrer()}
                        >
                            <Text style={style.btnText}>Register</Text>
                        </Pressable>
                        <Pressable
                            style={style.btn}
                            onPress={() => setModalRegister(!modalRegister)}
                        >
                            <Text style={style.btnText}>Cancel</Text>
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

export default Register;
