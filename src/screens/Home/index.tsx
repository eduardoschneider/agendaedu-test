import React from 'react';
import { Container, Badge, Profile, BadgeContainer, Name, Cargo, Counter, CounterLabel } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Home() {

  const professor = useSelector((state: RootState) => state.professor.data);

  return (
    <Container source={require('@/assets/dashboard-background.jpg')} resizeMode="cover">
      <Profile
        source={require('@/assets/profile-pic.png')}
        resizeMode="cover"
      ></Profile>
      <Name>{professor?.name}</Name>
      <Cargo>PROFESSOR</Cargo>

      <BadgeContainer>
        <Badge>
          <CounterLabel>ALUNOS FAVORITOS</CounterLabel>
          <Counter>{professor?.favorites.length}</Counter>
        </Badge>
      </BadgeContainer>
      
    </Container>
  );
}
