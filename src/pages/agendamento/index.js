import React, { useState, Component } from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import firebase from 'firebase';
import { Avatar, Searchbar } from 'react-native-paper';
import { Container, Scroller, HeaderArea, HeaderTitle } from './styles';
import {useNavigation } from '@react-navigation/native';

export default function Home(){
 
    const navigation = useNavigation();

    const navigateToAgendamentopecas = () => {
        navigation.navigate('Agendamentopecas', {
            id: '001',
            marca: 'Fiat',
            modelo: 'Uno 1.6',
            placa: 'AZG-3456' //data.placa automatizar os dados
        });
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
            </View>
            <Text style={styles.description}>Selecione um veículo</Text>
            <Searchbar></Searchbar>
            <FlatList
                style={styles.vehicleList}
                data={[1,2,3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator ={false}
                renderItem={() => (
                    <View style={styles.vehicle}>

                        <Text style={styles.vehicleProperty}>Marca: <Text style={styles.vehicleValue}>Fiat</Text></Text>
                        <Text style={styles.vehicleProperty}>Modelo: <Text style={styles.vehicleValue}>Uno 1.6</Text></Text>
                        <Text style={styles.vehicleProperty}>Placa: <Text style={styles.vehicleValue}>AZG-3456</Text></Text>
                        
                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={navigateToAgendamentopecas}
                        >
                            <Text style={styles.detailsButtonText}>Agendar troca de peças</Text>
                            <Feather name="arrow-right" size={16} color='#4f8cff' />
                        </TouchableOpacity>
                    </View>
                )}
            />


        </View>
    )
    
}