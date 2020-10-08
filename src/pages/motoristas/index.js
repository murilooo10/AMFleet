import React, {Component} from 'react';
import {Feather} from '@expo/vector-icons';
import {View, FlatList, Alert, Image, Modal, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { Searchbar} from 'react-native-paper';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import {TouchableRipple} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import DateDiff from 'date-diff';


export default class Motorista extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated: false,
            nome: '',
            tipoDeUsuario: '',
            dataAdmissao:'',
            modalVisible: false,
            errorMessage: null,
            list:[],
        };
        this.singOutAccount = this.singOutAccount.bind(this);
}
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(function(user){
            
            if(user){
                this.setState({
                    isAuthenticated: true,
                })
                this.getMotorista();

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
        const {nome, sobrenome, idade, sexo, cpf, rg, cnh, carteiraDeTrabalho} = this.state;
        if(nome != null && sobrenome != null && idade != null && sexo != null && cpf!=null && rg != null && cnh != null && carteiraDeTrabalho != null){
            firebase.database().ref(`motorista/${uid}`).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                idade: this.state.idade,
                sexo: this.state.sexo,
                cpf: this.state.cpf,
                tipoDeUsuario: 3,
                rg: this.state.rg,
                cnh: this.state.cnh,
                carteiraDeTrabalho: this.state.carteiraDeTrabalho,
                dataAdmissao: this.state.dataAdmissao,
            })
            
            alert('cadastrado com sucesso!');
        }else{
            this.setState({errorMessage: "Preencha todos os campos presentes!"});

        }
    }
    removerMotorista = () =>{
        console.log('entrou aqui');
        firebase.database().ref(`motorista/`).once('value', (data) =>{
            data.forEach((uid) =>{
                uid.val();
            })
        }).then(()=>{
            alert('removido com sucesso');
        }).catch(error =>{
            console.log(error)
        })
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

    navigateToLogin = () =>{
        this.props.navigation.navigate('Login');
    }
    getMotorista = () =>{
        firebase.database().ref(`motorista/`).once('value', (data) =>{
            data.forEach((uid) =>{
                
                    this.state.list.push({
                        nome: uid.val().nome,
                        sobrenome:uid.val().sobrenome,
                        idade: uid.val().idade,
                        rg: uid.val().rg,
                        cpf: uid.val().cpf,
                        sexo: uid.val().sexo,
                        cnh: uid.val().cnh,
                        carteiraDeTrabalho : uid.val().carteiraDeTrabalho,
                        dataAdmissao: uid.val().dataAdmissao,
                    })
                    this.setState({
                        list : this.state.list
                    })
            })
        })
    }

    changeDate = (valor) =>{
        this.setState({
            dataAdmissao:valor,
        })
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
            <Searchbar placeholder="Escreva aqui..." style={styles.search} editable={true} value={this.state.search} ></Searchbar>
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
                            placeholder="Digite o CPF"
                            value={this.state.cpf}
                            onChangeText={cpf=> this.setState({cpf})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a CNH"
                            value={this.state.cnh}
                            onChangeText={cnh=> this.setState({cnh})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o número da carteira de trabalho"
                            value={this.state.carteiraDeTrabalho}
                            onChangeText={carteiraDeTrabalho=> this.setState({carteiraDeTrabalho})}
                        />
                        <DatePicker
                            format="DD/MM/YYYY"
                            style={{widht:350}}
                            date={this.state.data}
                            onDateChange={this.changeDate}
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
                style={styles.driverList}
                data={this.state.list}
                keyExtractor={(list, index) => String(index)}
                showsVerticalScrollIndicator ={false}
                renderItem={({item: list}) => (
                    <View style={styles.driver}>
                        <Text style={styles.driverProperty}>Nome Completo:</Text>
                        <Text style={styles.driverValue}>{list.nome} {list.sobrenome}</Text>

                        <Text style={styles.driverProperty}>Idade:</Text>
                        <Text style={styles.driverValue}>{list.idade}</Text>

                        <Text style={styles.driverProperty}>RG:</Text>
                        <Text style={styles.driverValue}>{list.rg}</Text>

                        <Text style={styles.driverProperty}>CPF:</Text>
                        <Text style={styles.driverValue}>{list.cpf}</Text>

                        <Text style={styles.driverProperty}>Sexo:</Text>
                        <Text style={styles.driverValue}>{list.sexo}</Text>

                        <Text style={styles.driverProperty}>Nº da carteira de trabalho:</Text>
                        <Text style={styles.driverValue}>{list.carteiraDeTrabalho}</Text>

                        <Text style={styles.driverProperty}>CNH:</Text>
                        <Text style={styles.driverValue}>{list.cnh}</Text>

                        <Text style={styles.driverProperty}>Data de Admissão:</Text>
                        <Text style={styles.driverValue}>{list.dataAdmissao}</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={this.removerMotorista}
                        >
                            <Text style={styles.detailsButtonText}>Remover</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )}
}
