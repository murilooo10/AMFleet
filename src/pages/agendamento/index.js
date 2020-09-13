import React, {Component} from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { Searchbar } from 'react-native-paper';
import {useNavigation, useRoute } from '@react-navigation/native';
import { render } from 'react-dom';

export default class Agendamento extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLogged: false,
            matricula: "",
            nome: '',
            sobrenome: '',
            email: '',
            senha: '',
            confirmarSenha: '',
            errorMessage: null,
            array:[],
        }; 
    }

    //      firebase.database().ref('usuario/' + uid).orderByChild('uid/', (data) => {
    //  for(i = 0; i<=length; i++){
    //    this.setState({
    //        nome[]: this.state.uid[i]})
    //}
    //
    //
    //


    //const navigation = useNavigation();
    //navigatoToSomething =() =>{
    //    this.props.navigation.navigate('Something');
    //}
    render(){

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
    )}
}