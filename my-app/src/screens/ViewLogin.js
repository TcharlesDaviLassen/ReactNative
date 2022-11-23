import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import base64 from 'base-64';

// import { Container } from './styles';

async function login() {

    let res = await fetch("http://177.44.248.30:3333/auth", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json', // => Tipos de dados que estão sendo enviados
            'Authorization': "Basic" +
                base64.encode("mateus@mateus.com" + ":" + "12345")
        },
        // body: json.strngify({
        //     user: ""
        // })
    });

   const json = await res.json();
    console.log("RES =>", json)

}


const ViewLogin = () => {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')


    return (
        <>
            <View style={styles.container}>

                <Image
                    style={{ width: 200, height: 200, backgroundColor: "black", borderRadius: 100, marginTop: -50, marginBottom: 20 }}
                    // style={styles.user}
                    resizeMode='contain'
                    source={require('../assets/ImageProps.png')}
                />


                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#fff"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                />

                <CustomButton
                    label="ENTRAR"
                    onPress={() => login()} />

            </View>
        </>
    );
}

export default ViewLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: "#09f156",
        width: '70%',
        height: 50,
        backgroundColor: "#424242",
        paddingLeft: 12,
    }

})