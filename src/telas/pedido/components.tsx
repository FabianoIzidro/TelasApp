import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SwipeRow } from 'react-native-swipe-list-view';
import { Opcao } from '../../models/opcao';

export interface ItemPedidoProps {
  opcao: Opcao
  onExcluir(id?: string):void
}

export function ItemPedido (props: ItemPedidoProps) {
  const {opcao} =  props;
    return (
      <SwipeRow leftOpenValue = {200} disableRightSwipe rightOpenValue={-65} stopRightSwipe={-120}>
        <View style = {{flexDirection:'row', justifyContent:'flex-end'}}>
                <Button title ="Excluir" onPress={() =>props.onExcluir(opcao.id)} containerStyle={{borderRadius:0}} buttonStyle={styles.btnExcluir}/>
            </View>



      <View style={styles.container}>
         <Text>{opcao.pedido}</Text>
         <Text>{opcao.nome}</Text>
         <Text>{opcao.preco}</Text>
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
    flexDirection:'row',
    justifyContent: 'space-between',
    
  },

  fonte:{
    fontSize: 18,
    fontWeight: "bold",
  },

  btnExcluir:{
      backgroundColor: 'red', width:65, borderRadius:0},
    
})