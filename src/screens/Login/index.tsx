import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { StackScreenNavigationProp } from '@/navigation';
import { Professor } from '@/types/types';
import { useRequest } from '@/hooks/useRequest';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '@/store/professor/professorSlice';
import {
  Container,
  BackgroundGradient,
  Logo,
  Title,
  Input,
  Button,
  ButtonText,
  Cadastro,
  CadastroText,
  ErrorMessage,
  Subtitle,
} from './styles';
import { RootState } from '@/store/store';

export default function Login({
  navigation,
}: {
  navigation: StackScreenNavigationProp<'Login'>;
}) {
  const [email, setEmail] = useState('professor1@example.com');
  const [password, setPassword] = useState('senha123');

  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state: RootState) => state.professor)

  const handleLogin = async () => {
    dispatch(loginRequest({ email, password }))
  };
  
    useEffect(() => {
      console.log('Login data:', data);
    if (data) {
      navigation.replace('Dashboard')
    }
  }, [data])

  return (
    <Container>
      <BackgroundGradient
        source={require('@/assets/login-background.jpg')}
        resizeMode="cover"
      >
        <Logo></Logo>

        <Title>Bem-vindo!</Title>
        <Subtitle>Faça o login para continuar.</Subtitle>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </Button>

        <Cadastro>
          <Text>Não tem cadastro ainda? </Text>
          <CadastroText>Clique aqui</CadastroText>
        </Cadastro>
      </BackgroundGradient>
    </Container>
  );
}
