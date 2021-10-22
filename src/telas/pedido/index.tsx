import * as React from 'react';
import { View, Text, FlatList, StyleSheet, Alert, ToastAndroid, Share } from 'react-native';
import { useState } from 'react';
import { AppToolbar } from '../../components/toolbar';
import { Opcao } from '../../models/opcao';
import { ItemPedido } from './components';
import { Button } from 'react-native-elements';

export interface PerdidoFeitoProps {

}

export function PerdidoFeito (props: PerdidoFeitoProps) {
  const recursoNativo =() =>{
    Share.share({message:'pedido realizado!'})
  }
  const [alterouLista, setAlterouLista] = useState(false)
  const[opcoes, setOpcoes] = useState([
    new Opcao('1','GENERAL PEPPER individual','R$ 15,90', '1'),
    new Opcao('2','BIN KING individual', 'R$ 12,00', '2'),
    new Opcao('3','WHOPPER individual', 'R$ 9,90', '3'),
  ]);

  const adicionar = () => {
    const novasOpcoes = opcoes;
    novasOpcoes.push(new Opcao('1','GENERAL PEPPER individual','R$ 15,90', '1'))
    setOpcoes(novasOpcoes)
    setAlterouLista(!alterouLista) 
  }

  const excluir =(id: string) =>{
    Alert.alert('Excluir item', 'Deseja realmente excluir a tarefa #${id}?',[
      {text:'Confirmar', onPress:()=> ToastAndroid.show('Item Excluido', ToastAndroid.LONG)},
      {text: 'Cancelar'}
    ])
  }

    return (
      <View style= {{backgroundColor:'#F2F2F2'}}>
        <AppToolbar titulo="Pedido"/>
        <FlatList
        data={opcoes}
        extraData = {alterouLista}
        keyExtractor={(item, index)=> String(index)}
        renderItem={(data) =>(
          <ItemPedido
          opcao={data.item}
          onExcluir={excluir}/>
        )}
        />
  

        
            
            <ItemPedido opcao={new Opcao('1','GENERAL PEPPER individual','R$ 15,90','1')}
            onExcluir={(id: string) => console.log(id)}
            />
            <ItemPedido opcao={new Opcao('2','BIN KING individual','R$ 12,00','2')}
            onExcluir={(id: string) => console.log(id)}
            />
            <ItemPedido opcao={new Opcao('3','WHOPPER individual','R$ 9,90','3')}
            onExcluir={(id: string) => console.log(id)}
            />
            
            <Button title ="Opção 1" onPress={adicionar} buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}} /> 
            <Button title ="Opção 2" onPress={adicionar} buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}}/>
            <Button title ="Opção 3" onPress={adicionar} buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}}/>
              <Button title ="Compartilhar" onPress={recursoNativo} buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}}/>
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
      padding: 10
      
    },
  })

