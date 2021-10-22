import * as React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import {MaterialIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/core';


export interface AppToolbarProps {
    titulo: string
    menu?: boolean
}

export function AppToolbar (props: AppToolbarProps) {
    let leftComponent = null;
    const navigation = useNavigation();

    if(props.menu)
      leftComponent =( 
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <MaterialIcons name="menu" size= {20} color= "white"/>
        </TouchableOpacity>
      )
    return (
      <Header
        containerStyle={{backgroundColor: 'red', borderBottomRightRadius:20, borderBottomLeftRadius: 20,}}
        leftComponent={leftComponent}
        centerComponent={{text:props.titulo, style:{color:'white', fontSize:20, textTransform:'uppercase'}}}
      
      />
    );
}
