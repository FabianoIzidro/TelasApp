import * as React from 'react';
import { View, Text, FlatList, StyleSheet, Alert, ToastAndroid, Share } from 'react-native';
import { useState } from 'react';
import { AppToolbar } from '../../components/toolbar';
import { Opcao } from '../../models/opcao';
import { ItemPedido } from './components';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import "firebase/database";

export interface PerdidoFeitoProps {

}

export function PerdidoFeito (props: PerdidoFeitoProps) {
  const nav = useNavigation();
  const recursoNativo =() =>{
    Share.share({message:'pedido realizado!'})
  }
  const [alterouLista, setAlterouLista] = useState(false)
  const[opcoes, setOpcoes] = useState<{produto:Opcao, total: number}[]>([
    {produto: new Opcao('1','GENERAL PEPPER INDIVIDUAL ', 'R$',15.00, '1'), total: 0},
    {produto: new Opcao('2','BIN KING INDIVIDUAL' , 'R$', 12.00, '2'), total: 0},
    {produto: new Opcao('3','WHOPPER INDIVIDUAL', 'R$', 9.00, '3'), total: 0},
  ]);


  const GENERAL = (opcao: Opcao) => {
    const novasOpcoes = opcoes;
    const index = novasOpcoes.map(v => v.produto.id).indexOf(opcao.id);
    if (index < 0) 
      novasOpcoes.push({produto:opcao, total: 1})
    else
      novasOpcoes[index].total++;
    setOpcoes(novasOpcoes)
    setAlterouLista(!alterouLista) 
    firebase.database().ref('nome').set(' GENERAL PEPPER INDIVIDUAL R$ 15.00');
  }

  const BIN = (opcao: Opcao) => {
    const novasOpcoes = opcoes;
    const index = novasOpcoes.map(v => v.produto.id).indexOf(opcao.id);
    if (index < 0) 
      novasOpcoes.push({produto:opcao, total: 1})
    else
      novasOpcoes[index].total++;
    setOpcoes(novasOpcoes)
    setAlterouLista(!alterouLista) 
    firebase.database().ref('nome').set(' BIN KING INDIVIDUAL R$12.00');
  }

  const WHOPPER = (opcao: Opcao) => {
    const novasOpcoes = opcoes;
    const index = novasOpcoes.map(v => v.produto.id).indexOf(opcao.id);
    if (index < 0) 
      novasOpcoes.push({produto:opcao, total: 1})
    else
      novasOpcoes[index].total++;
    setOpcoes(novasOpcoes)
    setAlterouLista(!alterouLista) 
    firebase.database().ref('nome').set(' WHOPPER INDIVIDUAL R$ 9.00');
  }

  const excluir =(id: string) =>{
    Alert.alert('Excluir item', 'Deseja realmente excluir a tarefa #${id}?',[
      {text:'Confirmar', onPress:()=> ToastAndroid.show('Item Excluido', ToastAndroid.LONG)},
      {text: 'Cancelar'}
    ])
  }

  


    return (
      <View style= {{backgroundColor:'#F2F2F2', flex: 1}}>
        <AppToolbar titulo="Pedido"/>
        <FlatList
        data={opcoes}
        style={{flex: 1}}
        extraData = {alterouLista}
        keyExtractor={(item, index)=> String(index)}
        renderItem={(data) =>(
          <>
          <ItemPedido
          opcao={data.item.produto}
          total={data.item.total}
          onExcluir={excluir}/>
          <Text style={styles.unidade}>Unidade: {data.item.total}</Text>
        </>
        )}
        />

        <View style={{}}>
            <Button title ="GENERAL PEPPER" onPress={() => GENERAL(new Opcao('1','GENERAL PEPPER INDIVIDUAL', 'R$', 15.00,'1')) } buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}} /> 
            <Button title ="BIN KING" onPress={() => BIN(new Opcao('2','BIN KING INDIVIDUAL', 'R$',12.00,'2'))} buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}}/>
            <Button title ="WHOPPER" onPress={() => WHOPPER(new Opcao('3','WHOPPER INDIVIDUAL', 'R$',9.00,'3'))} buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}}/>
              <Button title ="FINALIZAR" onPress={()=> nav.navigate('Compra')} buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}}/>
              <Button title ="Compartilhar" onPress={recursoNativo} buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}}/>
        </View>
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
    unidade: {

      fontWeight: "bold",
      fontSize: 18,
      justifyContent:'center',
      flexDirection: 'row',
      textAlign: 'center',

    },
  })

