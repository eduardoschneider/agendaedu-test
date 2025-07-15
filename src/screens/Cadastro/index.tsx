import React, { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { StackScreenNavigationProp } from '@/navigation';
import {
  Container,
  BackgroundGradient,
  Logo,
  Title,
  Input,
  Button,
  ButtonText,
  CadastroContainer,
  CadastroText,
  Subtitle,
} from './styles';
import { useRequest } from '@/hooks/useRequest';
import { Professor } from '@/types/types';

export default function Cadastro({navigation}: {navigation: StackScreenNavigationProp<'Login'>;}) {

  const [name, setName] = useState('a');
  const [email, setEmail] = useState('a');
  const [bio, setBio] = useState('a');
  const [password, setPassword] = useState('a');

  const { add } = useRequest<Professor>('professors');

  const handleCadastro = async () => {
    try {
      await add({
        email: email,
        password: password,
        name: name,
        bio: bio,
        favorites: []
      });

      Alert.alert('Cadastro feito com sucesso!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível cadastrar o professor.');
    }
  };

  return (
    <Container>
      <BackgroundGradient
        source={require('@/assets/login-background.jpg')}
        resizeMode="cover"
      >
        <Logo></Logo>

        <Title>Vamos fazer seu cadastro</Title>
        <Subtitle>Preencha os campos abaixo para continuar.</Subtitle>

        <Input
          placeholder="Prencha seu nome..."
          keyboardType="default"
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
        />

        <Input
          placeholder="Preencha seu e-mail..."
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Input
          placeholder="Diga um pouco sobre você..."
          keyboardType="default"
          autoCapitalize="none"
          value={bio}
          onChangeText={setBio}
        />

        <Input
          placeholder="Digite sua senha..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleCadastro}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>

        <CadastroContainer onPress={() => navigation.goBack()}>
          <Text>Já tem login?</Text>
          <CadastroText> Clique aqui</CadastroText>
        </CadastroContainer>
      </BackgroundGradient>
    </Container>
  );
}
