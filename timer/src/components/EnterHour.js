import React, { useState } from 'react';
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

const EnterHour = ({ modalEnterHour, setModalEnterHour }) => {
    const [date, setDate] = useState(new Date())
    const [timeIn, setTimeIn] = useState(new Date())
    const [timeOut, setTimeOut] = useState(new Date())
    const [totalHour, setTotalHour] = useState(null);
    const FormHour = {
        id: new Date(),
        date,
        timeIn,
        timeOut,
        totalHour
    }
    const ListHour = []
    // function calcularTotal() {
    //     totalHoras = (horaSalida.getTotal() - horaEntrada.getTotal()) / (1000 * 60 * 60)
    // }
    function InsertHour() {
        ListHour.push(FormHour)
        for (let index = 0; index < ListHour.length; index++) {
            console.log(ListHour[index].totalHoras)
        }
    }
    return (
        <Modal
            animationType='slide'
            visible={modalEnterHour}
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
                            date={date}
                            onDateChange={() => setDate(date)}
                            style={style.date}
                        />
                    </View>
                    <View>
                        <Text style={style.label}>Seleccione la Hora Entrada:</Text>
                        <DatePicker
                            locale='es'
                            mode='time'
                            date={timeIn}
                            onDateChange={() => setTimeIn(timeIn)}
                            style={style.date}
                        />
                    </View>
                    <View>
                        <Text style={style.label}>Seleccione la Hora Final:</Text>
                        <DatePicker
                            locale='es'
                            mode='time'
                            date={timeOut}
                            onDateChange={() => setTimeOut(timeOut)}
                            style={style.date}
                        />
                    </View>
                    <View>
                        <Pressable style={style.btn}
                            onPress={() => InsertHour()}
                        >
                            <Text style={style.btnText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable
                            style={style.btn}
                            onPress={() => setModalEnterHour(!modalEnterHour)}
                        >
                            <Text style={style.btnText}>
                                Cancel
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </Modal>
    );
};

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

export default EnterHour;