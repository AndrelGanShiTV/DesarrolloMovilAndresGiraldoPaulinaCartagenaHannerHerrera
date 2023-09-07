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
import DatePicker from 'react-native-date-picker'


const License = ({ modalLicense, setModalLicense }) => {
    const [date, setDate] = useState(new Date())



    return (
        <Modal
            animationType='slide'
            visible={modalLicense}
        >
            <SafeAreaView>
                <Text style={style.title}>
                    License
                </Text>
                <ScrollView>
                    <View>
                        <Text style={style.label}>Select license start date:</Text>
                        <DatePicker
                            locale='es'
                            mode='date'
                            date={date}
                            onDateChange={() => setFecha(date)}
                            style={style.date}
                        />
                    </View>
                    <View>
                        <Text style={style.label}>Select license end date:</Text>
                        <DatePicker
                            locale='es'
                            mode='date'
                            date={date}
                            onDateChange={() => setFecha(date)}
                            style={style.date}
                        />
                        <View>
                            <Pressable style={style.btnNuevaCita}
                                onPress={() => { cerrarModal }}
                            >
                                <Text style={style.btnTextoNuevaCita}>
                                    keep
                                </Text>
                            </Pressable>
                            <Pressable
                                style={style.btnNuevaCita}
                                onPress={() => setModalLicense(!setModalLicense)}
                            >
                                <Text style={style.btnTextoNuevaCita}>
                                    Cancel
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
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

export default License
