import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native'

function Ingresohoras(props) {
    return (
        <SafeAreaView>
            <View>
                <Text style={style.title}>Saludos {props.name}</Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    title: {
        color: '#000',

    },
});

Ingresohoras.propTypes = {
    name: PropTypes.string
};

export default Ingresohoras

