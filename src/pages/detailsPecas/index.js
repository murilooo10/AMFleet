import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import api from '../../services/api';
import styles from './styles';

export default function DetailsPecas(){

    const navigation = useNavigation();
    const route = useRoute();


    const pecas = route.params.pecas;
    function navigateBack(){
        navigation.goBack();
    }

    async function deletePecas(){

        await api.delete(`pecas/${pecas.id}`);

        navigateBack();

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

            <View style={styles.pecas}>
                <View style={styles.title}>
                    <Text style={styles.titleComprovante}>Peças</Text>
                </View>

                <Text style={[styles.pecasProperty, {marginTop: 0}]}>Peça:</Text>
                <Text style={styles.pecasValue}>{pecas.nome}</Text>

                <Text style={styles.pecasProperty}>Quantidade:</Text>
                <TextInput
                            style={styles.input}
                            value={pecas.quantidade}
                        />

                <View style={styles.actions}>
                    <TouchableOpacity style={[styles.action, {backgroundColor:'#4f8cff'}]}>
                        <Text style={styles.actionText}>Salvar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={deletePecas}>
                        <Text style={styles.actionText}>Deletar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}