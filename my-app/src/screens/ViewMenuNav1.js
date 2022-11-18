import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import CustomButton from '../components/CustomButton';

const img = require('../../assets/coffeBook.jpg')

// import { Container } from './styles';

const ViewNav1 = (props) => {
    // usando o ({navigation} no ugar de props tambe funciona)
    return (

        <View style={styles.container}>

            {/* <Image
                // style={{ width: 200, height: 200 }}
                style={styles.user}
                resizeMode='contain'
                source={require('../../assets/coffeBook.jpg')}
            /> */}

            <Text style={styles.text}>Navegue pelo seu App</Text>

            <SafeAreaView>

                <View View style={styles.menu}>

                    <View style={styles.menu}>
                        <CustomButton
                            onPress={() => props.navigation.navigate("ViewState")}
                            label='ViewState'>
                        </CustomButton>

                    </View>

                    <View style={styles.menu}>
                        <CustomButton
                            onPress={() => props.navigation.navigate("ViewEfect")}
                            label='ViewEfect'>
                        </CustomButton>
                    </View>

                    <View style={styles.menu}>
                        <CustomButton
                            onPress={() => props.navigation.navigate("Picker")}
                            label='Picker'>
                        </CustomButton>
                    </View>

                    <View style={styles.menu}>
                        <CustomButton
                            onPress={() => props.navigation.navigate("ViewImage")}
                            label='ViewImage'>
                        </CustomButton>
                    </View>

                    <View style={styles.menu}>
                        <CustomButton
                            onPress={() => props.navigation.navigate("ViewTask")}
                            label='ViewTask'>
                        </CustomButton>
                    </View>

                </View>
            </SafeAreaView>

        </View>
    );
}

export default ViewNav1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ff5100',
        backgroundColor: '#9d5fee',

    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    // menu: {
    //     display: 'flex',
    //     justifyContent: 'space-around',
    //     flexDirection: 'row',

    // },

    user:
    {
        display: 'flex',
        width: 400,
        height: 200,
        marginRight: 'auto',
        marginLeft: '-5%',
        alignItems: 'center'
    }

});
