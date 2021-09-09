import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export interface HomeProps {
}

export function Home (props: HomeProps) {
    return (
      <View style= {styles.form}>
          <Text style={styles.frase}>Burguer Mania </Text>


              <ImageBackground source= {require('../../img/banner.png')}
                      style={styles.icone}>
                        <View style= {{flexDirection:'row', justifyContent:'space-around', width:'100%', paddingTop: 300, alignItems:'flex-start'}}> 
                        <Button buttonStyle={{borderRadius:20, backgroundColor: 'yellow', 
                        marginHorizontal: 150, marginVertical: 30, marginTop: 20}} icon={{name:'local-dining', color:'red' }}/>
          </View>

              </ImageBackground>
              <Button title ="Comprar" type= "solid" 
              buttonStyle={{borderRadius:10, backgroundColor: '#E50D0D', 
              marginHorizontal: 10, marginVertical: 5, marginTop: 50}} />
              
     </View>
    );
}
const styles = StyleSheet.create({
  icone: {
    width:'100%', 
    height:'60%',
    marginTop: 40,
    backgroundColor: 'red', 
    paddingTop: 50,
    flexDirection:'row',
    justifyContent: 'center',
    
  },

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
      marginTop: 35,
      backgroundColor: '#ECE015', 
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

