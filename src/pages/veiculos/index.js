import React from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

import { Searchbar } from 'react-native-paper';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de<Text style={styles.headerTextBold}> 12 veículos</Text>
                </Text>
            </View>
            <Text style={styles.description}>Procure um veículo</Text>
            <Searchbar></Searchbar>
            
            <FlatList
                style={styles.vehicleList}
                data={[1,2,3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator ={false}
                renderItem={() => (
                    <View style={styles.vehicle}>
                        <Text style={styles.vehicleProperty}>Marca:</Text>
                        <Text style={styles.vehicleValue}>Fiat</Text>

                        <Text style={styles.vehicleProperty}>Modelo:</Text>
                        <Text style={styles.vehicleValue}>Uno 1.6</Text>

                        <Text style={styles.vehicleProperty}>Placa:</Text>
                        <Text style={styles.vehicleValue}>AZG-3456</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={()=>{}}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color='#4f8cff' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}
