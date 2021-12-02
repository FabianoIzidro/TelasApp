import {NavigationContainer} from '@react-navigation/native'
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import React from 'react';
import Cadastrar from '../telas/cadastro';
import { Cardapio } from '../telas/cardapio';
import { Compra } from '../telas/finalizar';
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
                    <Stack.Screen name="pedido" component={PerdidoFeito} />
                    <Stack.Screen name="Compra" component={Compra} />
                    <Stack.Screen name="cadastrar" component={Cadastrar}
                        options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }} />
             </Stack.Navigator>
        </NavigationContainer>
        
    )
}


    