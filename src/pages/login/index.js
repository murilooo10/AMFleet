import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import logoImg from '../../assets/logoGrande.png';
import {useNavigation} from '@react-navigation/native';



export default function Login(){
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Home');
    }
    function navigatoToCadastro(){
        navigation.navigate('Cadastro');
    }

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
                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.wrongText}>Email ou senha incorreto!</Text>}
                    </View>
                    <TouchableRipple 
                        style={styles.button}
                        rippleColor="#E9EEF3"
                        onPress={this.handleLogin}
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
