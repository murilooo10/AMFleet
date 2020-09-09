import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import firebase from 'firebase';
import logoImg from '../../assets/logoGrande.png';



export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password:'',
            isAuthenticated: false,
        }; 

        this.componentDidMount = () => {
            this.checkIfLoggedIn();
        }

        this.emailOrPasswordwrong = this.emailOrPasswordwrong.bind(this);
        this.login = this.login.bind(this);
        this.navigatoToCadastro = this.navigatoToCadastro.bind(this);
    }

 
    checkIfLoggedIn = () => {

        firebase.auth().onAuthStateChanged(function(user){

            if(user){
                this.props.navigation.navigate('Home');
            }
            else{
                this.props.navigation.navigate('Login');
            }
        }.bind(this)
        );
    }

    login(e){

        try{
            const {email, password} = this.state;
            const user = firebase.auth()
                .signInWithEmailAndPassword(email.trim(), password).
                then(() =>{
                    this.setState({ isAuthenticated: true});
                    console.log(user);
                    this.props.navigation.navigate('Home');
                })
                .catch(error => {
                    switch (error.code) {
                        case 'auth/invalid-email':
                            this.emailOrPasswordwrong();
                            console.log('entrou qui');
                        break;
                        case 'auth/invalid-password':
                            this.emailOrPasswordwrong();
                        break;
                        case 'auth/user-not-found':
                            this.emailOrPasswordwrong();
                        break;
                    default:
                        alert("ERRO: " + error.code)
                        break;
                    }
                    console.error(error);
                });
                e.preventDefault();
        }catch (err){
            console.log(err);
        }
    }

    //texto para email ou senha incorreto e não funciona
   emailOrPasswordwrong(){
        return(
            <Text style={styles.wrongText}>Email ou senha incorreto!</Text>
        )
    }

    navigatoToCadastro(){
        this.props.navigation.navigate('Cadastro');
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg}/>
                </View>
                <View style={styles.body}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu email"
                        value={this.state.email}
                        onChangeText={email=> this.setState({email})}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password=> this.setState({password})}
                    />

                    <TouchableRipple 
                        style={styles.button}
                        rippleColor="#E9EEF3"
                        onPress={this.login}
                    >
                        <View>
                        <Text style={styles.buttonText}>Entrar</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableOpacity 
                        style={styles.buttonCadastro}
                        onPress={this.navigatoToCadastro}
                    >
                        <Text style={styles.buttonTextCadastro}>Não possui cadastro? Clique aqui!</Text>
                        
                    </TouchableOpacity>
                </View>
            </View> 
        )
    }
} 
