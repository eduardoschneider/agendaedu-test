import React, { useEffect, useState } from 'react';
import { StackScreenNavigationProp } from '@/navigation';
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
  Subtitle,
} from './styles';
import { RootState } from '@/store/store';
import AppText from '@/components/AppText';

export default function Login({
  navigation,
}: {
  navigation: StackScreenNavigationProp<'Login'>;
}) {
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
    <Container>
      <BackgroundGradient
        source={require('@/assets/login-background.jpg')}
        resizeMode="cover"
      >
        <Logo></Logo>

        <Title>Bem-vindo</Title>
        <Subtitle>Faça o login para continuar.</Subtitle>

        <Input
          placeholder="Digite seu e-mail..."
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          placeholder="Digite sua senha..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleLogin}>
          <ButtonText>Login</ButtonText>
        </Button>

        <Cadastro onPress={() => navigation.navigate('Cadastro')}>
          <AppText>Não tem cadastro ainda? </AppText>
          <CadastroText>Clique aqui</CadastroText>
        </Cadastro>
      </BackgroundGradient>
    </Container>
  );
}
