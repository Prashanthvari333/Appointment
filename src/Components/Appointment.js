import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Registration from '../Pages/Registration'

const Appointment = () => {
    return ( < Registration /> );
}

export default Appointment

const styles = StyleSheet.create({
    input: {
        borderColor: 'red',
        width: '60 rm',
        height: '30 rm',

    },

})