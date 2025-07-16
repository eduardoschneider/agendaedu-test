import React, { useState } from 'react';
import { Alert, Text } from 'react-native';
import { StackScreenNavigationProp } from '@/navigation';
import * as SC from './styles';
import { useRequest } from '@/hooks/useRequest';
import { Professor } from '@/types/types';

export default function Cadastro({navigation}: {navigation: StackScreenNavigationProp<'Login'>;}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');

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
    <SC.Container>
      <SC.BackgroundGradient
        source={require('@/assets/login-background.jpg')}
        resizeMode="cover"
      >
        <SC.Logo></SC.Logo>

        <SC.Title>Vamos fazer seu cadastro</SC.Title>
        <SC.Subtitle>Preencha os campos abaixo para continuar.</SC.Subtitle>

        <SC.Input
          placeholder="Prencha seu nome..."
          keyboardType="default"
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
        />

        <SC.Input
          placeholder="Preencha seu e-mail..."
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <SC.Input
          placeholder="Diga um pouco sobre você..."
          keyboardType="default"
          autoCapitalize="none"
          value={bio}
          onChangeText={setBio}
        />

        <SC.Input
          placeholder="Digite sua senha..."
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <SC.Button onPress={handleCadastro}>
          <SC.ButtonText>Cadastrar</SC.ButtonText>
        </SC.Button>

        <SC.CadastroContainer onPress={() => navigation.goBack()}>
          <Text>Já tem login?</Text>
          <SC.CadastroText> Clique aqui</SC.CadastroText>
        </SC.CadastroContainer>
      </SC.BackgroundGradient>
    </SC.Container>
  );
}
