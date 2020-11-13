import React, {Component} from 'react';
import {View, FlatList, Alert, Image, Modal, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { Searchbar} from 'react-native-paper';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import {TouchableRipple} from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';


export default class Pecas extends Component{

    state = {
        list:[],
        modalVisible:false,
    };


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

    navigateToLogin = () =>{
        this.props.navigation.navigate('Login');
    }

    navigateToDetailsPecas = () =>{
        this.props.navigation.navigate('DetailsPecas');
    }
    render(){
    return(
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableRipple 
                    rippleColor="#E9EEF3"
                    onPress={()=>{}}
                >

                    <FontAwesome name="power-off" size={24} color="red" />

                </TouchableRipple>
            </View>

            <Text style={styles.description}>Peças</Text>
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
                        <Text style={styles.description}>Cadastre uma Peça</Text>
                    </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual o nome da Peça?"
                            //value={this.state.peca}
                            //onChangeText={nome=> this.setState({nome})}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Quantas peças estão no estoque?"
                            //value={this.state.sobrenome}
                            //onChangeText={sobrenome=> this.setState({sobrenome})}
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
                <Text style={{color:'#FFF', fontWeight:'bold'}}>Adicionar Peças</Text>
            </TouchableOpacity>

            <FlatList
                style={styles.listaPecas}
                //data={this.state.list}
                data={[1,2,3]}
                //keyExtractor={(list, index) => String(index)}
                keyExtractor={(incidents) => String(incidents)}
                showsVerticalScrollIndicator ={false}
                //renderItem={({item: list}) => (
                renderItem={() => (
                    <View style={styles.pecas}>
                        <Text style={styles.pecasProperty}>Peça:</Text>
                        <Text style={styles.pecasValue}>Bateria</Text>

                        <Text style={styles.pecasProperty}>Quantidade:</Text>
                        <Text style={styles.pecasValue}>12</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={this.navigateToDetailsPecas}
                        >
                            <Text style={styles.detailsButtonText}>Ver detalhes</Text>
                            <AntDesign name="right" size={24} color="#4f8cff" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )}
}
