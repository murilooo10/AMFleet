import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';


export default function Login(){

    const navigation = useNavigation();

    function navigateToHome(){
        
        navigation.navigate('Home');
    }
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
            />

            <TouchableRipple 
                style={styles.button}
                rippleColor="#E9EEF3"
                onPress={navigateToHome}
            >
                <View>
                <Text style={styles.buttonText}>Entrar</Text>
                </View>
            </TouchableRipple>

        </View>
    )
};
