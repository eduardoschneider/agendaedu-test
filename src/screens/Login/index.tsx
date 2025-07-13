import React, { useState } from 'react';
import { Text } from 'react-native';
import { StackScreenNavigationProp } from '@/navigation';
import { Professor } from '@/types/types';
import * as Sentry from '@sentry/react-native';
import { useRequest } from '@/hooks/useRequest';
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
} from './styles';

export default function Login({
  navigation,
}: {
  navigation: StackScreenNavigationProp<'Login'>;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, _] = useState('');

  const { fetchAll, fetchByCredentials } = useRequest<Professor>('professors');

  const handleLogin = async () => {
    console.log(email);
    console.log(password);
    const professor = await fetchByCredentials(email, password);
    console.log(professor);
    if (professor) {
        navigation.navigate('Dashboard');
    } else {
      console.log('Credenciais inválidas');
    }
  };

  return (
    <Container>
      <BackgroundGradient
        source={require('@/assets/login-background.jpg')}
        resizeMode="cover"
      >
        <Logo></Logo>

        <Title>Bem-vindo!</Title>

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

        {error ? <ErrorMessage>{error}</ErrorMessage> : null}

        <Button onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </Button>

        <Cadastro
          onPress={() => {
            Sentry.captureException(new Error('First error'));
          }}
        >
          <Text>Não tem cadastro ainda? </Text>
          <CadastroText>Clique aqui</CadastroText>
        </Cadastro>
      </BackgroundGradient>
    </Container>
  );
}
