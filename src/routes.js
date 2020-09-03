import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Veiculos from './pages/veiculos';
import Login from './pages/login';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Veiculos" component={Veiculos} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}