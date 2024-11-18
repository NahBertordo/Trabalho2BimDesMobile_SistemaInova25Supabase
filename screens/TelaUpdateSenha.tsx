import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, Pressable } from 'react-native';
import { supabase } from '../lib/supabase';

export default function TelaUpdateSenha({ route, navigation }: { route: any; navigation: any }) {
  const { email } = route.params;
  const [newPassword, setNewPassword] = useState('');

  const handleUpdateSenha = async () => {
    const { data, error } = await supabase.auth.updateUser ({
      password: newPassword,
    });

    if (error) {
      Alert.alert('Erro', error.message);
    } else {
      Alert.alert('Sucesso', 'Senha atualizada com sucesso.');
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <Pressable style={styles.bnt} onPress={handleUpdateSenha}>
        <Text style={styles.textButton}>Atualizar Senha</Text>
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
  input: {
    width: '80%',
    height: 40,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#555',
    borderRadius: 4,
  },
  bnt: {
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
});