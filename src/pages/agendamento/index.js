import React, {Component} from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Alert, Image, Modal, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { Searchbar } from 'react-native-paper';
import {useNavigation, useRoute } from '@react-navigation/native';
import { render } from 'react-dom';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select'; //rodar no terminal: npm install react-native-picker-select
import {TouchableRipple} from 'react-native-paper';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import firebase from 'firebase';
import _ from 'lodash';



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
            modalVisible: false,
            errorMessage: null,
            array:[],
        }; 
    }

    //      firebase.database().ref('usuario/' + uid).orderByChild('uid/', (data) => {
    //  for(i = 0; i<=length; i++){
    //    this.setState({
    //        nome[]: this.state.uid[i]})
    //}

    //const navigation = useNavigation();
    //navigatoToSomething =() =>{
    //    this.props.navigation.navigate('Something');
    //}

    
    render(){
        return(
            <View style={styles.container} >
                <View style={styles.header}>
                    <Image source={logoImg} />
                    <TouchableRipple 
                        rippleColor="#E9EEF3"
                        onPress={this.singOutAccount}
                    >
                    <FontAwesome name="power-off" size={24} color="red" />
                    </TouchableRipple>
                </View>
                
               <Modal
                animationType='slide'
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}>
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
                            <Text style={styles.description}>Cadastre um Motorista</Text>
                        </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o nome"
                                value={this.state.nome}
                                onChangeText={nome=> this.setState({nome})}
                            />
         
                            <View style={styles.errorMessage}>
                                {this.state.errorMessage && <Text style={styles.wrongText}>{this.state.errorMessage}</Text>}
                            </View>
                            <TouchableRipple 
                                style={styles.button}
                                rippleColor="#E9EEF3"
                                onPress={this.cadastrarMotorista}
                            >
                                <View>
                                <Text style={styles.textStyle}>Cadastrar</Text>
                                </View>
                            </TouchableRipple>
                    </View>
                </Modal>
                

                <Text style={styles.vehicleProperty}>                   Agendemento de manutenção </Text>
                <Text style={styles.vehicleProperty}></Text>
                <Text style={styles.vehicleProperty}></Text>  
                <Text style={styles.vehicleProperty}>Selecione a marca do veículo: </Text>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Fiat', value: 'fiat' },
                        { label: 'Chevrolet', value: 'chevrolet' },
                        { label: 'Renault', value: 'renault' },
                    ]}
                />

                <Text style={styles.vehicleProperty}></Text>
                <Text style={styles.vehicleProperty}></Text>  
                <Text style={styles.vehicleProperty}>Selecione o modelo do veículo: </Text>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Uno', value: 'uno' },
                        { label: 'Celta', value: 'Celta' },
                        { label: 'Sandero', value: 'Sandero' },
                    ]}
                />

                <Text style={styles.vehicleProperty}></Text>
                <Text style={styles.vehicleProperty}></Text>  
                <Text style={styles.vehicleProperty}>Selecione a placa do veículo: </Text>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'AZG-3456', value: 'AZG-3456' },
                        { label: 'AUG-7337', value: 'AUG-7337' },
                        { label: 'ABX-1166', value: 'ABX-1166' },
                    ]}
                />

                <Text style={styles.vehicleProperty}></Text>
                <Text style={styles.vehicleProperty}></Text>
                <Text style={styles.vehicleProperty}>                    O que é recomendado trocar</Text> 
                <Text style={styles.vehicleValue}>                        Pastilhas de freio</Text>
             

    
                <Text style={styles.vehicleProperty}>Selecione as peças que deseja trocar: </Text>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Pastilhas', value: 'pastilhas' },
                        { label: 'Óleo do motor', value: 'oleo do motor' },
                        { label: 'Filtro de ar', value: 'filtro de ar' },
                    ]}
                />  
               
                
                <Text style={styles.vehicleProperty}></Text>
                <Text style={styles.vehicleProperty}></Text>

                <View style={{width: 340, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity 
                    style={styles.detailsButtonAdd} 
                    rippleColor="#E9EEF3"
                    onPress={() => {
                    this.setState({modalVisible: true});
                    }}
                >
                    <AntDesign name="calendar" size={24} color="#00cc00" />
                    <Text style={{color:'#00cc00', fontWeight:'bold'}}>Agendar</Text>
                </TouchableOpacity>
                </View>
            </View>
        )}

}
