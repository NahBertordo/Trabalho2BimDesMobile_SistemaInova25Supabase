// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './screens/TelaLogin';
import TelaCadastro from './screens/TelaCadastro';
import TelaEsqueciSenha from './screens/TelaEsqueciSenha';
import TelaHome from './screens/TelaHome';
import TelaDetalhes from './screens/TelaDetalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaEsqueciSenha" component={TelaEsqueciSenha} />
        <Stack.Screen name="TelaHome" component={TelaHome} />
        <Stack.Screen name="TelaDetalhes" component={TelaDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}