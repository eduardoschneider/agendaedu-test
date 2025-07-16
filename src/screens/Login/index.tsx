import React, { useEffect, useState } from 'react';
import { StackScreenNavigationProp } from '@/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '@/store/professor/professorSlice';
import * as SC from './styles';
import { RootState } from '@/store/store';
import AppText from '@/components/AppText';

export default function Login({ navigation }: { navigation: StackScreenNavigationProp<'Login'> }) {
  const [email, setEmail] = useState('edu.schneiders@gmail.com');
  const [password, setPassword] = useState('123456');

  const dispatch = useDispatch();
  const { data } = useSelector(
    (state: RootState) => state.professor,
  );

  const handleLogin = async () => {
    dispatch(loginRequest({ email, password }));
  };

  useEffect(() => {
    if (data) {
      navigation.replace('Dashboard');
    }
  }, [data]);

  return (
    <SC.Container>
      <SC.BackgroundGradient source={require('@/assets/login-background.jpg')} resizeMode="cover">
        <SC.Logo></SC.Logo>

        <SC.Title>Bem-vindo</SC.Title>
        <SC.Subtitle>Faça o login para continuar.</SC.Subtitle>

        <SC.Input
          placeholder="Digite seu e-mail..."
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <SC.Input
          placeholder="Digite sua senha..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <SC.Button onPress={handleLogin}>
          <SC.ButtonText>Login</SC.ButtonText>
        </SC.Button>

        <SC.Cadastro onPress={() => navigation.navigate('Cadastro')}>
          <AppText>Não tem cadastro ainda? </AppText>
          <SC.CadastroText>Clique aqui</SC.CadastroText>
        </SC.Cadastro>
      </SC.BackgroundGradient>
    </SC.Container>
  );
}
