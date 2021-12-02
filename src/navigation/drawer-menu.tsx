import React from "react";
import{createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import { Home } from "../telas/home/home";
import{MaterialIcons} from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { configuracoesNavegacao } from "./configuracoes";
import firebase from 'firebase'


const Drawer = createDrawerNavigator();

export function AppNavegacao(){
    return(
        <Drawer.Navigator screenOptions={{headerShown: false, drawerActiveBackgroundColor:'yellow'}}

            drawerContent={(props) => (
                <View style={{paddingTop: 30, backgroundColor: '#DF0101', flex: 1, alignItems: 'stretch'}}>
                    <Text style={{fontSize:20, marginLeft:20, color: 'white'}}> Bem vindo!</Text>
                    <Text style={styles.form}> {firebase.auth().currentUser?.email}</Text>
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
const styles = StyleSheet.create({

    form: {
      fontSize: 20,
      color: 'white'
      
    },
})