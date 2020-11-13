import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './styles';

export default function DetailsVeiculos(){

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

                <View style={styles.vehicle}>
                    <View style={styles.title}>
                        <Text style={styles.titleComprovante}>Veículos</Text>
                    </View>

                    <Text style={[styles.vehicleProperty, {marginTop:0}]}>Modelo:</Text>
                    <Text style={styles.vehicleValue}>Uno</Text>
                    
                    <Text style={styles.vehicleProperty}>Marca:</Text>
                    <Text style={styles.vehicleValue}>Fiat</Text>

                    <Text style={styles.vehicleProperty}>Chassi:</Text>
                    <Text style={styles.vehicleValue}>12352346</Text>

                    <Text style={styles.vehicleProperty}>Placa:</Text>
                    <Text style={styles.vehicleValue}>AWE - 3422</Text>

                    <Text style={styles.vehicleProperty}>Quilometragem:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="13543"
                    />

                    <Text style={styles.vehicleProperty}>Cor:</Text>
                    <Text style={styles.vehicleValue}>Preto</Text>

                    <Text style={styles.vehicleProperty}>Avarias:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nenhuma"
                    />

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