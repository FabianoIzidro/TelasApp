import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { AppToolbar } from '../../components/toolbar';

export interface CardapioProps {
}

export function Cardapio (props: CardapioProps) {
  const nav = useNavigation();

  

  
    return (
      <View style= {{backgroundColor:'yellow', flex:1}}>
      <AppToolbar titulo="Cardápio"/>


         <ImageBackground source= {require('../../img/1.png')}style={styles.opcao1} ></ImageBackground>
         <Text style={styles.texto}>  1: BIN KING individual R$ 12,00</ Text>
         <ImageBackground source= {require('../../img/2.jpg')}style={styles.opcao2}></ImageBackground>
         <Text style={styles.texto}> 2: WHOPPER individual R$ 9,90</ Text>
         <ImageBackground source= {require('../../img/3.png')}style={styles.opcao3}></ImageBackground>
         <Text style={styles.texto}> 3: GENERAL PEPPER individual R$ 15,90</ Text>
         
         <Button title ="Pedido" onPress={()=> nav.navigate('pedido')} type= "solid" buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 110}} />
      </View>
      
    );     
}
const styles = StyleSheet.create({

  form: {
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
    borderBottomColor:'lightgrey',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent: 'center',

  },
  opcao1:{
    width:'100%', 
    height:'70%',
    maxWidth: 150,
    maxHeight: 180,
    marginHorizontal: 100
       
},
opcao2:{
  width:'100%', 
  height:'70%',
  maxWidth: 150,
  maxHeight: 180,
  marginTop: 100,
  marginHorizontal: 100
},

opcao3:{
  width:'100%', 
  height:'70%',
  maxWidth: 150,
  maxHeight: 180,
  marginTop: 100,
  marginHorizontal: 100
},

texto: {
  marginVertical: -50,
  fontWeight: "bold",
  marginHorizontal: 85
}
})
