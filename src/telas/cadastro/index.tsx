import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, ToastAndroid, ActivityIndicator } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import firebase from 'firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';


export interface CadastrarProps {
  onBlur?(erro: any): void;
}

export default function Cadastrar (props: CadastrarProps) {
  const nav = useNavigation();
  const [erro, setErro] = useState("");

  const cadastro = async (dados) =>{
    setErro("")

    console.log(dados);
    (await firebase.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
    .then(usuario => ToastAndroid.show('cadastrado com sucesso', ToastAndroid.LONG))
    .catch(erro => ToastAndroid.show('erro de cadastro', ToastAndroid.LONG)))
    
  }
  
    return (
        <>
          <Formik
          initialValues={{email:'', senha:''}}
          validationSchema={Yup.object({
              email: Yup.string().required('campo email é obrigatorio').trim().email('o campo precisa ser um email'),
              senha: Yup.string().required('o campo senha é obrigatorio').min(6, 'a senha deve ter pelo menos 6 caracteres')
          })}
          onSubmit={cadastro}>
            { ({handleSubmit, handleChange, handleBlur, isSubmitting}) => (
            <View style={styles.form}>
              <Text style={styles.frase}>Cadastro </Text>
              
                <Input onBlur={handleBlur('email')} placeholder="Digite o seu email"
                onChangeText={handleChange("email")}
                keyboardType="email-address"
                leftIcon={{name: "person", color: "black"}}
                placeholderTextColor="black"
                inputContainerStyle={styles.dados}
                    
                />
        
                <Input onBlur={handleBlur('senha')} placeholder="Digite o seu senha"
                onChangeText={handleChange("senha")}
                secureTextEntry 
                leftIcon={{name:"lock", color:"black"}}
                placeholderTextColor="black"
                inputContainerStyle={styles.dados2}
                    
                />

              <Button title ="SALVAR" type= "solid" onPress={() => handleSubmit() } 
              buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}} />
              {isSubmitting && <ActivityIndicator size="large" color="black"/>}
            
                
            </View>)}
          </Formik>
        </>
   );
}
const styles = StyleSheet.create({

  form: {
    marginTop: 35,
    backgroundColor: '#ECE015', 
    flex: 1,
    
  },
  
  frase: {
    color: 'black',
    marginTop: 200,
    fontSize: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    fontWeight: "bold"
  
  },

  dados: {
    backgroundColor: 'rgba(255,255,255,0.5)', 
    padding: 25,
    marginBottom: -5,
    borderRadius: 30,
    marginHorizontal: 1, 
    marginTop: 50, 
    flex: 1
  },

  dados2: {
    backgroundColor: 'rgba(255,255,255,0.5)', 
    padding: 25,
    marginBottom: -10,
    borderRadius: 30,
    marginHorizontal: 5, 
    marginTop: -5, 
    flex: 1
    
  },

  errors: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center'
  },

  cadastrar: {
    color: 'black',
    fontSize: 20,
    textAlign:'center',
    margin: 5,
    textDecorationLine:'underline'
  },

})