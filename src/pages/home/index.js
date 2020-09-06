import React, {Component} from 'react';
import { MaterialCommunityIcons, Fontisto, FontAwesome5 } from '@expo/vector-icons'; 
import {View, Image, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import logoImg from '../../assets/logoFundoColorido.png';
import styles from './styles';
import {FontAwesome} from '@expo/vector-icons';
import firebase from 'firebase';

export default class Home extends Component{

    singOutAccount = () =>{
        firebase.auth().signOut().then(() =>
            this.props.navigation.navigate('Login')
        )};

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

                <FontAwesome name="power-off" onPress={this.singOutAccount} size={24} color="red" />
            </View>

            <Text style={styles.title}>Bem vindo!</Text>

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
