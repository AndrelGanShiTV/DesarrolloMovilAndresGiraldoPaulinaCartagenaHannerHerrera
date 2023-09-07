import React, { useState } from 'react'
import Inability from './Inability';
import Vacation from './Vacation';
import License from './License';
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

const News = ({ modalNews, setmodalNews }) => {
    const [modalInability, setModalInability] = useState("")
    const [modalVacation, setModalVacation] = useState("")
    const [modalLicense, setModalLicense] = useState("")

    const cerrarModal = () => {
        setModalInability(false)
        setModalVacation(false)
        setModalLicense(false)
    }

    return (
        <Modal
            animationType='slide'
            visible={modalNews}
        >
            <SafeAreaView style={style.title}>
                <ScrollView>

                    <View>
                        <Text style={style.title}>news</Text>

                    </View>
                    <Pressable
                        style={style.btnNuevaCita}
                        onPress={() => setmodalNews(!modalNews)}
                    >
                        <Text style={style.btnTextoNuevaCita}>exit</Text>
                    </Pressable>

                    <Pressable
                        style={style.btnNuevaCita}
                        onPress={() => setModalInability(!modalInability)}
                    >
                        <Text style={style.btnTextoNuevaCita}>Inability</Text>
                    </Pressable>
                    <Inability
                        modalInability={modalInability}
                        setModalInability={setModalInability}
                    />
                    <Pressable
                        style={style.btnNuevaCita}
                        onPress={() => setModalLicense(!modalLicense)}
                    >
                        <Text style={style.btnTextoNuevaCita}>License</Text>
                    </Pressable>
                    <License
                        modalLicense={modalLicense}
                        setModalLicense={setModalLicense}
                    />
                    <Pressable
                        style={style.btnNuevaCita}
                        onPress={() => setModalVacation(!modalVacation)}
                    >
                        <Text style={style.btnTextoNuevaCita}>Vacation</Text>
                    </Pressable>
                    <Vacation
                        modalVacation={modalVacation}
                        setModalVacation={setModalVacation}
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

export default News
