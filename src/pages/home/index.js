import React, {Component} from 'react';
import { MaterialCommunityIcons, Fontisto, FontAwesome5 } from '@expo/vector-icons'; 
import {View, Image, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import logoImg from '../../assets/logoFundoColorido.png';
import styles from './styles';
import {FontAwesome} from '@expo/vector-icons';
import firebase from 'firebase';
import {firebasecConfig} from '../../banco/index.js';

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated: false,
            nome: '',
            tipoDeUsuario: '',
        };
        this.singOutAccount = this.singOutAccount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

}
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

        firebase.database().ref('usuario/' + uid).once('value', (data) => {
        
            this.setState({
                nome: data.val().nome
            })
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/invalid-email':
                    this.props.navigation.navigate('Login');
                break;
                case 'auth/invalid-password':
                    this.props.navigation.navigate('Login');
                break;
                case 'auth/user-not-found':
                    this.props.navigation.navigate('Login');
                break;
            default:
                this.props.navigation.navigate('Login');
                break;
            }
        })
    }
    
    navigateToLogin = () => {
        this.props.navigation.navigate('Login');
    }

    navigateToVehicule = () => {
        this.props.navigation.navigate('Veiculos');
    }
    
    navigateToMotorista = () => {
        this.props.navigation.navigate('Motoristas');
    }

    navigateToComprovantes = () => {
        this.props.navigation.navigate('Comprovantes');
    }

    navigateToPecas = () => {
        this.props.navigation.navigate('Pecas');
    }



    render(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableRipple 
                    rippleColor="#E9EEF3"
                    onPress={this.singOutAccount}
                >

                    <FontAwesome name="power-off" size={24} color="red" />

                </TouchableRipple>
            </View>

            <Text style={styles.title}>Bem vindo, {this.state.nome}!</Text>

            <View style={styles.homeList}>
                    
                    <TouchableRipple 
                        rippleColor="#E9EEF3"
                        style={styles.home} 
                        onPress={this.navigateToVehicule}
                    >
                        <View>
                            <MaterialCommunityIcons style={styles.icon} name="car-multiple" size={120}/>
                            <Text style={styles.detailsButtonText}>Veículos</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple 
                        rippleColor="#E9EEF3"
                        style={styles.home} 
                        onPress={this.navigateToMotorista}
                    >
                        <View>
                            <Fontisto style={styles.icon} name="person" size={120}/>
                            <Text style={styles.detailsButtonText}>Motoristas</Text>
                        </View>
                    </TouchableRipple>
            </View>
            <View style={styles.homeListrow}>
                    <TouchableRipple 
                        rippleColor="#E9EEF3"
                        style={styles.home} 
                        onPress={this.navigateToComprovantes}
                    >
                        <View>
                            <FontAwesome5 style={styles.icon} name="file-invoice-dollar" size={120}/>
                            <Text style={styles.detailsButtonText}>Comprovantes</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple 
                        rippleColor="#E9EEF3"
                        style={styles.home} 
                        onPress={this.navigateToPecas}
                    >
                        <View>
                            <MaterialCommunityIcons style={styles.icon} name="car-battery" size={120} />
                            <Text style={styles.detailsButtonText}>Peças</Text>
                        </View>
                    </TouchableRipple>


            </View>
        </View>
    )
    };
}
