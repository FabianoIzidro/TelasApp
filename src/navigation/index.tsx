import {NavigationContainer} from '@react-navigation/native'
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import React from 'react';
import {Home} from '../telas/home/home';
import Acessar from '../telas/login/acessar.funcao';
import Logar from '../telas/login/Logar';

const Stack = createStackNavigator();

export function MainNavigation (){

    return(
        <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}> 
                    <Stack.Screen name="acessar" component={Acessar} />
                    <Stack.Screen name="logar" component={Logar} />
                    <Stack.Screen name="home" component={Home}
                        options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter }} />
             </Stack.Navigator>
        </NavigationContainer>
        
    )
}
    