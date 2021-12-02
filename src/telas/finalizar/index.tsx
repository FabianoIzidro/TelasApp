import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export interface CompraProps {
}

export function Compra (props: CompraProps) {
  const nav = useNavigation();

    return (
      <View style= {styles.form}>
         <Text style={styles.frase}>Compra Realizada </Text>

         
        <ImageBackground source= {require('../../img/valido.png')} style={styles.icone}>
        </ImageBackground> 
      </View>
      
    );
}
const styles = StyleSheet.create({

  frase: {
      color: 'black',
      marginTop: 30,
      fontSize: 30,
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign: 'center',
      fontWeight: "bold"
      
    },
    form: {
      marginTop: 70,
      flex: 1
      
    },
    icone: {
      width:'100%', 
      height:'70%',
      marginTop: 60,
      paddingTop: 50,
      flexDirection:'row',
      justifyContent: 'center',
      borderBottomEndRadius: 50,
      borderBottomLeftRadius: 50,
      
    },
  })
