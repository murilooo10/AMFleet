import React from 'react';
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'; 
import {View, Image, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Home(){
    const navigation = useNavigation();

    function navigateToVehicule(){
        navigation.navigate('Veiculos');
    }

    function navigateToMotorista(){
        navigation.navigate('Motoristas');
    }

    function navigateToComprovantes(){
        navigation.navigate('Comprovantes');
    }

    function navigateToPecas(){
        navigation.navigate('Pecas');
    }

    return(
        <View style={styles.container}>
            <View style={styles.imagem}>
                <Image source={logoImg}/>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>

            <View style={styles.homeList}>
                    
                    <TouchableRipple 
                        rippleColor="#E9EEF3"
                        style={styles.home} 
                        onPress={navigateToVehicule}
                    >
                        <View>
                            <MaterialCommunityIcons style={styles.iconCenter} name="car-multiple" size={120} color="black" />
                            <Text style={styles.detailsButtonText}>Veículos</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple 
                        rippleColor="#E9EEF3"
                        style={styles.home} 
                        onPress={navigateToMotorista}
                    >
                        <View>
                            <Fontisto style={styles.iconCenter} name="person" size={120} color="black" />
                            <Text style={styles.detailsButtonText}>Motoristas</Text>
                        </View>
                    </TouchableRipple>
                    
                    <TouchableRipple 
                        rippleColor="#E9EEF3"
                        style={styles.home} 
                        onPress={navigateToComprovantes}
                    >
                        <View>
                            <Fontisto style={styles.iconCenter} name="person" size={120} color="black" />
                            <Text style={styles.detailsButtonText}>Comprovantes</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple 
                        rippleColor="#E9EEF3"
                        style={styles.home} 
                        onPress={navigateToPecas}
                    >
                        <View>
                            <Fontisto style={styles.iconCenter} name="person" size={120} color="black" />
                            <Text style={styles.detailsButtonText}>Peças</Text>
                        </View>
                    </TouchableRipple>


            </View>
        </View>
    )
}
