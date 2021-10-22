import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { AppToolbar } from '../../../components/toolbar';
import { Perfil } from '../../../models/perfil';
import { MinhaConta } from '../privado/components';

export interface ConfigGeralScreenProps {
}

export function ConfigGeralScreen (props: ConfigGeralScreenProps) {

    const[perfis, setPerfis] = useState([
      new Perfil('Jose Fabiano','fabianoizidro@hotmail.com','11111111111',
      '082988992018','antonio lins filhos','57100000','03','Lourenço','Rio Largo', '1')
    ]);
  
    return (
      <View style= {{backgroundColor:'#D8D8D8'}}>
          <AppToolbar titulo="Configurações" menu/>

         <Text style= {styles.conta}>Minha Conta</Text>
         <FlatList
          data= {perfis}
          keyExtractor={(item, index)=> String(index)}
          renderItem={(data) =>(
            <MinhaConta 
        perfil={data.item}
        onEditar={(perfil:Perfil) => console.log(perfil)}
        onSalvar={(id: string) => console.log(id)}
          />
          )}
          />
      </View>

   
    );
}
const styles = StyleSheet.create({
  conta: {
    fontSize: 30,
    fontWeight: "bold",
    borderBottomColor:'black',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    
  },

})