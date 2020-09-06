import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
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

    login = async () =>{

        try{
            const user = await firebase.auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password).
                then(() =>{
                    this.setState({ isAuthenticated: true});
                    console.log(user);
                    this.props.navigation.navigate('Home');
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                      console.log('Email ou senha incorreto!');
                    }
                    console.error(error);
                });
        }catch (err){
            console.log(err);
        }
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

                    <TouchableRipple 
                        style={styles.buttonCadastro}
                        rippleColor="#E9EEF3"
                        onPress={this.login}
                    >
                        <View>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                        </View>
                    </TouchableRipple>
                </View>
            </View> 
        )
    }
} 
