import React, {useState, useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { Searchbar } from 'react-native-paper';
import {useNavigation, useRoute } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [userInfor, setUserInfo] = useState({
        id: route.params.id,
        marca: route.params.marca,
        modelo: route.params.modelo,
        placa: route.params.placa, 
    });

    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg} />
        </View>
        <Text style={styles.vehicleProperty}>Veículo: {userInfor.modelo}</Text>
        <FlatList
            style={styles.vehicleList}
            data={[1]}
            keyExtractor={incident => String(incident)}
            showsVerticalScrollIndicator ={false}
            renderItem={() => (
                <View style={styles.vehicle}>

                    <Text style={styles.vehicleProperty}>O que é recomendado trocar: </Text>
                    <Text style={styles.vehicleValue}>Pastilhas de freio</Text>

                    <Text style={styles.vehicleProperty}>Quais peças deseja trocar? </Text>
                    <Text style={styles.vehicleValue}>Peças no estoque Lista </Text>

                    <Text style={styles.vehicleProperty}>Qual o horário para a manutenção? </Text>
                    <Text style={styles.vehicleValue}> Horarios disponiveis </Text>

                    <TouchableOpacity 
                        style={styles.detailsButton} 
                      
                    >
                        <Text style={styles.detailsButtonText}>Agendar</Text>
                        <Feather size={16} color='#4f8cff' />
                    </TouchableOpacity>

                </View>
            )}
        />

    </View>
    );
}