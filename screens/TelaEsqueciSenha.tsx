import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Pressable, Image } from 'react-native';
import { supabase } from '../lib/supabase';

export default function TelaEsqueciSenha({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState('');

  const handleEsqueciSenha = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      Alert.alert('Erro', error.message);
    } else {
      Alert.alert('Sucesso', 'Verifique seu email para redefinir a senha.');
      navigation.navigate('UpdateSenha', {email});
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://uvv.br/wp-content/themes/core/dist/images/logo.png' }}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      {/*Estilo do botão redefinir senha*/}
      <Pressable style={styles.bnt} onPress={handleEsqueciSenha}>
      <Text style={styles.textButton}>Redefinir Senha</Text>
      </Pressable>
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