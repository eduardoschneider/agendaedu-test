import React from 'react';
import { View, Text } from 'react-native';
import { Container } from './styles';

export default function Alunos() {
  return (
    <Container source={require('@/assets/dashboard-background.jpg')} resizeMode="cover">
      <Text>Alunos Tab</Text>
    </Container>
  );
}