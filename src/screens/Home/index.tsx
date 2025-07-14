import React from 'react';
import { Container, Badge, Profile, BadgeContainer, Name, Cargo, Counter, CounterLabel } from './styles';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <Container source={require('@/assets/dashboard-background.jpg')} resizeMode="cover">
      <Profile
        source={require('@/assets/profile-pic.png')}
        resizeMode="cover"
      ></Profile>
      <Name>Thiago Ferreira Simões</Name>
      <Cargo>PROFESSOR</Cargo>

      <BadgeContainer>
        <Badge>
          <CounterLabel>OBSERVAÇÕES REALIZADAS</CounterLabel>
          <Counter>5</Counter>
        </Badge>
        <Badge>
          <CounterLabel>ALUNOS FAVORITOS</CounterLabel>
          <Counter>5</Counter>
        </Badge>
      </BadgeContainer>
      
    </Container>
  );
}
