import React, {Component} from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Alert, Image, Modal, Text, Picker, pickerStyle, TouchableOpacity, TouchableHighlight} from 'react-native';
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
            data_inicio: '',
            pecas:'',
            status:'',
            veiculo:'',
            modalVisible: false,
            errorMessage: null,
            array:[],
        }; 
        this.singOutAccount = this.singOutAccount.bind(this);
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

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(function(user){
            
            if(user){
                this.setState({
                    isAuthenticated: true,
                })
                this.getInformation();
            }
            else{
                this.setState({
                    isAuthenticated: false,
                })
                this.navigateToLogin();

            }
        }.bind(this)
        );
    }

    guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+S4()+S4()+S4()+S4());
    }

    cadastrarAgendamento = () =>{
        var uid = this.guidGenerator();
        const {data_inicio, pecas, status, veiculo, email, password} = this.state;
        if(data_inicio != null && pecas != null && status != null && veiculo != null){
            firebase.database().ref(`agendamento/${uid}`).set({
                data_inicio: this.state.data_inicio,
                pecas: this.state.pecas,
                status: this.state.status,
                veiculo: this.state.veiculo
            })

        }else{
            this.setState({errorMessage: "Preencha todos os campos presentes!"});
        }
    }
    
    singOutAccount = () =>{
        firebase.auth().signOut().then(() =>{
            this.setState({
                isAuthenticated:false,
            })
            console.log('saiu')
            this.props.navigation.navigate('Login');
        }).catch(error =>
            console.log(error.code))
    }


    navigateToDetailsAgendamento = () =>{
        this.props.navigation.navigate('DetailsAgendamento');
    }


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
                               
                
                <Text style={styles.agdendamentoProperty}>Agendemento de manutenção </Text>
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
                <Text style={styles.pecaProperty}>O que é recomendado trocar</Text> 
                <Text style={styles.vehicleValue}>Pastilhas de freio</Text>
             
                <Text style={styles.vehicleProperty}>Selecione o que deseja trocar: </Text>
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
                <Text style={styles.vehicleProperty}>Escolha a data para a manutenção: </Text>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: '14/09/2020', value: '14/09/2020' },
                        { label: '15/09/2020', value: '15/09/2020' },
                        { label: '16/09/2020', value: '16/09/2020' },
                    ]}
                />  
               
                
                <Text style={styles.vehicleProperty}></Text>
                <Text style={styles.vehicleProperty}></Text>

                <View style={{width: 340, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity 
                    style={styles.detailsButtonAdd} 
                    rippleColor="#E9EEF3"
                    onPress={this.cadastrarAgendamento}
                >
                    <AntDesign name="calendar" size={36} color="#00cc00" />
                    <Text style={{color:'#00cc00', fontWeight:'bold'}}>Agendar</Text>
                </TouchableOpacity>

                </View>
            </View>
        )}

}
