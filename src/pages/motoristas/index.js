import React from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { Searchbar, TextInput, Button } from 'react-native-paper';
import {FontAwesome} from '@expo/vector-icons';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <Text style={styles.headerText}>
                    {'\n\n\n\n\nTotal de'}<Text style={styles.headerTextBold}> 3 motoristas</Text>
                </Text>
            </View>

            <Text style={styles.description}>Procure um motorista</Text>
            <Searchbar></Searchbar>
            <Text>{'\n'}</Text>
            <Text><FontAwesome name="user-plus" size={29} color="green" />  (Adicionar motorista) </Text>
           
            <FlatList
                style={styles.vehicleList}
                data={[1,2,3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator ={false}
                renderItem={() => (
                    <View style={styles.vehicle}>
                        <Text style={styles.vehicleProperty}>Nome Completo:</Text>
                        <Text style={styles.vehicleValue}>Augusto</Text>

                        <Text style={styles.vehicleProperty}>Idade:</Text>
                        <Text style={styles.vehicleValue}>24</Text>

                        <Text style={styles.vehicleProperty}>RG:</Text>
                        <Text style={styles.vehicleValue}>1234567891</Text>

                        <Text style={styles.vehicleProperty}>CPF:</Text>
                        <Text style={styles.vehicleValue}>1234567891</Text>

                        <Text style={styles.vehicleProperty}>Sexo:</Text>
                        <Text style={styles.vehicleValue}>M</Text>

                        <Text style={styles.vehicleProperty}>Nº da carteira de trabalho:</Text>
                        <Text style={styles.vehicleValue}>1234567891</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={()=>{}}
                        >
                            <Text style={styles.detailsButtonText}>Editar</Text>
                            <Feather name="arrow-right" size={16} color='#4f8cff' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}
