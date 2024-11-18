import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, Image, Pressable, StyleSheet } from 'react-native';
import { supabase } from '../lib/supabase';

export default function TelaLogin({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
    if (error) {
      Alert.alert('Erro', error.message);
    } else {
      navigation.navigate('TelaHome');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://uvv.br/wp-content/themes/core/dist/images/logo.png' }}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      {/*Estilo do botões de entrar, esqueci senha e não tem conta*/}
      <Pressable style={styles.bnt} onPress={handleLogin}>
        <Text style={styles.textButton}>Entrar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        {/*Estilo do esqueci senha*/}
        <Pressable onPress={() => navigation.navigate('TelaEsqueciSenha')}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        {/*Estilo do não tem conta*/}
        <Pressable onPress={() => navigation.navigate('TelaCadastro')}>
          <Text style={styles.subTextButton}>Não tem conta?</Text>
        </Pressable>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    logo: {
      width: 140,
      height: 50,
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      color: '#555',
      borderRadius: '4px',
    },
    bnt:{
      color: '#fff',
      backgroundColor: '#3276b1',
      borderColor: '#285e8e',
      width: '80%',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    textButton: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    subContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    subTextButton: {
      color: '#3276b1',
    },
  });