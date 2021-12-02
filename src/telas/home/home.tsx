import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export interface HomeProps {
}

export function Home (props: HomeProps) {
  const nav = useNavigation();
  
    return (
      
      <View style= {styles.form}>
          <Text style={styles.frase}>Burguer Mania </Text>

         
              <ImageBackground source= {require('../../img/Hgr.png')} 
                      style={styles.icone}>
                        <View style= {{flexDirection:'row', justifyContent:'space-around', width:'100%', paddingTop: 300, alignItems:'flex-start'}}> 
                              <Button buttonStyle={{borderRadius:20, backgroundColor: 'red', 
                                        marginHorizontal: 150, marginVertical: 30, marginTop: 20}} icon={{name:'local-dining', color:'yellow', size: 40}}/>
                              <Button onPress={()=> nav.navigate('pedido')} buttonStyle={{borderRadius:20, backgroundColor: 'red', 
                                        marginHorizontal: 150, marginVertical: 30, marginTop: 20}} icon={{name:'description', color:'yellow', size: 40}}/>         
                      </View>


              </ImageBackground>
              <Button  title ="Cardápio" type= "solid"  onPress={()=> nav.navigate('carpadio')} 
              buttonStyle={{borderRadius:10, backgroundColor: '#8A0808',
              marginHorizontal: 10, marginVertical: 20, marginTop:30, marginRight: 50, marginLeft: 50}} 
              icon={{name:'lunch-dining', color:'yellow'}}/>
              
     </View>
    );
}
const styles = StyleSheet.create({
  icone: {
    width:'100%', 
    height:'70%',
    marginTop: 60,
    backgroundColor: 'yellow', 
    paddingTop: 50,
    flexDirection:'row',
    justifyContent: 'center',
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    
  },

  frase: {
      color: 'white',
      marginTop: 30,
      fontSize: 30,
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign: 'center',
      fontWeight: "bold"
      
    },
  
    form: {
      marginTop: 35,
      backgroundColor: 'red', 
      flex: 1
      
    },
    texto: {
      color: 'black',
      marginTop: 900,
      fontSize: 30,
      justifyContent: 'center',
      flexDirection: 'row',
      textAlign: 'center',
      fontWeight: "bold"
  
    },
  
  })

