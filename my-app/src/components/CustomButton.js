import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const widthDefauld = width * 1;

const CustomButton = ({ label, onPress, backgroundColor }) => {

    return (
        <TouchableOpacity
            onLongPress={onPress}
            onPress={onPress}
        >
            <Text style={[styles.textButton, styles.shadows]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     marginTop: 100
    // },
    // text: {
        //     color: 'black',
        //     fontSize: 24,
    //     fontWeight: '900',
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     marginBottom: 10,
    // },
    textButton: {
        fontSize: 24,
        // backgroundColor: "#7C28AD",
        backgroundColor: "#309c54",
        color: "#fff",
        borderRadius: 100,
        textAlign: "center",
        height: 50,
        width: widthDefauld,
        paddingTop: 7,
        marginTop: 30,

    },
    shadows: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 7
    }

});

