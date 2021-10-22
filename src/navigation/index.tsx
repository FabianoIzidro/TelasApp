import {NavigationContainer} from '@react-navigation/native'
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import React from 'react';
import { Cardapio } from '../telas/cardapio';
import {Home} from '../telas/home/home';
import Acessar from '../telas/login/acessar.funcao';
import Logar from '../telas/login/Logar';
import { PerdidoFeito } from '../telas/pedido';
import { AppNavegacao } from './drawer-menu';

const Stack = createStackNavigator();

export function MainNavigation (){

    return(
        <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}> 
                <Stack.Screen name="acessar" component={Acessar} />
                    <Stack.Screen name="logar" component={Logar} />
                    <Stack.Screen name="home" component={AppNavegacao} />
                    <Stack.Screen name="carpadio" component={Cardapio} />
                    <Stack.Screen name="pedido" component={PerdidoFeito} 
                        options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }} />
             </Stack.Navigator>
        </NavigationContainer>
        
    )
}


    