import React, { useState } from 'react'
import {
    //elementos y componentes
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Pressable,
    Modal,
    ScrollView,
} from 'react-native';

function QueryHour({ modalQueryHour, setModalQueryHour }) {
    const [dateStart, setDateStart] = useState(new Date())
    const [dateFinal, setDateFinal] = useState(new Date())

    return (
        <Modal
            animationType='slide'
            visible={modalQueryHour}
        >
            <SafeAreaView style={style.contains}>
                <ScrollView>
                    <View>
                        <Text style={style.title}>Search Hour</Text>
                    </View>
                    <View>
                        <Text style={style.label}>Select Start Date:</Text>
                        <DatePicker
                            locale='es'
                            mode='date'
                            date={dateStart}
                            onDateChange={() => setDateStart(dateStart)}
                            style={style.date}
                        />
                    </View>
                    <View>
                        <Text style={style.label}>Select Final Date:</Text>
                        <DatePicker
                            locale='es'
                            mode='date'
                            date={dateFinal}
                            onDateChange={() => setDateFinal(dateFinal)}
                            style={style.date}
                        />
                    </View>
                    <View>
                        <Pressable style={style.btn}
                            onPress={() => setModalQueryHour(!modalQueryHour)}
                        >
                            <Text style={style.btnText}>
                                Search
                            </Text>
                        </Pressable>
                        <Pressable
                            style={style.btn}
                            onPress={() => setModalQueryHour(!modalQueryHour)}
                        >
                            <Text style={style.btnText}>
                                Cancel
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView >
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

export default QueryHour
