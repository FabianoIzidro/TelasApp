import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export interface AcessarProps {
}

export default function Acessar (props: AcessarProps) {
    const nav = useNavigation();
    return (
      <View style={styles.form}>
          <Text style={styles.frase}>Burguer Mania </Text>

    
        <ImageBackground source= {require('./../../img/Hgr.png')}
            style={styles.icone}>
        </ImageBackground>
        <Button title ="ACESSAR" onPress={()=> nav.navigate('logar')} type= "solid" buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}} />
      </View>
    );
}
const styles = StyleSheet.create({

  form: {
    marginTop: 35,
    backgroundColor: '#ECE015', 
    flex: 1
  
  },
    icone: {
      width:'100%', 
      height:'55%',
      marginTop: 10
    },
    frase: {
        color: 'black',
        marginTop: 45,
        fontSize: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        fontWeight: "bold"
    
      },
    
    })
