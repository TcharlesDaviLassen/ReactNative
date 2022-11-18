import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';

// const list =
//     (
//         {
//             nome: 'Javascrips'
//         },
//         {
//             nome: 'Java'
//         },
//         {
//             nome: 'Python'
//         },
//         {
//             nome: 'Clipper'
//         },
//         {
//             nome: 'Cobol'
//         }
//     )




const ViewTask = () => {


    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');

    const updateTaskList = () => {

        if (task) {

            const payload = {
                id: String(new Date().getTime()),
                nome: task
            }
            setTaskList([...taskList, payload])


        } else {

            Alert.alert("Ops", "Tarefa não pode ser adicionada em branco");
        }

    }

    const deleteTask = (id) => {
        setTaskList([...taskList.filter((item) => item.id !== id)])
    }

    // useEffect(() => {
    //     console.log("O que esta sendo digitado", task)
    // }, [task]);

    return (
        <View style={styles.container}>

            <TextInput
                keyboardType='email-address'
                placeholder='Digite a tarefa'
                placeholderTextColor='black'
                value={task}
                onChangeText={(value) => setTask(value)}
                style={styles.input}
            />
            <CustomButton
                backgroundColor='#fff'
                label="Salvar"
                onPress={updateTaskList}
            >
            </CustomButton>
            {
                taskList.map((dados) => {
                    console.log("ITEM", dados)
                    return (
                        <TouchableOpacity
                        style={{ margin: 3}}
                            key={dados.id}
                            onLongPress={() => deleteTask(dados.id)}
                        >
                            <Text style={{ color: '#ff5100', fontSize: 24 }}>{dados.nome}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}

export default ViewTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
    },
    input: {
        height: 48,
        width: 90
    }
})