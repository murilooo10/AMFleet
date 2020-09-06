import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Veiculos from './pages/veiculos';
import Motoristas from './pages/motoristas'
import Comprovantes from './pages/comprovantes'
import Pecas from './pages/pecas';
import Login from './pages/login';
import firebase from 'firebase';
import {firebasecConfig} from './banco/index.js';

firebase.initializeApp(firebasecConfig);

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Veiculos" component={Veiculos} />
                <AppStack.Screen name="Motoristas" component={Motoristas} />
				<AppStack.Screen name="Comprovantes" component={Comprovantes} />
				<AppStack.Screen name="Pecas" component={Pecas} />
				
            </AppStack.Navigator>

        </NavigationContainer>
    );
}
