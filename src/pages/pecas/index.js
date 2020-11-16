import React, { useState, useEffect } from 'react';
import {View, FlatList, Alert, Image, Modal, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { Searchbar} from 'react-native-paper';
import {FontAwesome, AntDesign} from '@expo/vector-icons';
import {TouchableRipple} from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';


export default function Pecas(){
    const[pecas, setPecas] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const navigation = useNavigation();

    function navigateToLogin(){
        navigation.navigate('Login');
    }

    function navigateToDetailsPecas(pecas){
        navigation.navigate('DetailsPecas', {pecas});
    }

    async function loadPecas(){
        if(loading){
            return;
        }

        if(total > 0 && pecas.length == total){
            return;
        }

        
        setLoading(true);

        const response = await api.get('pecas', {
            params: {page}
        });

        setPecas([ ...pecas, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    function handleNomeChange(nome){ setNome(nome); }
    function handleQuantidadeChange(quantidade){ setQuantidade(quantidade); }

    async function cadastrarPecas(){
        api.post('pecas', {nome, quantidade});
    }

    useEffect(() => {
        loadPecas();
    }, []);

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

            {/* <Text style={styles.description}>Peças</Text>
            <Searchbar placeholder="Escreva aqui..." style={styles.search} editable={true} value={this.state.search} ></Searchbar> */}

            <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal fechou!");
            }}>
                <View style={styles.modalView}>
                    <TouchableRipple
                        style={styles.alinharClose}
                        rippleColor="#E9EEF3"
                        onPress={() => {
                            setModalVisible(!modalVisible);
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
                            onChangeText={handleNomeChange}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Quantas peças estão no estoque?"
                            onChangeText={handleQuantidadeChange}
                        />
                        {/* <View style={styles.errorMessage}>
                            {this.state.errorMessage && <Text style={styles.wrongText}>{this.state.errorMessage}</Text>}
                        </View> */}
                        <TouchableRipple 
                            style={styles.button}
                            rippleColor="#E9EEF3"
                            onPress={cadastrarPecas}
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
                    setModalVisible(true);
                }}
            >  
                <Text style={{color:'#FFF', fontWeight:'bold'}}>Adicionar Peças</Text>
            </TouchableOpacity>

            <FlatList
                style={styles.listaPecas}
                data={pecas}
                keyExtractor={(pecas) => String(pecas.id)}
                showsVerticalScrollIndicator ={false}
                onEndReached={loadPecas}
                onEndReachedThreshold={0.2}
                renderItem={({item: pecas}) => (
                    <View style={styles.pecas}>
                        <Text style={styles.pecasProperty}>Peça:</Text>
                            <Text style={styles.pecasValue}>{pecas.nome}</Text>

                        <Text style={styles.pecasProperty}>Quantidade:</Text>
                        <Text style={styles.pecasValue}>{pecas.quantidade}</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton} 
                            onPress={() => navigateToDetailsPecas(pecas)}
                        >
                            <Text style={styles.detailsButtonText}>Ver detalhes</Text>
                            <AntDesign name="right" size={24} color="#4f8cff" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}
