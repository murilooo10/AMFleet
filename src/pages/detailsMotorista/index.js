import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function DetailsMotorista(){

    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={navigateBack} >
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
                <Image source={logoImg} />
            </View>

                <View style={styles.driver}>
                    <View style={styles.title}>
                        <Text style={styles.titleComprovante}>Motorista</Text>
                    </View>

                            <Text style={[styles.driverProperty, {marginTop: 0}]}>Nome Completo:</Text>
                            <Text style={styles.driverValue}>Murilo Araujo</Text>

                            <Text style={styles.driverProperty}>Idade:</Text>
                            <Text style={styles.driverValue}>23</Text>

                            <Text style={styles.driverProperty}>RG:</Text>
                            <Text style={styles.driverValue}>13123122</Text>

                            <Text style={styles.driverProperty}>CPF:</Text>
                            <Text style={styles.driverValue}>01238492812</Text>

                            <Text style={styles.driverProperty}>Sexo:</Text>
                            <Text style={styles.driverValue}>Masculino</Text>

                            <Text style={styles.driverProperty}>Nº da carteira de trabalho:</Text>
                            <Text style={styles.driverValue}>123523464</Text>

                            <Text style={styles.driverProperty}>CNH:</Text>
                            <Text style={styles.driverValue}>2314123412</Text>

                            <Text style={styles.driverProperty}>Data de Admissão:</Text>
                            <Text style={styles.driverValue}>15/09/2010</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={[styles.action, {backgroundColor:'#4f8cff'}]}>
                            <Text style={styles.actionText}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action}>
                            <Text style={styles.actionText}>Deletar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}