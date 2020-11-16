
import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, Picker} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import firebase from 'firebase';
import logoImg from '../../assets/logoGrande.png';
import md5 from 'md5';

export default function Cadastro(){
    const navigation = useNavigation();    
    
    function navigateToLogin(){
        navigation.navigate("Login");
    }

        const [selectedValue, setSelectedValue] = useState(null);
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg}/>
                </View>
                <View style={styles.body}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu numero de matricula"
                        
                        //value={this.state.matricula}
                        onChangeText={matricula=> this.setState({matricula})}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome"
                        //value={this.state.nome}
                        onChangeText={nome=> this.setState({nome})}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu sobrenome"
                        //value={this.state.sobrenome}
                        onChangeText={sobrenome=> this.setState({sobrenome})}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu email"
                        //value={this.state.email}
                        onChangeText={email=> this.setState({email})}
                    />

                    <Picker
                        selectedValue={selectedValue}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Usuário Chefe" value="Usuário Chefe" />
                        <Picker.Item label="Chefe de Manutenção" value="Chefe de Manutenção" />
                    </Picker>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                        //value={this.state.password}
                        onChangeText={password=> this.setState({password})}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar senha"
                        secureTextEntry={true}
                        //value={this.state.confirmarSenha}
                        onChangeText={confirmarSenha=> this.setState({confirmarSenha})}
                    />
                    {/* <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.wrongText}>{this.state.errorMessage}</Text>}
                    </View> */}

                    <TouchableRipple 
                        style={styles.button}
                        rippleColor="#E9EEF3"
                        onPress={() =>{}}
                    >
                        <View>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableOpacity 
                        style={styles.buttonLogin}
                        rippleColor="#E9EEF3"
                        onPress={navigateToLogin}
                    >
                        <View>
                        <Text style={styles.buttonTextLogin}>Já possui login? Clique aqui!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View> 
        )
} 