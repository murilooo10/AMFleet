import React, { useState, useEffect } from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Alert, Image, Modal, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';
import { Searchbar} from 'react-native-paper';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import {TouchableRipple} from 'react-native-paper';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Veiculos(){
    const[veiculos, setVeiculos] = useState([]);

    navigateToLogin = () =>{
        this.props.navigation.navigate('Login');
    }
    navigateToDetailsVeiculos = () =>{
        this.props.navigation.navigate('DetailsVeiculos');
    }

    async function loadVeiculos(){
        const response = await api.get('veiculos');

        setVeiculos(response.data);
    }

    useEffect(() => {
        loadVeiculos();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableRipple 
                    rippleColor="#E9EEF3"
                    onPress={this.singOutAccount}
                >

                    <FontAwesome name="power-off" size={24} color="red" />

                </TouchableRipple>
            </View>
            <Text style={styles.description}>Procure um motorista</Text>
            <Searchbar placeholder="Escreva aqui..." style={styles.search} editable={true} value={this.state.search} ></Searchbar>
            
            <Modal
            animationType='slide'
            transparent={true}
            visible={this.state.modalVisible}
            onPress={this.zerarState}>
                <View style={styles.modalView}>
                    <TouchableRipple
                        style={styles.alinharClose}
                        rippleColor="#E9EEF3"
                        onPress={() => {
                            this.setState({modalVisible:false})
                        }}
                        >
                        <AntDesign name="close" size={20} color="#D3D3D3" />
                    </TouchableRipple>
                    <View style={styles.header}>
                        <Text style={styles.description}>Cadastre um Veículo</Text>
                    </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a marca"
                            value={this.state.marca}
                            onChangeText={marca=> this.setState({marca})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o fabricante"
                            value={this.state.fabricante}
                            onChangeText={fabricante=> this.setState({fabricante})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a placa"
                            value={this.state.placa}
                            onChangeText={placa=> this.setState({placa})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o chassi"
                            value={this.state.chassi}
                            onChangeText={chassi=> this.setState({chassi})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a cor"
                            value={this.state.cor}
                            onChangeText={cor=> this.setState({cor})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite as avarias"
                            value={this.state.avarias}
                            onChangeText={avarias=> this.setState({avarias})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o ano do veículo"
                            value={this.state.ano}
                            onChangeText={ano=> this.setState({ano})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a quilometragem"
                            value={this.state.quilometragem}
                            onChangeText={quilometragem=> this.setState({quilometragem})}
                        />
                        <View style={styles.errorMessage}>
                            {this.state.errorMessage && <Text style={styles.wrongText}>{this.state.errorMessage}</Text>}
                        </View>
                        <TouchableRipple 
                            style={styles.button}
                            rippleColor="#E9EEF3"
                            onPress={this.cadastrarVeiculo}
                        >
                            <View>
                            <Text style={styles.textStyle}>Cadastrar</Text>
                            </View>
                        </TouchableRipple>
                </View>
            </Modal>
            
            <TouchableOpacity 
                style={styles.detailsButtonAdd} 
                rippleColor="#E9EEF3"
                onPress={() => {
                this.setState({modalVisible: true});
                }}
            >  
                <Text style={{color:'#FFF', fontWeight:'bold'}}>Adicionar Veículo</Text>
            </TouchableOpacity>


            <FlatList
                style={styles.veichuleList}
                data={[1, 2, 3]}
                keyExtractor={(list, index) => String(index)}
                showsVerticalScrollIndicator ={false}
                renderItem={({item: list}) => (
                    <View style={styles.vehicle}>
                        <Text style={styles.vehicleProperty}>Modelo:</Text>
                        <Text style={styles.vehicleValue}>Uno</Text>
                        
                        <Text style={styles.vehicleProperty}>Fabricante:</Text>
                        <Text style={styles.vehicleValue}>Fiat</Text>       

                        <Text style={styles.vehicleProperty}>Ano:</Text>
                        <Text style={styles.vehicleValue}>2018</Text>

                        <Text style={styles.vehicleProperty}>Chassi:</Text>
                        <Text style={styles.vehicleValue}>12352346</Text>

                        <Text style={styles.vehicleProperty}>Placa:</Text>
                        <Text style={styles.vehicleValue}>AWE - 3422</Text>

                        <Text style={styles.vehicleProperty}>Quilometragem:</Text>
                        <Text style={styles.vehicleValue}>13543</Text>

                        <Text style={styles.vehicleProperty}>Cor:</Text>
                        <Text style={styles.vehicleValue}>Preto</Text>

                        <Text style={styles.vehicleProperty}>Avarias:</Text>
                        <Text style={styles.vehicleValue}>Nenhuma</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={this.navigateToDetailsVeiculos}
                        >
                            <Text style={styles.detailsButtonText}>Ver detalhes</Text>
                            <AntDesign name="right" size={24} color="#4f8cff" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}
