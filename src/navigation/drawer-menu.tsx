import React from "react";
import{createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import { Home } from "../telas/home/home";
import { ConfigGeralScreen } from "../telas/config/geral";
import{MaterialIcons} from '@expo/vector-icons';
import { Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { configuracoesNavegacao } from "./configuracoes";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { Cardapio } from "../telas/cardapio";

const Drawer = createDrawerNavigator();

export function AppNavegacao(){
    return(
        <Drawer.Navigator screenOptions={{headerShown: false, drawerActiveBackgroundColor:'yellow'}}

            drawerContent={(props) => (
                <View style={{paddingTop: 30, backgroundColor: '#DF0101', flex: 1, alignItems: 'stretch'}}>
                    <Text style={{fontSize:20, marginLeft:20, color: 'white'}}> Bem vindo!</Text>
                    <Avatar rounded title  = 'JF' size = 'large' containerStyle={{backgroundColor:'black', alignSelf:'center'}}/>
                    <DrawerItemList {...props} />
                    <Button title="Sair"  onPress={() => props.navigation.navigate('acessar')}/>
                </View>
            )}>


            <Drawer.Screen name = "home"  component={Home} options={{
                 drawerLabel: 'Menu',drawerActiveTintColor:'black',drawerInactiveTintColor:'white', 
                drawerIcon: (props) => <MaterialIcons name= "home" color={props.focused? 'black' : 'white'} size={20}/>
                }}/>
            <Drawer.Screen name = "config" component={configuracoesNavegacao}options={{
                drawerLabel: 'Configurações', drawerActiveTintColor:'black',drawerInactiveTintColor:'white',
                drawerIcon: (props) => <MaterialIcons name= "settings" color={props.focused? 'black' : 'white'} size={20}/>
                }}/>

        </Drawer.Navigator>
    )
}