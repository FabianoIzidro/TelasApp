import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Button, withTheme } from 'react-native-elements';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Perfil } from '../../../models/perfil';

export interface MinhaContaProps {
  perfil: Perfil
  onEditar(perfil: Perfil): void
  onSalvar(id?: String): void
}

export function MinhaConta (props: MinhaContaProps) {
    const {perfil} = props;
    return (
      <SwipeRow leftOpenValue = {200} disableRightSwipe rightOpenValue={-120} stopRightSwipe={-120}>

        
            <View style = {{flexDirection:'row', justifyContent:'flex-end'}}>
                <Button title ="Editar" onPress={() =>props.onEditar(perfil)} containerStyle={{borderRadius:0}} buttonStyle={styles.btnEditar}/>
                <Button title ="Salvar" onPress={() =>props.onSalvar(perfil.id)} containerStyle={{borderRadius:0}} buttonStyle={styles.btnSalvar}/>
            </View>
           
              <View style= {styles.container}>
            <View style= {styles.container}><Text style= {styles.fonte}>{perfil.nome}</Text></View>
            <View style= {styles.container}><Text style= {styles.fonte}>{perfil.email}</Text></View>
            <View style= {styles.container}><Text style= {styles.fonte}>{perfil.cpf}</Text></View>
            <View style= {styles.container}><Text style= {styles.fonte}>{perfil.telefone}</Text></View>
            <View style= {styles.container}><Text style= {styles.fonte}>{perfil.rua}</Text></View>
            <View style= {styles.container}><Text style= {styles.fonte}>{perfil.cep}</Text></View>
            <View style= {styles.container}><Text style= {styles.fonte}>{perfil.numero}</Text></View>
            <View style= {styles.container}><Text style= {styles.fonte}>{perfil.bairro}</Text></View>
            <View style= {styles.container}><Text style= {styles.fonte}>{perfil.cidade}</Text></View>
           </View>
         
      </SwipeRow>   
   
      
    );
}
const styles = StyleSheet.create({
 container: {
   borderBottomColor:'black',
   borderBottomWidth: 1,
   backgroundColor: 'yellow',
   padding: 10,
    
  },

  fonte:{
    fontSize: 18,
    fontWeight: "bold",
  },

  btnEditar:{
   backgroundColor: 'black', width: 60, borderRadius:0},

  btnSalvar:{
      backgroundColor: 'red', width:65, borderRadius:0},
})

