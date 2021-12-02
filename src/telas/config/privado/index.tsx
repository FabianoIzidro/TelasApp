import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppToolbar } from '../../../components/toolbar';
import { Switch } from 'react-native-elements';
import { useState } from 'react';

export interface ConfigPrivadoScreenProps {
  
}

export function ConfigPrivadoScreen (props: ConfigPrivadoScreenProps) {

  const[isEnabled, setIsEnabled] = useState(false);
  const alternarSwitch =() =>{
    setIsEnabled(previousState => !previousState);

  }

    return (
      <View>
        <AppToolbar titulo="Informações" menu/>

              <Text style= {styles.container}>Ajuste suas Preferências</Text> 
              
              <Text style= {styles.texto}>Receba notificações sobre ofertas, avisos e outros beneficios.</Text>
              <Text style= {styles.notificacao}>Receber notificações por email / sms
                  <Switch trackColor= {{false: '#A4A4A4', true:'white' }}
                    thumbColor ={!isEnabled ? 'white' : 'yellow'}
                    onValueChange={alternarSwitch}
                    value={isEnabled}
                    />
              </Text> 
      
                <View>
                    <Text style= {styles.fundo}>
                        Ler Diretrizes de privacidade de dados e termos de 
                        Uso para o uso de aplicativo da burguer mania
                    </Text>
                </View>
      </View>
      
      
      
    );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
    borderBottomColor:'lightgrey',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    
  },
  texto:{
    padding: 10,
    fontSize:20,
    fontWeight: "bold",

  },

  notificacao:{
    padding: 10,
    fontSize:20,
    backgroundColor: 'red',
    color:'white',
    fontWeight: "bold",
  },

  fundo:{
    backgroundColor: 'yellow',
    padding: 50,
    fontWeight: "bold",
    fontSize:20,
    
  }
})