import { useNavigation } from '@react-navigation/core';
import firebase from 'firebase';
import { Formik } from 'formik';
import * as React from 'react';
import { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ToastAndroid, ImageBackground} from 'react-native';
import { Button, Input } from 'react-native-elements';
import * as Yup from 'yup';

export interface LogarProps {
  onBlur?(erro: any): void;
}

export default function Logar (props: LogarProps) {

  const nav = useNavigation();
  const [erro, setErro] = useState("");

  const login = async (dados) => {
      setErro("")

      firebase.auth().signInWithEmailAndPassword(dados.email, dados.senha)
      .then(usuario =>nav.navigate('home'))
      .catch(erro => ToastAndroid.show('Email ou senha incorreta', ToastAndroid.LONG))
  }


return (
  <>

    <Formik
        initialValues={{email:'', senha:''}}
        validationSchema={Yup.object({
            email: Yup.string().required('campo email é obrigatorio').trim().email('o campo precisa ser um email'),
            senha: Yup.string().required('o campo senha é obrigatorio').min(6, 'a senha deve ter pelo menos 6 caracteres')
        })}
        onSubmit={login}>
      {({values, isValid, touched, handleChange, handleSubmit, handleBlur, isSubmitting, errors}) => (
      <View  style={styles.form}>
        <Text style={styles.frase}>Burguer Mania </Text>
          <ImageBackground source= {require('./../../img/Hgr.png')}
            style={styles.icone}>
          </ImageBackground>
      
           <Input onBlur={handleBlur('email')} placeholder="Digite o seu email"
              onChangeText= {handleChange('email')}
              keyboardType="email-address"
              leftIcon={{name: "person", color: "black"}}
              inputContainerStyle={styles.dados}
              placeholderTextColor="black"
           />
              {touched.email && <Text style= {styles.errors}>{errors.email}</Text>}
  
           <Input onBlur={handleBlur('senha')} placeholder="Digite o seu senha"
              onChangeText= {handleChange('senha')}
              placeholderTextColor="black"
              secureTextEntry 
              leftIcon={{name:"lock", color:"black"}}
              inputContainerStyle={styles.dados2}
          />
              {touched.senha && <Text style= {styles.errors}>{errors.senha}</Text>}

              {erro != null && <Text style={{color: 'black', fontSize: 18, textAlign: 'center', marginTop:-30}}>{erro}</Text>}
              {! isSubmitting && <Button title ="LOGIN" type= "solid" 
              disabled= {!isValid} onPress={() => handleSubmit()}
              buttonStyle={{borderRadius:50, backgroundColor: '#E50D0D', 
              marginHorizontal: 80, marginVertical: 5}} />}
              {isSubmitting && <ActivityIndicator size="large" color="black"/>}
            <Text style={styles.cadastrar} onPress={()=> nav.navigate('cadastrar')}> não possui conta? {'\n'}Clique aqui para se cadastrar </Text>
      </View> )}
     
    </Formik>
  </>
);
}
const styles = StyleSheet.create({

  form: {
    marginTop: 35,
    backgroundColor: '#ECE015', 
    flex: 1
  
  },
  
  dados: {
    backgroundColor: 'rgba(255,255,255,0.5)', 
    padding: 25,
    marginBottom: -5,
    borderRadius: 30,
    marginHorizontal: 1, 
    marginTop: -60, 
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
  
  cadastrar: {
    color: 'black',
    fontSize: 20,
    textAlign:'center',
    margin: 5,
    textDecorationLine:'underline',
    
     
   },
   icone: {
    width:'100%', 
    height:'55%',
    marginTop: 30
    
  },
  errors: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center'
  },
  
  frase: {
    color: 'black',
    marginTop: 20,
    fontSize: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    fontWeight: "bold"
  
  },
  
  })