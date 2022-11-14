import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const CustomButton = ({label, onPress}) => {
    
    return (
        <TouchableOpacity
            onLongPress={onPress}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}


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
        fontSize: 25,
        backgroundColor: "#7C28AD",
        color: "#fff",
        borderRadius: 100,
        textAlign: "center",
        marginRight: 10,
        marginLeft: 10,
        height: 50,
        paddingTop: 7,
        marginTop: 30
    },

});


export default CustomButton;