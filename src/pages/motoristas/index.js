import React, {Component} from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Alert, Image, Modal, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import firebase from 'firebase';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { Searchbar} from 'react-native-paper';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import {TouchableRipple} from 'react-native-paper';

export default class Motorista extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated: false,
            nome: '',
            tipoDeUsuario: '',
            modalVisible: false,
            errorMessage: null,
        };
        this.singOutAccount = this.singOutAccount.bind(this);

}
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(function(user){
            console.log(user);
            if(user){
                this.setState({
                    isAuthenticated: true,
                })

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
    cadastrarMotorista = () =>{
        var uid = this.guidGenerator();
        const {nome, sobrenome, idade, sexo, cpf, rg, cnh} = this.state;
        if(nome != null && sobrenome != null && idade != null && sexo != null && cpf!=null && rg != null && cnh != null){
            firebase.database().ref(`motorista/${uid}`).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                idade: this.state.idade,
                sexo: this.state.sexo,
                cpf: this.state.cpf,
                tipoDeUsuario: 3,
                rg: this.state.rg,
                cnh: this.state.cnh
            }).then(()=>
                alert('cadastrado com sucesso!')
            )
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
    getInformation = () =>{
        var uid = firebase.auth().currentUser.uid;
        firebase.database().ref('motorista/' + uid).once('value', (data) =>{
            console.log(data);

        })
    }
    navigateToDetailsMotorista = () =>{
        this.props.navigation.navigate('DetailsMotorista');
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

            <Text style={styles.description}>Procure um motorista</Text>
            <Searchbar></Searchbar>
            <Text>{'\n'}</Text>
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
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o sobrenome"
                            value={this.state.sobrenome}
                            onChangeText={sobrenome=> this.setState({sobrenome})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a idade"
                            value={this.state.idade}
                            onChangeText={idade=> this.setState({idade})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o sexo"
                            value={this.state.sexo}
                            onChangeText={sexo=> this.setState({sexo})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite RG"
                            value={this.state.rg}
                            onChangeText={rg=> this.setState({rg})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o RG"
                            value={this.state.cpf}
                            onChangeText={cpf=> this.setState({cpf})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a CNH"
                            value={this.state.cnh}
                            onChangeText={cnh=> this.setState({cnh})}
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
            <TouchableOpacity 
                style={styles.detailsButtonAdd} 
                rippleColor="#E9EEF3"
                onPress={() => {
                this.setState({modalVisible: true});
                }}
            >  
                <AntDesign name="adduser" size={24} color="#00cc00" />
                <Text style={{color:'#00cc00', fontWeight:'bold'}}>Adicionar Motorista</Text>
            </TouchableOpacity>
            <FlatList
                style={styles.vehicleList}
                data={motorista}
                keyExtractor={motorista => motorista.uid}
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
                            onPress={this.navigateToDetailsMotorista}
                        >
                            <Text style={styles.detailsButtonText}>Editar</Text>
                            <Feather name="arrow-right" size={16} color='#4f8cff' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )}
}
