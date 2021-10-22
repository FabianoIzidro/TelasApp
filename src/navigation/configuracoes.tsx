import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ConfigGeralScreen } from "../telas/config/geral";
import { ConfigPrivadoScreen } from "../telas/config/privado";
import {MaterialIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export function configuracoesNavegacao() {

    return(
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveBackgroundColor: 'yellow', 
            tabBarInactiveBackgroundColor: 'red',
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'white'
        }}>
            <Tab.Screen name="geral" component={ConfigGeralScreen} options={{
                tabBarLabel:'configurações',
                tabBarIcon: (props) => <MaterialIcons name = "settings" color={props.focused? 'black' : 'white'} size ={25} />,
                tabBarLabelStyle: {fontSize:20}

            }}/>
            <Tab.Screen name="privado" component={ConfigPrivadoScreen} options={{
                tabBarLabel:'Privacidade',
                tabBarIcon: (props) => <MaterialIcons name = "lock" color={props.focused? 'black' : 'white'} size ={25} />,
                tabBarLabelStyle: {fontSize:20}}}/>
        </Tab.Navigator>
    )

}